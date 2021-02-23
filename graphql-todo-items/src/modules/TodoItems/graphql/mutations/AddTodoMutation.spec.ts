import td from "testdouble";
import { MutationAddTodoArgs, GqlContext } from "~generated/graphql/types";
import { ToDoItem } from "~generated/external-apis";
import { AddTodoMutation } from "./AddTodoMutation";

const testAddTodo = (variables: MutationAddTodoArgs, context: GqlContext) =>
  AddTodoMutation({}, variables, context, null);

test("AddTodo", async () => {
  const context = td.object<GqlContext>();

  const todoItem: ToDoItem = {
    id: "",
    listId: "",
    text: "text",
    checked: true,
  };
  const todoItemInput = { listId: "listId", text: "text" };
  td.when(context.todoItemController.createItem(todoItemInput)).thenResolve(
    todoItem
  );

  const variables: MutationAddTodoArgs = todoItemInput;
  const result = await testAddTodo(variables, context);

  expect(result).toEqual(todoItem);
});
