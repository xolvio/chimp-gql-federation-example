import get from "lodash/get";
import { PageInfo, PaginationInput } from "@generated/graphql/types";

export type Edge<T> = {
  node: T;
  cursor: string;
};

export type Connection<T> = {
  edges: Edge<T>[];
  pageInfo: PageInfo;
};

export type PaginationArguments = {
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

class Paginator<NodeType> {
  private paginationArguments: PaginationInput;

  private hasPreviousPage: boolean;

  private hasNextPage: boolean;

  private allEdges: Edge<NodeType>[];

  constructor(items: NodeType[], cursorField: string) {
    this.allEdges = items.map((item) => {
      const cursor = get(item, cursorField, null);
      if (!cursor) {
        throw new Error(`Item on the list has no cursor field ${cursorField}`);
      }
      return { cursor, node: item };
    });
  }

  public getPage = (
    paginationArguments: PaginationInput
  ): Connection<NodeType> => {
    this.paginationArguments = paginationArguments;
    this.hasPreviousPage = false;
    this.hasNextPage = false;
    const { before, after, first, last } = this.paginationArguments;
    let edges = this.applyCursorToEdges();
    if (first) {
      if (first < 0) {
        throw new Error("Element index cannot be negative");
      }
      if (edges.length > first) {
        edges.splice(first);
        if (!before) {
          this.hasNextPage = true;
        }
      }
    }
    if (last) {
      if (last < 0) {
        throw new Error("Element index cannot be negative");
      }
      if (edges.length > last) {
        edges = edges.splice(edges.length - last);
        if (!after) {
          this.hasPreviousPage = true;
        }
      }
    }
    const pageInfo = {
      hasPreviousPage: this.hasPreviousPage,
      hasNextPage: this.hasNextPage,
      startCursor: edges.length ? edges[0].cursor : "",
      endCursor: edges.length ? edges[edges.length - 1].cursor : "",
    };
    return { edges, pageInfo };
  };

  private applyCursorToEdges = (): Edge<NodeType>[] => {
    const { before, after } = this.paginationArguments;
    let edges = [...this.allEdges];
    if (after) {
      const afterEdge = edges.findIndex((edge) => edge.cursor === after);
      if (afterEdge > -1) {
        if (afterEdge) {
          this.hasPreviousPage = true;
        }
        edges = edges.splice(afterEdge + 1);
      }
    }
    if (before) {
      const beforeEdge = edges.findIndex((edge) => edge.cursor === before);
      if (beforeEdge > -1) {
        if (beforeEdge < edges.length - 1) {
          this.hasNextPage = true;
        }
        edges.splice(beforeEdge);
      }
    }
    return edges;
  };
}

export function getPage<Items extends any[]>(
  items: Items,
  paginationArguments: PaginationInput,
  cursorField: string
) {
  if (items.length) {
    type ItemClass = typeof items[number];
    const paginator = new Paginator<ItemClass>(items, cursorField);
    return paginator.getPage(paginationArguments);
  }
  return {
    edges: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: "",
      endCursor: "",
    },
  };
}
