import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testTodoList__resolveReference,
} from "~generated/graphql/helpers/TodoList__resolveReferenceSpecWrapper";

test("TodoList__resolveReference", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.TodoItemsRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testTodoList__resolveReference(parent, context);
});
