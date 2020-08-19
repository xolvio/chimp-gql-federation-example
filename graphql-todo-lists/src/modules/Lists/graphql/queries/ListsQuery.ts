import { QueryResolvers } from "@generated/graphql/types";
import { filterLists } from "../../common/filterLists";

export const ListsQuery: QueryResolvers["Lists"] = async (
  parent,
  args,
  context
) => {
  const allLists = await context.todoListsController.getLists();
  return args.filter ? filterLists(allLists, args.filter) : allLists;
};
