import { ToDoList } from "~generated/external-apis";
import { ListFilterQueryInput } from "~generated/graphql/types";

export function filterLists(
  toDoLists: ToDoList[],
  listFilterParams: ListFilterQueryInput
): ToDoList[] {
  let result = toDoLists;
  if (listFilterParams.partialName) {
    const regexp = new RegExp(listFilterParams.partialName);
    result = result.filter((list) => regexp.test(list.name));
  }
  return result;
}
