import React from "react";
import td from "testdouble";
import {List, useAllListsQuery} from "../../generated/graphql";
import { renderWithGraphQL } from "../../testHelpers/renderWithGraphQL";
import { ListNavigatorData } from "./ListNavigatorData";
import { ListNavigatorView } from "./ListNavigatorView";
import { waitFor } from "@testing-library/react";

test('Adding new list updates the Lists cache', async () => {
  const ComponentUnderTest = () => {
    const lists = useAllListsQuery();
    if (lists.loading || !lists.data) {
      return <></>;
    }
    return <ListNavigatorData lists={lists.data.Lists as List[]} View={ListNavigatorView} />;
  };

  const ListsQueryMock = td.func();
  td.when(ListsQueryMock()).thenReturn([{ id: "1", name: "mocked list" }]);

  const AddListMutationMock = td.func();
  td.when(
      AddListMutationMock({
        listName: "Empty List",
      })
  ).thenReturn({ id: "2", name: "New mocked list", incompleteCount: 0, todos: [] })

  const resolvers = {
    Query: {
      Lists: () => ListsQueryMock(),
    },
    Mutation: {
      AddList: (_: any, { listName }: any) => AddListMutationMock({listName}),
    },
  };

  const {getByText} = renderWithGraphQL(<ComponentUnderTest />, resolvers)

  await waitFor(() => getByText('mocked list'));
  getByText('New List').click()
  await waitFor(() => getByText('New mocked list'));
});
