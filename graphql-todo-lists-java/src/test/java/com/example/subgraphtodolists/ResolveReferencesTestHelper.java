package com.example.subgraphtodolists;

import com.jayway.jsonpath.DocumentContext;
import com.netflix.graphql.dgs.DgsQueryExecutor;
import com.netflix.graphql.dgs.client.GraphQLResponse;
import graphql.language.*;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.junit.jupiter.api.DynamicTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;


@Component
public class ResolveReferencesTestHelper {
    @Autowired
    DgsQueryExecutor queryExecutor;

    private static final String SCHEMA_DIRECTIVE_KEY = "key";
    private static final String FIELD_ID = "ID";
    private static final String FIELD_STRING = "String";
    private static final String FIELD_INT = "Int";
    private static final String FIELD_FLOAT = "Float";

    public Stream<DynamicTest> invoke(String[] typesToIgnore) {
        SchemaParser schemaParser = new SchemaParser();
        File schemaFile = new File(System.getProperty("schemaPath") + "/schema.graphqls");
        TypeDefinitionRegistry typeRegistry = schemaParser.parse(schemaFile);

        return typeRegistry.getTypes(ObjectTypeDefinition.class)
            .stream()
            .filter(t -> !shouldIgnoreType(t, typesToIgnore)) // Filter out types to ignore
            .filter(t -> t.getDirectives()
                .stream()
                .anyMatch(d -> d.getName().equals(SCHEMA_DIRECTIVE_KEY)))
            .map(this::createTestForType);
    }

    public Stream<DynamicTest> invoke() {
        return invoke(new String[0]);
    }

    private boolean shouldIgnoreType(ObjectTypeDefinition typeDefinition, String[] typesToIgnore) {
        String typeName = typeDefinition.getName();
        return Arrays.asList(typesToIgnore).contains(typeName);
    }

    private DynamicTest createTestForType(ObjectTypeDefinition type) {
        return dynamicTest("Test for type " + type.getName(), () -> {
            KeyFieldInfo keyFieldInfo = getKeyFieldInfo(type);
            String QUERY_FORMAT =
                "query {_entities(representations: [{__typename: \"%s\", %s: %s}]) { ... on %s {%s}}}";

            String query = String.format(QUERY_FORMAT,
                type.getName(),
                keyFieldInfo.getFieldName(),
                generateTestInputValue(keyFieldInfo.getTypeName()),
                type.getName(),
                keyFieldInfo.getFieldName()
            );


            DocumentContext context = executeQuery(query);

            GraphQLResponse response = new GraphQLResponse(context.jsonString());

            // Extract the data as a Map instead of a specific class
            Map<String, Object> account = response.extractValueAsObject("data._entities[0]", HashMap.class);

            // Get the value of the field directly from the Map
            Object id = account.get(keyFieldInfo.getFieldName());

            // Convert the id to a String
            String idStr = id != null ? id.toString() : null;

            assertEquals(generateTestExpectedValue(keyFieldInfo.getTypeName()), idStr);
        });
    }

    private String generateTestInputValue(String fieldType) {
        switch (fieldType) {
            case FIELD_ID:
            case FIELD_STRING:
                return "\"1\"";
            case FIELD_INT:
                return "1";
            case FIELD_FLOAT:
                return "1.0";
            default:
                throw new RuntimeException("Unsupported field type " + fieldType);
        }
    }

    private String generateTestExpectedValue(String fieldType) {
        switch (fieldType) {
            case FIELD_ID:
            case FIELD_STRING:
                return "1";
            case FIELD_INT:
                return "1";
            case FIELD_FLOAT:
                return "1.0";
            default:
                throw new RuntimeException("Unsupported field type " + fieldType);
        }
    }


    public static class KeyFieldInfo {
        private final String fieldName;
        private final String typeName;

        public KeyFieldInfo(String fieldName, String typeName) {
            this.fieldName = fieldName;
            this.typeName = typeName;
        }

        public String getFieldName() {
            return fieldName;
        }

        public String getTypeName() {
            return typeName;
        }
    }

    private KeyFieldInfo getKeyFieldInfo(ObjectTypeDefinition type) {
        String keyFieldName = type.getDirectives()
            .stream()
            .filter(d -> d.getName().equals("key"))
            .findFirst()
            .map(Directive::getArguments)
            .flatMap(args -> args.stream().findFirst())
            .map(arg -> ((StringValue) arg.getValue()).getValue())
            .orElseThrow(() -> new RuntimeException("No key field for type " + type.getName()));

        FieldDefinition keyField = type.getFieldDefinitions()
            .stream()
            .filter(field -> field.getName().equals(keyFieldName))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Field " + keyFieldName + " not found in type " + type.getName()));

        // Unwrap NonNullType if needed
        Type<?> fieldType = keyField.getType();
        String keyFieldType;
        if (fieldType instanceof NonNullType) {
            keyFieldType = ((TypeName) ((NonNullType) fieldType).getType()).getName();
        } else if (fieldType instanceof TypeName) {
            keyFieldType = ((TypeName) fieldType).getName();
        } else {
            throw new RuntimeException("Unsupported field type " + fieldType);
        }

        return new KeyFieldInfo(keyFieldName, keyFieldType);
    }


    private DocumentContext executeQuery(String query) {
        System.out.println("Executing query: " + query);
        return queryExecutor.executeAndGetDocumentContext(query);
    }
}
