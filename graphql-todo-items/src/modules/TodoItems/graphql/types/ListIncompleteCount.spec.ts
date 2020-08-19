import td from "testdouble";

import { ResolversParentTypes } from "@generated/graphql/types";
import { ToDoItem } from "@generated/external-apis";
import { ListIncompleteCount } from "./ListIncompleteCount";
import { GqlContext } from "../../../../context";

const testListIncompleteCount = (
  parent: ResolversParentTypes["List"],
  context: GqlContext
) => ListIncompleteCount(parent, {}, context, null);

test("gets the number of incomplete todos in the list", async () => {
  const context = td.object<GqlContext>();

  const todoItems: ToDoItem[] = [
    { id: "1", checked: true, listId: "LIST_ID", text: "todoText" },
    { id: "2", checked: false, listId: "LIST_ID", text: "todoText" },
    { id: "3", checked: false, listId: "DIFFERENT_LIST_ID", text: "todoText" },
    { id: "3", checked: true, listId: "LIST_ID", text: "todoText" },
  ];

  td.when(context.todoItemController.getItems()).thenResolve(todoItems);

  const parent: ResolversParentTypes["List"] = { id: "LIST_ID" };

  const result = await testListIncompleteCount(parent, context);
  expect(result).toEqual(1);
});
