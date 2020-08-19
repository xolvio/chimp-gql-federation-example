import { ListResolvers } from "@generated/graphql/types";

export const List__resolveReference: ListResolvers["__resolveReference"] = async (
  parent,
  context
) => {
  const allLists = await context.todoListsController.getLists();
  return allLists.find((l) => l.id === parent.id);
};
