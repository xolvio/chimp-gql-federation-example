import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";

import merge from "lodash/merge";
import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";

const importedSchema = `type Query {
  Lists: [List]
  TodoItems(listId: ID!): [TodoItem]!
  CurrentUser: User
}

type Mutation {
  AddList(listName: String!): List
  RemoveList(listId: ID!): String
  ChangeListName(listId: ID!, newName: String!): List
  ToggleListPrivacy(listId: ID!): List
  RemoveItem(itemId: ID!): String
  AddTodo(listId: ID!, text: String!): TodoItem
  ToggleTodoCheck(itemId: ID!, checked: Boolean!): TodoItem
  RenameTodo(todoId: ID!, newText: String!): TodoItem
  AddUser(email: String!, password: String!): User!
  LoginUser(email: String!, password: String!): User!
  LogoutUser: String
}

type Subscription {
  AddedList: List
  RemovedList: ID
}

type TodoItem {
  id: ID
  text: String
  checked: Boolean
}

type List {
  id: ID
  name: String
  incompleteCount: Int
  userId: ID
  todos: [TodoItem]!
}

type User {
  id: ID
  email: String
  password: Boolean
}
`;

export const createApolloClient = (passedResolvers: any, mocks = {}) => {
  const resolvers = {
    Query: {},
    Mutation: {},
  };

  const schema = makeExecutableSchema({
    typeDefs: importedSchema,
    resolvers: merge(resolvers, passedResolvers),
  });
  addMockFunctionsToSchema({ schema, preserveResolvers: true, mocks });

  return new ApolloClient({
    link: new SchemaLink({
      schema,
    }),
    cache: new InMemoryCache(),
  });
};
