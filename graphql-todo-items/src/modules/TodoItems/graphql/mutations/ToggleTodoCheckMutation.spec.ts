import td from "testdouble";
import {
  GqlContext,
  MutationToggleTodoCheckArgs,
} from "~generated/graphql/types";
import { testToggleTodoCheck } from "~generated/graphql/helpers/ToggleTodoCheckMutationSpecWrapper";

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
