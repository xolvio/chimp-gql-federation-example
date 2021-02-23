import td from "testdouble";
import { MutationToggleTodoCheckArgs } from "~generated/graphql/types";
import { ToggleTodoCheckMutation } from "./ToggleTodoCheckMutation";
import { GqlContext } from "../../../../context";

const testToggleTodoCheck = (
  variables: MutationToggleTodoCheckArgs,
  context: GqlContext
) => ToggleTodoCheckMutation({}, variables, context, null);

test("marks todo as checked", async () => {
  const context = td.object<GqlContext>();

  const ITEM_ID = "itemId";

  td.when(context.todoItemController.markChecked(ITEM_ID)).thenResolve({
    checked: true,
    id: ITEM_ID,
  });

  const variables: MutationToggleTodoCheckArgs = {
    checked: true,
    itemId: ITEM_ID,
  };

  const result = await testToggleTodoCheck(variables, context);
  expect(result).toMatchObject({ id: ITEM_ID, checked: true });
});

test("marks todo as unchecked", async () => {
  const context = td.object<GqlContext>();

  const ITEM_ID = "itemId";

  td.when(context.todoItemController.markUnchecked(ITEM_ID)).thenResolve({
    checked: false,
    id: ITEM_ID,
  });

  const variables: MutationToggleTodoCheckArgs = {
    checked: false,
    itemId: ITEM_ID,
  };

  const result = await testToggleTodoCheck(variables, context);
  expect(result).toMatchObject({ id: ITEM_ID, checked: false });
});
