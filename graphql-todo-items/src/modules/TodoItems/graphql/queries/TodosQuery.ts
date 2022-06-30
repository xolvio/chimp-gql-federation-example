import { QueryResolvers, TodoItemDbObject } from "~generated/graphql/types";

export const TodosQuery: QueryResolvers["Todos"] = (parent, args, context) => {
  console.log("context.headers", context.headers);
  return context.todoItemController.getItems() as Promise<TodoItemDbObject[]>;
};
