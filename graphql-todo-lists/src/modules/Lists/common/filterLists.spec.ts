import { ToDoList } from "~generated/external-apis";
import { filterLists } from "./filterLists";

test("returns initial list if there is no filter argument in listFilterParams", async () => {
  const lists = [{ id: "id1", name: "name1" }] as ToDoList[];
  const result = filterLists(lists, {});

  expect(result).toMatchObject(lists);
});

test("returns initial list if filter argument is empty", async () => {
  const lists = [{ id: "id1", name: "name1" }] as ToDoList[];
  const result = filterLists(lists, {});

  expect(result).toMatchObject(lists);
});

test("returns array of lists that have name matching partialName filter argument", async () => {
  const lists = [
    { id: "id1", name: "name1" },
    { id: "id2", name: "2name" },
    { id: "id3", name: "na3me" },
  ] as ToDoList[];
  const result = filterLists(lists, { partialName: "name" });

  expect(result.length).toEqual(2);
  expect(result[0].id).toEqual(lists[0].id);
  expect(result[1].id).toEqual(lists[1].id);
});
