import React from "react";
import { ListNavigatorData } from "./ListNavigatorData";
import { ListNavigatorView } from "./ListNavigatorView";
import { TodoList } from "../../generated/graphql";

export function ListNavigator({ lists }: { lists: TodoList[] }): JSX.Element {
  return <ListNavigatorData lists={lists} View={ListNavigatorView} />;
}
