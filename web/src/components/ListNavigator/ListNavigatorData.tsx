/* global alert */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {
  AllListsDocument,
  TodoList,
  useAddListMutation,
} from "../../generated/graphql";
import { ListNavigatorView } from "./ListNavigatorView";

export function ListNavigatorData({
  lists,
  View,
}: {
  lists: TodoList[];
  View: typeof ListNavigatorView;
}) {
  const [addList] = useAddListMutation({
    variables: {
      listName: "Empty List",
    },
    update: (cache, {data: {AddList}}) => {
      const {Lists} = cache.readQuery({ query: AllListsDocument }) as {Lists: TodoList[]};

      cache.writeQuery({
        query: AllListsDocument,
        data: { Lists: Lists.concat([AddList]) },
      });
    }
    // I forgot about this refetch and the test failed
   // refetchQueries: [{ query: AllListsDocument }],
  });
  // Mock this component. Make everything typed.
  return <View lists={lists} addList={addList} />;
}
