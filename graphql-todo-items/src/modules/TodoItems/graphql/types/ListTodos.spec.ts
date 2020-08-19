import td from "testdouble";

import { ResolversParentTypes } from "@generated/graphql/types";
import { ToDoItem } from "@generated/external-apis";
import { ListTodos } from "./ListTodos";
import { GqlContext } from "../../../../context";

const testListTodos = (
  parent: ResolversParentTypes["List"],
  context: GqlContext
) => ListTodos(parent, {}, context, null);

test("ListTodos", async () => {
  const context = td.object<GqlContext>();

  const todoItems = [
    { listId: "non-matching-id" },
    { listId: "matching-id" },
    { listId: "other-non-matching-id" },
  ] as ToDoItem[];

  td.when(context.todoItemController.getItems()).thenResolve(todoItems);

  const parent: ResolversParentTypes["List"] = { id: "matching-id" };

  const result = await testListTodos(parent, context);

  expect(result).toEqual([todoItems[1]]);
});
