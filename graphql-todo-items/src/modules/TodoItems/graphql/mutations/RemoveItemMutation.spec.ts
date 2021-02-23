import td from "testdouble";
import { MutationRemoveItemArgs } from "~generated/graphql/types";
import { RemoveItemMutation } from "./RemoveItemMutation";
import { GqlContext } from "../../../../context";

const testRemoveItem = (
  variables: MutationRemoveItemArgs,
  context: GqlContext
) => RemoveItemMutation({}, variables, context, null);

test("passes the id to the repository and returns the id", async () => {
  const context = td.object<GqlContext>();

  const TODO_ID = "someId";
  const variables: MutationRemoveItemArgs = { itemId: TODO_ID };

  const result = await testRemoveItem(variables, context);
  td.verify(context.todoItemController._delete(TODO_ID));
  expect(result).toEqual(TODO_ID);
});
