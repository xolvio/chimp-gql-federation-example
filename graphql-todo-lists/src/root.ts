// Initialize your Controllers / Data Sources / Repositories here.
// Thie shape of this object will also be extended by your context.ts file to define a Gql Context

import { TodoListControllerApi } from "~generated/external-apis";

export const root = {
  todoListsController: new TodoListControllerApi(),
};

export type RootInterface = typeof root;
