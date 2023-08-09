import { TodoListResolvers } from "~generated/graphql/types";

export const TodoList__resolveReference: TodoListResolvers["__resolveReference"] =
  async (parent, context) => {
    const allLists = await context.todoListsController.getLists();
    const foundList = allLists.find((l) => l.id === parent.id);
    if (foundList) {
      return foundList;
    } else {
      throw new Error("list not found");
    }
  };
