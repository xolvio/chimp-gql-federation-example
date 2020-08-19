import { schema } from "@generated/graphql/schema";
import { SchemaDirectiveVisitor } from "graphql-tools";
import { AuthDirective } from "./AuthDirective";

SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
  authorized: AuthDirective,
});

export { schema };
