import { TodoItemControllerCacheable } from "./controllers/TodoItemController";

export const root = {
  todoItemController: new TodoItemControllerCacheable(),
};

export type RootInterface = typeof root;
