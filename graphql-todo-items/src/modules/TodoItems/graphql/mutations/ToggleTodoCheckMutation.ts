import { MutationResolvers } from "~generated/graphql/types";

export const ToggleTodoCheckMutation: MutationResolvers["ToggleTodoCheck"] = (
  parent,
  { checked, itemId },
  context,
) => {
  return checked
    ? context.todoItemController.markChecked(itemId)
    : context.todoItemController.markUnchecked(itemId);
};
