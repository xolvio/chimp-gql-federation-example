import { MutationResolvers } from "~generated/graphql/types";

export const RenameTodoMutation: MutationResolvers["RenameTodo"] = (
  parent,
  args,
  context
) => context.todoItemController.rename({ id: args.todoId, text: args.newText });
