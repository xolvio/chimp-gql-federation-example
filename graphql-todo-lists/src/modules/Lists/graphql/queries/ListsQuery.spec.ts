import td from "testdouble";
import { ToDoList } from "~generated/external-apis";
import {
  GqlContext,
  QueryListsArgs,
  testLists,
} from "~generated/graphql/helpers/ListsQuerySpecWrapper";

test("Lists", async () => {
  const context = td.object<GqlContext>();

  const lists: Partial<ToDoList>[] = [{ id: "id", name: "name" }];

  td.when(context.todoListsController.getLists()).thenResolve(
    lists as ToDoList[],
  );

  const variables: QueryListsArgs = {};

  const result = await testLists(variables, context);
});

// Todo: Missing test for the filter
