import td from "testdouble";

import { ToDoList } from "~generated/external-apis";
import { List__resolveReference } from "./List__resolveReference";
import { GqlContext } from "../../../../context";

type ParentType = Parameters<typeof List__resolveReference>[0];

const testList__resolveReference = (parent: ParentType, context: GqlContext) =>
  List__resolveReference(parent, context, null);

test("List__resolveReference", async () => {
  const context = td.object<GqlContext>();

  td.when(context.todoListsController.getLists()).thenResolve([
    { id: "ListID" },
    { id: "otherListId" },
  ] as ToDoList[]);

  const parent = { id: "ListID" } as ParentType;

  const result = await testList__resolveReference(parent, context);

  expect(result).toEqual({ id: "ListID" });
});
