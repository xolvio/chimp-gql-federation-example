import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testTodoList__resolveReference,
} from "~generated/graphql/helpers/TodoList__resolveReferenceSpecWrapper";
import { ToDoList } from "~generated/external-apis";

test("TodoList__resolveReference", async () => {
  const context = td.object<GqlContext>();

  td.when(context.todoListsController.getLists()).thenResolve([
    { id: "ListID" },
    { id: "otherListId" },
  ] as ToDoList[]);

  const parent: ParentType = { id: "ListID", __typename: "TodoList" };

  const result = await testTodoList__resolveReference(parent, context);

  expect(result).toEqual({ id: "ListID" });
});
