import { QueryResolvers } from "@generated/graphql/types";
import { getPage } from "@app/helpers/Paginator";
import { filterLists } from "../../common/filterLists";

export const PagedListsQuery: QueryResolvers["PagedLists"] = async (
  parent,
  args,
  { todoListsController }
) => {
  const allLists = await todoListsController.getLists();
  const filteredLists = args.filter
    ? filterLists(allLists, args.filter)
    : allLists;
  return getPage(filteredLists, args.paginationArgs, "id");
};
