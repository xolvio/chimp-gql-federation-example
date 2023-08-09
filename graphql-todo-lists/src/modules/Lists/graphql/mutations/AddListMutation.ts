import { MutationResolvers } from "~generated/graphql/types";

export const AddListMutation: MutationResolvers["AddList"] = (
  parent,
  { listName },
  { todoListsController },
) => todoListsController.createList({ text: listName });
