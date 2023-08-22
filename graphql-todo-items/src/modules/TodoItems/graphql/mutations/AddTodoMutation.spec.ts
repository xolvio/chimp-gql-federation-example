import td from "testdouble";
import { MutationAddTodoArgs, GqlContext } from "~generated/graphql/types";
import { ToDoItem } from "~generated/external-apis";
import { testAddTodo } from "~generated/graphql/helpers/AddTodoMutationSpecWrapper";

test("AddTodo", async () => {
  const context = td.object<GqlContext>();

  const todoItem: Partial<ToDoItem> = {
    text: "text",
  };
  const todoItemInput = { listId: "listId", text: "text" };
  td.when(context.todoItemController.createItem(todoItemInput)).thenResolve(
    todoItem,
  );

  const variables: MutationAddTodoArgs = todoItemInput;
  const result = await testAddTodo(variables, context);

  expect(result).toEqual(todoItem);
});
