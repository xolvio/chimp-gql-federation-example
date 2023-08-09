import td from "testdouble";

import { GqlContext } from "~generated/graphql/types";
import { ToDoItem } from "~generated/external-apis";
import { TodoItem__resolveReference } from "./TodoItem__resolveReference";

type ParentType = Parameters<typeof TodoItem__resolveReference>[0];

const testTodoItem__resolveReference = (
  parent: ParentType,
  context: GqlContext,
) => TodoItem__resolveReference(parent, context, null);

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
