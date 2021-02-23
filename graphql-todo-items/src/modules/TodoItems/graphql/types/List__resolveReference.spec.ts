import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testList__resolveReference,
} from "~generated/graphql/helpers/List__resolveReferenceSpecWrapper";

test("List__resolveReference", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.TodoItemsRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testList__resolveReference(parent,  context);
});
