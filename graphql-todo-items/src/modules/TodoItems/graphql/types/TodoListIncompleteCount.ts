import { TodoListResolvers } from "~generated/graphql/types";

export const TodoListIncompleteCount: TodoListResolvers["incompleteCount"] =
  async (parent, args, context) => {
    const res = await context.todoItemController.getItems();
    return res.filter((l) => l.listId === parent.id).filter((l) => !l.checked)
      .length;
  };
