import { SchemaDirectiveVisitor } from "graphql-tools";
import { schema } from "~generated/graphql/schema";
import { AuthDirective } from "./AuthDirective";

SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
  authorized: AuthDirective,
});

export { schema };
