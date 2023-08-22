import td from "testdouble";
import { GqlContext, MutationRenameTodoArgs } from "~generated/graphql/types";
import { testRenameTodo } from "~generated/graphql/helpers/RenameTodoMutationSpecWrapper";

test("RenameTodo", async () => {
  const context = td.object<GqlContext>();

  const SOME_ID = "some id";
  const NEW_TEXT = "new text";

  const finalItem = {
    id: SOME_ID,
    text: NEW_TEXT,
  };

  td.when(
    context.todoItemController.rename({ id: SOME_ID, text: NEW_TEXT }),
  ).thenResolve(finalItem);

  const variables: MutationRenameTodoArgs = {
    todoId: SOME_ID,
    newText: NEW_TEXT,
  };

  const result = await testRenameTodo(variables, context);
  expect(result).toMatchObject(finalItem);
});
