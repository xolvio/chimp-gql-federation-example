import td from "testdouble";

import { ToDoItem } from "~generated/external-apis";
import {
  GqlContext,
  testTodos,
} from "~generated/graphql/helpers/TodosQuerySpecWrapper";

test("Todos", async () => {
  const context = td.object<GqlContext>();

  const todos: ToDoItem[] = [
    {
      id: "id",
      text: "name",
      checked: false,
      listId: "1",
      createdAt: new Date(),
    },
  ];

  td.when(context.todoItemController.getItems()).thenResolve(todos);

  const result = await testTodos(context);

  expect(result).toEqual(todos);
});
