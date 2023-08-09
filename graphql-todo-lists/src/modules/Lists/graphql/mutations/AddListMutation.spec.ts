import td from "testdouble";
import {
  GqlContext,
  MutationAddListArgs,
  testAddList,
} from "~generated/graphql/helpers/AddListMutationSpecWrapper";

test("AddList inserts the list to the repository", async () => {
  const context = td.object<GqlContext>();

  const text = "some name";

  const variables: MutationAddListArgs = { listName: text };

  await testAddList(variables, context);

  td.verify(context.todoListsController.createList({ text }));
});
