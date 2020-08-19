import React from "react";
import { ListNavigatorData } from "./ListNavigatorData";
import { ListNavigatorView } from "./ListNavigatorView";
import { List } from "../../generated/graphql";

export function ListNavigator({ lists }: { lists: List[] }): JSX.Element {
  return <ListNavigatorData lists={lists} View={ListNavigatorView} />;
}
