/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {
  AllListsDocument,
  List,
  useAddListMutation,
} from "../../generated/graphql";
import { ListNavigatorView } from "./ListNavigatorView";

export function ListNavigatorData({
  lists,
  View,
}: {
  lists: List[];
  View: typeof ListNavigatorView;
}) {
  const [addList] = useAddListMutation({
    variables: {
      listName: "Empty List",
    },
    //TODO This any should not be here, something broke while updating deps before the demo 30 Jun 2022
    update: (cache, {data: {AddList}}: any) => {
      const {Lists} = cache.readQuery({ query: AllListsDocument }) as {Lists: List[]};

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
