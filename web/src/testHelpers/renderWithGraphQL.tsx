import { render } from "@testing-library/react";
import { Router } from "react-router";
import {createBrowserHistory} from "history";
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "./createApolloClient";
import React from "react";

export const renderWithGraphQL = (Comp: JSX.Element, resolvers: {}) => {
  return render(
    <Router history={createBrowserHistory()}>
      <ApolloProvider client={createApolloClient(resolvers)}>
        {Comp}
      </ApolloProvider>
    </Router>
  );
};
