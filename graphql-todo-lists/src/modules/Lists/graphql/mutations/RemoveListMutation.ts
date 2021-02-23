import { MutationResolvers } from "~generated/graphql/types";

export const RemoveListMutation: MutationResolvers["RemoveList"] = async (
  parent,
  { listId },
  context
) => {
  await context.todoListsController._delete(listId);
  return listId;
};
