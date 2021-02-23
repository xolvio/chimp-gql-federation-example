import td from "testdouble";

import { ResolversParentTypes, GqlContext } from "~generated/graphql/types";
import { TodoItemList } from "./TodoItemList";

const testTodoItemList = (
  parent: ResolversParentTypes["TodoItem"],
  context: GqlContext
) => TodoItemList(parent, {}, context, null);

test("TodoItemList", async () => {
  const context = td.object<GqlContext>();

  const parent = { listId: "listId" } as ResolversParentTypes["TodoItem"];

  const result = await testTodoItemList(parent, context);

  expect(result).toEqual({ id: "listId" });
});
