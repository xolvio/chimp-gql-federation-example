/* eslint-disable no-param-reassign,@typescript-eslint/no-explicit-any,no-console,class-methods-use-this */
import { SchemaDirectiveVisitor } from "graphql-tools";
import { defaultFieldResolver } from "graphql";
import { GraphQLField } from "graphql/type/definition";
import { GqlContext } from "@generated/graphql/types";
import { authModule } from "@app/createApp";

export class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type): void {
    this.ensureFieldsWrapped(type);
    type._requiredAuthRole = this.args.requires;
  }

  visitFieldDefinition(field, details): void {
    this.ensureFieldsWrapped(details.objectType);
    field._requiredAuthRole = this.args.requires;
  }

  ensureFieldsWrapped(objectType): void {
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();

    Object.values(fields).forEach(
      (
        field: GraphQLField<any, GqlContext> & { _requiredAuthRole: string[] }
      ) => {
        const { resolve = defaultFieldResolver } = field;

        field.resolve = function ResolveField(...args): any {
          const requiredRoles =
            field._requiredAuthRole || objectType._requiredAuthRole;

          if (!requiredRoles) {
            return resolve.apply(this, args);
          }

          const context: GqlContext = args[2];
          const userRoles = authModule.getUserRoles(context.jwt);
          console.log("User Roles:", JSON.stringify(userRoles));

          if (!userRoles.some((r) => requiredRoles.includes(r))) {
            console.log(
              `No intersection between ${JSON.stringify(
                userRoles
              )} and ${JSON.stringify(requiredRoles)}`
            );
            throw new Error("Insufficient permissions.");
          }

          return resolve.apply(this, args);
        };
      }
    );
  }
}
