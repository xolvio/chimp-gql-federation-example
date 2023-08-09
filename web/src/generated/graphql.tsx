import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};




export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ListConnection = {
  __typename?: 'ListConnection';
  edges: Array<Maybe<ListEdge>>;
  pageInfo: PageInfo;
};

export type ListEdge = {
  __typename?: 'ListEdge';
  cursor: Scalars['ID'];
  node: TodoList;
};

export type ListFilterQueryInput = {
  partialName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  RemoveItem: Scalars['String'];
  AddTodo: TodoItem;
  ToggleTodoCheck: TodoItem;
  RenameTodo: TodoItem;
  RemoveList: Scalars['String'];
  AddList: TodoList;
  ChangeListName: TodoList;
};


export type MutationRemoveItemArgs = {
  itemId: Scalars['ID'];
};


export type MutationAddTodoArgs = {
  listId: Scalars['ID'];
  text: Scalars['String'];
};


export type MutationToggleTodoCheckArgs = {
  itemId: Scalars['ID'];
  checked: Scalars['Boolean'];
};


export type MutationRenameTodoArgs = {
  todoId: Scalars['ID'];
  newText: Scalars['String'];
};


export type MutationRemoveListArgs = {
  listId: Scalars['ID'];
};


export type MutationAddListArgs = {
  listName: Scalars['String'];
};


export type MutationChangeListNameArgs = {
  listId: Scalars['ID'];
  newName: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['ID'];
  endCursor: Scalars['ID'];
};

export type PaginationInput = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['ID']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  Todos: Array<TodoItem>;
  Lists: Array<TodoList>;
  PagedLists: ListConnection;
};


export type QueryListsArgs = {
  filter?: Maybe<ListFilterQueryInput>;
};


export type QueryPagedListsArgs = {
  paginationArgs: PaginationInput;
  filter?: Maybe<ListFilterQueryInput>;
};

export enum Roles {
  Admin = 'ADMIN',
  RegisteredUser = 'REGISTERED_USER'
}

export type TodoItem = {
  __typename?: 'TodoItem';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  checked: Scalars['Boolean'];
  listId: Scalars['ID'];
  list?: Maybe<TodoList>;
};

export type TodoList = {
  __typename?: 'TodoList';
  id: Scalars['ID'];
  name: Scalars['String'];
  todos: Array<TodoItem>;
  incompleteCount: Scalars['Int'];
};

export type AddListMutationVariables = {
  listName: Scalars['String'];
};


export type AddListMutation = (
  { __typename?: 'Mutation' }
  & { AddList: (
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'name' | 'incompleteCount'>
    & { todos: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id' | 'text' | 'checked'>
    )> }
  ) }
);

export type RemoveListMutationVariables = {
  listId: Scalars['ID'];
};


export type RemoveListMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RemoveList'>
);

export type AllListsQueryVariables = {};


export type AllListsQuery = (
  { __typename?: 'Query' }
  & { Lists: Array<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'name' | 'incompleteCount'>
    & { todos: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id' | 'text' | 'checked'>
    )> }
  )> }
);


export const AddListDocument = gql`
    mutation AddList($listName: String!) {
  AddList(listName: $listName) {
    id
    name
    incompleteCount
    todos {
      id
      text
      checked
    }
  }
}
    `;
export type AddListMutationFn = ApolloReactCommon.MutationFunction<AddListMutation, AddListMutationVariables>;
export type AddListComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddListMutation, AddListMutationVariables>, 'mutation'>;

    export const AddListComponent = (props: AddListComponentProps) => (
      <ApolloReactComponents.Mutation<AddListMutation, AddListMutationVariables> mutation={AddListDocument} {...props} />
    );
    

/**
 * __useAddListMutation__
 *
 * To run a mutation, you first call `useAddListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addListMutation, { data, loading, error }] = useAddListMutation({
 *   variables: {
 *      listName: // value for 'listName'
 *   },
 * });
 */
export function useAddListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddListMutation, AddListMutationVariables>) {
        return ApolloReactHooks.useMutation<AddListMutation, AddListMutationVariables>(AddListDocument, baseOptions);
      }
export type AddListMutationHookResult = ReturnType<typeof useAddListMutation>;
export type AddListMutationResult = ApolloReactCommon.MutationResult<AddListMutation>;
export type AddListMutationOptions = ApolloReactCommon.BaseMutationOptions<AddListMutation, AddListMutationVariables>;
export const RemoveListDocument = gql`
    mutation RemoveList($listId: ID!) {
  RemoveList(listId: $listId)
}
    `;
export type RemoveListMutationFn = ApolloReactCommon.MutationFunction<RemoveListMutation, RemoveListMutationVariables>;
export type RemoveListComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveListMutation, RemoveListMutationVariables>, 'mutation'>;

    export const RemoveListComponent = (props: RemoveListComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveListMutation, RemoveListMutationVariables> mutation={RemoveListDocument} {...props} />
    );
    

/**
 * __useRemoveListMutation__
 *
 * To run a mutation, you first call `useRemoveListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeListMutation, { data, loading, error }] = useRemoveListMutation({
 *   variables: {
 *      listId: // value for 'listId'
 *   },
 * });
 */
export function useRemoveListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveListMutation, RemoveListMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveListMutation, RemoveListMutationVariables>(RemoveListDocument, baseOptions);
      }
export type RemoveListMutationHookResult = ReturnType<typeof useRemoveListMutation>;
export type RemoveListMutationResult = ApolloReactCommon.MutationResult<RemoveListMutation>;
export type RemoveListMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveListMutation, RemoveListMutationVariables>;
export const AllListsDocument = gql`
    query AllLists {
  Lists {
    id
    name
    incompleteCount
    todos {
      id
      text
      checked
    }
  }
}
    `;
export type AllListsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllListsQuery, AllListsQueryVariables>, 'query'>;

    export const AllListsComponent = (props: AllListsComponentProps) => (
      <ApolloReactComponents.Query<AllListsQuery, AllListsQueryVariables> query={AllListsDocument} {...props} />
    );
    

/**
 * __useAllListsQuery__
 *
 * To run a query within a React component, call `useAllListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllListsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllListsQuery, AllListsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllListsQuery, AllListsQueryVariables>(AllListsDocument, baseOptions);
      }
export function useAllListsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllListsQuery, AllListsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllListsQuery, AllListsQueryVariables>(AllListsDocument, baseOptions);
        }
export type AllListsQueryHookResult = ReturnType<typeof useAllListsQuery>;
export type AllListsLazyQueryHookResult = ReturnType<typeof useAllListsLazyQuery>;
export type AllListsQueryResult = ApolloReactCommon.QueryResult<AllListsQuery, AllListsQueryVariables>;