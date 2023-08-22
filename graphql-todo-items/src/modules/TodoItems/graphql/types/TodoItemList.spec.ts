import td from "testdouble";

import {
  GqlContext,
  ParentType,
  testTodoItemList,
} from "~generated/graphql/helpers/TodoItemListSpecWrapper";

test("TodoItemList", async () => {
  const context = td.object<GqlContext>();

  const parent = { listId: "listId" } as ParentType;

  const result = await testTodoItemList(parent, context);

  expect(result).toEqual({ id: "listId" });
});
