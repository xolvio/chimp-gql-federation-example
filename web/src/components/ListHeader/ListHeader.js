/* global confirm */
/* eslint-disable no-alert, no-restricted-globals */

import React from "react";
import PropTypes from "prop-types";
import SweetAlert from "sweetalert2-react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MobileMenu from "../MobileMenu";
import {AllListsDocument, List, RemoveListComponent, RemoveListDocument} from "../../generated/graphql";
import styled from "styled-components";
import ListTitle from "./ListTitle";
import ListOptionsMobile from "./ListOptionsMobile";
import NewTodoInput from "./NewTodoInput";
import ListNameEdit from "./ListNameEdit";
import ListOptionsWeb from "./ListOptionsWeb";

const removeListMutation = gql`
  mutation RemoveList($listId: ID!) {
    RemoveList(listId: $listId)
  }
`;

const changeListNameMutation = gql`
  mutation($listId: ID!, $newName: String!) {
    ChangeListName(listId: $listId, newName: $newName) {
      id
      name
    }
  }
`;

const addNewTodoMutation = gql`
  mutation AddTodo($listId: ID!, $text: String!) {
    AddTodo(listId: $listId, text: $text) {
      id
      checked
      text
    }
  }
`;

// import {
//   updateName,
//   makePublic,
//   makePrivate,
// } from "../../api/lists/methods.js";
// import { insert } from "../../api/todos/methods.js";

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      showDeleteListConfirmation: false
    };
    this.onListFormSubmit = this.onListFormSubmit.bind(this);
    this.onListInputKeyUp = this.onListInputKeyUp.bind(this);
    this.onListInputBlur = this.onListInputBlur.bind(this);
    this.onListDropdownAction = this.onListDropdownAction.bind(this);
    this.editList = this.editList.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveList = this.saveList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.focusTodoInput = this.focusTodoInput.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
  }

  onListFormSubmit(event, saveListMutation) {
    event.preventDefault();
    this.saveList(saveListMutation);
  }

  onListInputKeyUp(event) {
    if (event.keyCode === 27) {
      this.cancelEdit();
    }
  }

  onListInputBlur(saveListMutation) {
    if (this.state.editing) {
      this.saveList(saveListMutation);
    }
  }

  onListDropdownAction(event) {
    if (event.target.value === "delete") {
      this.deleteList();
    }
  }

  editList() {
    this.setState({ editing: true }, () => {
      this.listNameInput.focus();
    });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  saveList(saveListMutation) {
    this.setState({ editing: false });
    saveListMutation({
      variables: {
        listId: this.props.list.id,
        newName: this.listNameInput.value
      }
    });
  }

  deleteConfirmation() {
    this.setState({ showDeleteListConfirmation: true });
  }

  deleteList(removeList) {
    this.setState({ showDeleteListConfirmation: false });
    removeList();
  }

  createTodo = (event, addTodo) => {
    event.preventDefault();
    const { newTodoInput } = this;
    const newTodoText = newTodoInput.value;
    const listId = this.props.list.id;
    newTodoInput.value = "";
    addTodo({ variables: { listId, text: newTodoText } });
  };

  focusTodoInput() {
    this.newTodoInput.focus();
  }

  renderDefaultHeader() {
    const { list } = this.props;
    return (
      <div>
        <MobileMenu toggleMenu={() => {}} />

        <ListTitle onClick={this.editList} list={list} />

        <div className="nav-group right">
          <RemoveListComponent
            variables={{ listId: list.id }}
            update={(cache, {data: {RemoveList}}) => {
              const {Lists} = cache.readQuery({ query: AllListsDocument })
              console.log("RemoveLsist", RemoveList)
              console.log("Lists", Lists)
              cache.writeQuery({
                query: AllListsDocument,
                data: { Lists: Lists.filter(l => l.id !== list.id) },
              });
            }}
          >
            {removeList => (
              <>
                <ListOptionsMobile onChange={this.onListDropdownAction} />
                <ListOptionsWeb onClick={this.deleteConfirmation}>
                  <SweetAlert
                    show={this.state.showDeleteListConfirmation}
                    title="Delete list"
                    text={`Are you sure you want to delete the ${list.name} list`}
                    type="warning"
                    showCancelButton
                    confirmButtonText="Delete it!"
                    cancelButtonText="Nope"
                    onConfirm={() => {
                      this.deleteList(removeList);
                    }}
                    onCancel={() => {
                      this.setState({ showDeleteListConfirmation: false });
                    }}
                  />
                </ListOptionsWeb>
              </>
            )}
          </RemoveListComponent>
        </div>
      </div>
    );
  }

  renderEditingHeader() {
    const { list } = this.props;
    return (
      <Mutation mutation={changeListNameMutation}>
        {changeListName => (
          <ListNameEdit
            onSubmit={event => {
              this.onListFormSubmit(event, changeListName);
            }}
            ref={c => {
              this.listNameInput = c;
            }}
            list={list}
            onKeyUp={this.onListInputKeyUp}
            onBlur={() => {
              this.onListInputBlur(changeListName);
            }}
            onMouseDown={this.cancelEdit}
          />
        )}
      </Mutation>
    );
  }

  render() {
    const { editing } = this.state;
    return (
      <Wrapper>
        {editing ? this.renderEditingHeader() : this.renderDefaultHeader()}
        <Mutation
          mutation={addNewTodoMutation}
          optimisticResponse={({ text }) => ({
            __typename: "Mutation",
            AddTodo: {
              __typename: "TodoItem",
              id: "randomId",
              checked: false,
              text
            }
          })}
          update={(proxy, { data: { AddTodo } }) => {
            const data = proxy.readQuery({ query: AllListsDocument });
            const list = data.Lists.find(l => l.id === this.props.list.id);
            list.todos.push(
              AddTodo
            );
            list.incompleteCount++;
            proxy.writeQuery({ query: AllListsDocument, data });
          }}
        >
          {addTodo => (
            <NewTodoInput
              onSubmit={event => this.createTodo(event, addTodo)}
              ref={c => {
                this.newTodoInput = c;
              }}
              onClick={this.focusTodoInput}
            />
          )}
        </Mutation>
      </Wrapper>
    );
  }
}

ListHeader.propTypes = {
  list: PropTypes.object
  // menuOpen: PropTypes.object.isRequired
};

const Wrapper = styled.nav`
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#d0edf5),
    to(#e1e5f0)
  );

  background: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
  height: 5em;
  text-align: center;

  @media screen and (min-width: 40em) {
    text-align: left;
  }
`;
