import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testTodoListTodos,
} from "~generated/graphql/helpers/TodoListTodosSpecWrapper";
import { ToDoItem } from "~generated/external-apis";

test("TodoListTodos", async () => {
  const context = td.object<GqlContext>();

  const todoItems = [
    { listId: "non-matching-id" },
    { listId: "matching-id" },
    { listId: "other-non-matching-id" },
  ] as ToDoItem[];

  td.when(context.todoItemController.getItems()).thenResolve(todoItems);

  const parent: ParentType = { __typename: "TodoList", id: "matching-id" };

  const result = await testTodoListTodos(parent, context);

  expect(result).toEqual([todoItems[1]]);
});
