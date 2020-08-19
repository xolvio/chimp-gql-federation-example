import { getPage } from "./Paginator";

type TestType = {
  name: string;
  id: string;
};

const items: TestType[] = [
  { id: "id1", name: "name1" },
  { id: "id2", name: "name2" },
  { id: "id3", name: "name3" },
  { id: "id4", name: "name4" },
];

const cursorField = "id";

describe("when attempting to get first 3 items from array when array has > 3 items", () => {
  const paginationArguments = {
    first: 3,
  };
  test("gets correct first 3 items", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.edges.length).toEqual(3);
    expect(result.edges[0].cursor).toEqual(items[0].id);
    expect(result.edges[1].cursor).toEqual(items[1].id);
    expect(result.edges[2].cursor).toEqual(items[2].id);
  });
  test("start cursor is set to first item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.startCursor).toEqual(items[0].id);
  });
  test("end cursor is third to first item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.endCursor).toEqual(items[2].id);
  });
  test("there is a next page because there are more than 3 items in array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasNextPage).toEqual(true);
  });
  test("there is no previous page because of fetching first 3 items", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasPreviousPage).toEqual(false);
  });
});

describe("when attempting to get first 2 items from array after id2 item", () => {
  const paginationArguments = {
    first: 2,
    after: "id2",
  };
  test("gets correct 2 items from array that are after id2 item", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.edges.length).toEqual(2);
    expect(result.edges[0].cursor).toEqual(items[2].id);
    expect(result.edges[1].cursor).toEqual(items[3].id);
  });
  test("start cursor is set to first item after id2 item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.startCursor).toEqual(items[2].id);
  });
  test("end cursor is set to second item after id2 item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.endCursor).toEqual(items[3].id);
  });
  test("there is no next page because there are 2 items in array after id2 item", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasNextPage).toEqual(false);
  });
  test("there is previous page because there is item before id2 item", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasPreviousPage).toEqual(true);
  });
});

describe("gets last 3 items from array when array has > 3 items", () => {
  const paginationArguments = {
    last: 3,
  };
  test("gets correct last 3 items from array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.edges.length).toEqual(3);
    expect(result.edges[0].cursor).toEqual(items[1].id);
    expect(result.edges[1].cursor).toEqual(items[2].id);
    expect(result.edges[2].cursor).toEqual(items[3].id);
  });
  test("start cursor is set to second item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.startCursor).toEqual(items[1].id);
  });
  test("end cursor is set to last item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.endCursor).toEqual(items[3].id);
  });
  test("there is no next page because of fetching last 3 items", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasNextPage).toEqual(false);
  });
  test("there is previous page because there are more than 3 items in array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasPreviousPage).toEqual(true);
  });
});

describe("gets last 2 items from array before id4 item", () => {
  const paginationArguments = {
    last: 2,
    before: "id4",
  };
  test("gets correct 2 items from array that are before id4 item", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.edges.length).toEqual(2);
    expect(result.edges[0].cursor).toEqual(items[1].id);
    expect(result.edges[1].cursor).toEqual(items[2].id);
    expect(result.pageInfo.startCursor).toEqual(items[1].id);
    expect(result.pageInfo.endCursor).toEqual(items[2].id);
    expect(result.pageInfo.hasNextPage).toEqual(false);
    expect(result.pageInfo.hasPreviousPage).toEqual(true);
  });
  test("start cursor is set to second item of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.startCursor).toEqual(items[1].id);
  });
  test("end cursor is set to first item of array before id4 item", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.endCursor).toEqual(items[2].id);
  });
  test("there is no next page because id4 is last element of array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasNextPage).toEqual(false);
  });
  test("there is previous page because there are more than 3 items in array", async () => {
    const result = getPage(items, paginationArguments, cursorField);

    expect(result.pageInfo.hasPreviousPage).toEqual(true);
  });
});
describe("when input array is empty", () => {
  const paginationArguments = {
    first: 3,
  };
  test("returns empty array", async () => {
    const result = getPage([], paginationArguments, cursorField);

    expect(result.edges.length).toEqual(0);
    expect(result.pageInfo.startCursor).toEqual("");
    expect(result.pageInfo.endCursor).toEqual("");
    expect(result.pageInfo.hasNextPage).toEqual(false);
    expect(result.pageInfo.hasPreviousPage).toEqual(false);
  });
});
