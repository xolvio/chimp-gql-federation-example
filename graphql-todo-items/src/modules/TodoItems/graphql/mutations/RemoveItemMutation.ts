import { MutationResolvers } from "@generated/graphql/types";

export const RemoveItemMutation: MutationResolvers["RemoveItem"] = async (
  parent,
  { itemId },
  context
) => {
  await context.todoItemController._delete(itemId);
  return itemId;
};
