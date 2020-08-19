import td from "testdouble";
import { MutationAddListArgs, GqlContext } from "@generated/graphql/types";
import { AddListMutation } from "./AddListMutation";

const testAddList = (variables: MutationAddListArgs, context: GqlContext) =>
  AddListMutation({}, variables, context, null);

test("AddList inserts the list to the repository", async () => {
  const context = td.object<GqlContext>();

  const text = "some name";

  const variables: MutationAddListArgs = { listName: text };

  await testAddList(variables, context);

  td.verify(context.todoListsController.createList({ text }));
});
