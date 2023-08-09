import td from "testdouble";
import {
  GqlContext,
  MutationRemoveListArgs,
  testRemoveList,
} from "~generated/graphql/helpers/RemoveListMutationSpecWrapper";

test("RemoveList removes the list through the controller", async () => {
  const context = td.object<GqlContext>();

  const listId = "listId";

  const variables: MutationRemoveListArgs = { listId };

  await testRemoveList(variables, context);

  td.verify(context.todoListsController._delete(listId));
});

test("RemoveList returns the id of the removed item", async () => {
  const context = td.object<GqlContext>();

  const listId = "listId";

  const variables: MutationRemoveListArgs = { listId };

  const result = await testRemoveList(variables, context);

  expect(result).toEqual(listId);
});
