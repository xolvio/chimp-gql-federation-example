import { MutationResolvers } from "~generated/graphql/types";

export const AddTodoMutation: MutationResolvers["AddTodo"] = (
  parent,
  args,
  context,
) => context.todoItemController.createItem(args);
