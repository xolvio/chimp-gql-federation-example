/* eslint-disable import/first, import/order */
import td from "testdouble";
import * as getPageType from "~app/helpers/Paginator";

const { getPage } = td.replace(
  "../../../../helpers/Paginator"
) as typeof getPageType;

import * as filterListsType from "../../common/filterLists";

const { filterLists } = td.replace(
  "../../common/filterLists"
) as typeof filterListsType;

import { QueryPagedListsArgs, GqlContext } from "~generated/graphql/types";
import { ToDoList } from "~generated/external-apis";
import { PagedListsQuery } from "./PagedListsQuery";

const testPagedLists = (variables: QueryPagedListsArgs, context: GqlContext) =>
  PagedListsQuery({}, variables, context, null);

test("PagedLists uses the Paginator to return the paginated lists", async () => {
  const context = td.object<GqlContext>();

  const lists = [{ id: "someId", name: "someName" }] as ToDoList[];
  td.when(context.todoListsController.getLists()).thenResolve(lists);

  const variables: QueryPagedListsArgs = {
    paginationArgs: { after: "firstId" },
  };

  await testPagedLists(variables, context);
  td.verify(getPage(lists, variables.paginationArgs, "id"));
});

test("PagedLists uses the filter to return the paginated and filtered lists", async () => {
  const context = td.object<GqlContext>();

  const lists = [{ id: "someId", name: "someName" }] as ToDoList[];
  td.when(context.todoListsController.getLists()).thenResolve(lists);

  const variables: QueryPagedListsArgs = {
    paginationArgs: { after: "firstId" },
    filter: { partialName: "partial name" },
  };

  const filteredList = [{ id: "otherId", name: "otherName" }] as ToDoList[];

  td.when(filterLists(lists, variables.filter)).thenReturn(filteredList);

  await testPagedLists(variables, context);
  td.verify(getPage(filteredList, variables.paginationArgs, "id"));
});
