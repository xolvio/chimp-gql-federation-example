import td from "testdouble";
import { QueryListsArgs, GqlContext } from "@generated/graphql/types";
import { ToDoList } from "@generated/external-apis";
import { ListsQuery } from "./ListsQuery";

const testLists = (variables: QueryListsArgs, context: GqlContext) =>
  ListsQuery({}, variables, context, null);

test("Lists", async () => {
  const context = td.object<GqlContext>();

  const lists: Partial<ToDoList>[] = [{ id: "id", name: "name" }];

  td.when(context.todoListsController.getLists()).thenResolve(
    lists as ToDoList[]
  );

  const variables: QueryListsArgs = {};

  const result = await testLists(variables, context);
});

// Todo: Missing test for the filter
