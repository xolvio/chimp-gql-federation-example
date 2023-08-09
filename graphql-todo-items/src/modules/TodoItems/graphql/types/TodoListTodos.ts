import { TodoListResolvers } from "~generated/graphql/types";

export const TodoListTodos: TodoListResolvers["todos"] = async (
  parent,
  args,
  context,
) => {
  const res = await context.todoItemController.getItems();
  return res.filter((todo) => todo.listId === parent.id);
};
