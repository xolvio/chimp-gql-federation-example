import { TodoItemResolvers } from "~generated/graphql/types";

export const TodoItem__resolveReference: TodoItemResolvers["__resolveReference"] =
  async (parent, context) => {
    const allItems = await context.todoItemController.getItems();
    const foundItem = allItems.find((i) => i.id === parent.id);
    if (foundItem) {
      return foundItem;
    } else {
      throw new Error("Item not found");
    }
  };
