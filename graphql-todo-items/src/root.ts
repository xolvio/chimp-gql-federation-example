import { TodoItemControllerApi } from "~generated/external-apis";

export const root = {
  todoItemController: new TodoItemControllerApi(),
};

export type RootInterface = typeof root;
