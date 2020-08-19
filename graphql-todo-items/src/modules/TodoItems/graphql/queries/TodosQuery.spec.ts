import td from "testdouble";

import { ToDoItem } from "@generated/external-apis";
import { TodosQuery } from "./TodosQuery";
import { GqlContext } from "../../../../context";

const testTodos = (context: GqlContext) => TodosQuery({}, {}, context, null);

test("Todos", async () => {
  const context = td.object<GqlContext>();

  const todos: ToDoItem[] = [
    { id: "id", text: "name", checked: false, listId: "1" },
  ];

  td.when(context.todoItemController.getItems()).thenResolve([
    {
      id: "id",
      text: "name",
      checked: false,
      listId: "1",
    },
  ]);

  const result = await testTodos(context);

  expect(result).toEqual(todos);
});
