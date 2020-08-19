import { QueryResolvers, TodoItemDbObject } from "@generated/graphql/types";

export const TodosQuery: QueryResolvers["Todos"] = (parent, args, context) =>
  context.todoItemController.getItems() as Promise<TodoItemDbObject[]>;
