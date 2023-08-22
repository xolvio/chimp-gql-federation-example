import td from "testdouble";
import { GqlContext, MutationRemoveItemArgs } from "~generated/graphql/types";
import { testRemoveItem } from "~generated/graphql/helpers/RemoveItemMutationSpecWrapper";

test("passes the id to the repository and returns the id", async () => {
  const context = td.object<GqlContext>();

  const TODO_ID = "someId";
  const variables: MutationRemoveItemArgs = { itemId: TODO_ID };

  const result = await testRemoveItem(variables, context);
  td.verify(context.todoItemController._delete(TODO_ID));
  expect(result).toEqual(TODO_ID);
});
