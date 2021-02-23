import td from "testdouble";
import {
  MutationChangeListNameArgs,
  GqlContext,
} from "~generated/graphql/types";
import { ChangeListNameMutation } from "./ChangeListNameMutation";

const testChangeListName = (
  variables: MutationChangeListNameArgs,
  context: GqlContext
) => ChangeListNameMutation({}, variables, context, null);

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
    })
  );
});
