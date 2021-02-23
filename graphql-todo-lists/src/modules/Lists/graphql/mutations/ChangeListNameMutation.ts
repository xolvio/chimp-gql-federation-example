import { MutationResolvers } from "~generated/graphql/types";

export const ChangeListNameMutation: MutationResolvers["ChangeListName"] = (
  parent,
  { newName, listId },
  context
) => {
  return context.todoListsController.rename({ text: newName, id: listId });
};
