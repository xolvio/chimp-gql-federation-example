import { TodoItemResolvers } from "~generated/graphql/types";

export const TodoItem__resolveReference: TodoItemResolvers["__resolveReference"] = async (
  parent,
  context
) => {
  const allItems = await context.todoItemController.getItems();
  return allItems.find((i) => i.id === parent.id);
};
