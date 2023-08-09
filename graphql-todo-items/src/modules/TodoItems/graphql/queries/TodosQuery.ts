import { QueryResolvers } from "~generated/graphql/types";

export const TodosQuery: QueryResolvers["Todos"] = (parent, args, context) =>
  context.todoItemController.getItems();
