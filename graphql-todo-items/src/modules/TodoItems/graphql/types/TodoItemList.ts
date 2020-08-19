import { TodoItemResolvers } from "@generated/graphql/types";

export const TodoItemList: TodoItemResolvers["list"] = (parent) => ({
  id: parent.listId,
});
