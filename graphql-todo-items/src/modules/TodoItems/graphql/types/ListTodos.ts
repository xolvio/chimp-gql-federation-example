import { ListResolvers } from "@generated/graphql/types";

export const ListTodos: ListResolvers["todos"] = async (
  parent,
  args,
  context
) => {
  const res = await context.todoItemController.getItems();
  return res.filter((todo) => todo.listId === parent.id);
};
