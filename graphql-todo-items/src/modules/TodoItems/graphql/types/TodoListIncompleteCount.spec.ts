import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testTodoListIncompleteCount,
} from "~generated/graphql/helpers/TodoListIncompleteCountSpecWrapper";
import { ToDoItem } from "~generated/external-apis";

const testTodoItem = (param: { listId: string; checked: boolean }) => ({
  ...param,
  id: "1",
  text: "todoText",
  createdAt: new Date(),
});

test("TodoListIncompleteCount", async () => {
  const context = td.object<GqlContext>();

  const todoItems: ToDoItem[] = [
    testTodoItem({ checked: true, listId: "LIST_ID" }),
    testTodoItem({ checked: false, listId: "LIST_ID" }),
    testTodoItem({ checked: false, listId: "DIFFERENT_LIST_ID" }),
    testTodoItem({ checked: true, listId: "LIST_ID" }),
  ];

  td.when(context.todoItemController.getItems()).thenResolve(todoItems);
  const parent: ParentType = { id: "LIST_ID", __typename: "TodoList" };

  const result = await testTodoListIncompleteCount(parent, context);
  expect(result).toEqual(1);
});
