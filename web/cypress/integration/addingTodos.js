/* eslint-env cypress/globals */
/* eslint-disable prefer-arrow-callback,func-names */

import { mockGraphqlWithResolvers } from "../helpers/mockGraphqlWithResolvers";
import { slowDownMutations } from "../helpers/slowDownMutations";

function addTodo(todoName) {
  cy.findByPlaceholderText("Type to add new tasks").type(todoName);
  cy.findByTestId("newTodoForm").submit();
}

describe("Adding todos", function() {
  it("Uses optimistic UI to show the new todo name before mutation returns", function() {
    cy.visit("/", mockGraphqlWithResolvers(slowDownMutations(["AddTodo"])));

    addTodo("New");

    cy.findByDisplayValue("New");
  });

  it("Sets the new todo name with the mutation result", function() {
    const resolvers = {
      Mutation: {
        AddTodo: () => ({
          text: "Replaced by the Server!"
        })
      }
    };
    cy.visit("/", mockGraphqlWithResolvers(resolvers));

    addTodo("New");

    cy.findByDisplayValue("Replaced by the Server!");
  });

  it("Clears the new todo input after submitting", function() {
    cy.visit("/", mockGraphqlWithResolvers());
    addTodo("New");

    cy.findByPlaceholderText("Type to add new tasks").should("have.value", "");
  });
});
