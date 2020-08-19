/* eslint-env jest, cypress/globals */

import { mockGraphqlWithResolvers } from "../helpers/mockGraphqlWithResolvers";
import { slowDownMutations } from "../helpers/slowDownMutations";

const { findByText, findByPlaceholderText } = cy;

function removeTodo(todoName) {
  return cy
    .findByDisplayValue(todoName)
    .parent()
    .within(() => {
      cy.findByTestId("deleteItem").click({ force: true });
    });
}

describe("working with the server", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    cy.task("defaults:db");
    cy.visit("http://localhost:3000");
  });
  it("shows lists coming from the server", () => {
    findByText("second list");
  });
  it("allows for removing todos", () => {
    removeTodo("first todo in the first list").then(() => {
      cy.findByDisplayValue("first todo in the first list").should("not.exist");
    });
  });
  // it.skip("allows the user to sign up and log out", () => {
  //   Simulate.click(findByText("Join"));
  //   type(findByPlaceholderText("Your Email"), "lgandecki@thebrain.pro");
  //   type(findByPlaceholderText("Password"), "MyPassword");
  //   type(findByPlaceholderText("Confirm Password"), "MyPassword");
  //   Simulate.click(findByText("Join Now"));
  //   findByText("lgandecki");
  //   findByText("Join Now").should("not.exist");
  // });

  function addTodo(todoName) {
    cy.findByPlaceholderText("Type to add new tasks").type(todoName);
    cy.findByTestId("newTodoForm").submit();
  }

  describe("Adding todos", () => {
    it("Uses optimistic UI to show the new todo name before mutation returns", () => {
      addTodo("New");

      cy.findByDisplayValue("New");
    });

    it("Clears the new todo input after submitting", () => {
      addTodo("New");

      cy
        .findByPlaceholderText("Type to add new tasks")
        .should("have.value", "");
    });
  });
});
