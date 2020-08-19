import { renderWithGraphQL } from "../../testHelpers/renderWithGraphQL";
import React from "react";
import { ListNavigatorView } from "./ListNavigatorView";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import {createBrowserHistory} from "history";

export const renderWithRouter = (component: JSX.Element) => {
  return render(<Router history={createBrowserHistory()}>{component}</Router>);
};

test("Shows lists in navigator", async () => {
  let lists = [
    {
      name: "mocked list",
      todos: [],
      userId: "sdf",
      id: "",
      incompleteCount: 0,
    },
  ];

  const { findAllByText } = renderWithRouter(
    <ListNavigatorView lists={lists} addList={() => {}} />
  );

  await findAllByText("mocked list");
});

// more tests for the other view related things
