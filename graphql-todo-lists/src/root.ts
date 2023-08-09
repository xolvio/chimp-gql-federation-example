import { TodoListControllerApi } from "~generated/external-apis";

export const root = {
  todoListsController: new TodoListControllerApi(),
};

export type RootInterface = typeof root;
