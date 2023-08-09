import td from "testdouble";
import {
  GqlContext,
  MutationChangeListNameArgs,
  testChangeListName,
} from "~generated/graphql/helpers/ChangeListNameMutationSpecWrapper";

test("ChangeListName", async () => {
  const context = td.object<GqlContext>();

  const variables: MutationChangeListNameArgs = {
    listId: "listId",
    newName: "newName",
  };

  await testChangeListName(variables, context);
  td.verify(
    context.todoListsController.rename({
      text: variables.newName,
      id: variables.listId,
    }),
  );
});
