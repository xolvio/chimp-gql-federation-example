import td from "testdouble";

import { GqlContext } from "~generated/graphql/types";
import { ToDoItem } from "~generated/external-apis";
import {
  ParentType,
  testTodoItem__resolveReference,
} from "~generated/graphql/helpers/TodoItem__resolveReferenceSpecWrapper";

test("TodoItem__resolveReference", async () => {
  const context = td.object<GqlContext>();

  td.when(context.todoItemController.getItems()).thenResolve([
    { id: "otherId" },
    { id: "matchingId" },
  ] as ToDoItem[]);

  const parent = { id: "matchingId" } as ParentType;

  const result = await testTodoItem__resolveReference(parent, context);

  expect(result).toEqual({ id: "matchingId" });
});
