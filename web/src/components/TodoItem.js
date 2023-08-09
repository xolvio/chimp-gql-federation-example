import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Mutation, withApollo } from "react-apollo";
import gql from "graphql-tag";
import _ from "lodash";
import classnames from "classnames";
import { AllListsDocument } from "../generated/graphql";

const removeItemMutation = gql`
  mutation RemoveItem($itemId: ID!) {
    RemoveItem(itemId: $itemId)
  }
`;

const toggleTodoCheckMutation = gql`
  mutation($itemId: ID!, $checked: Boolean!) {
    ToggleTodoCheck(itemId: $itemId, checked: $checked) {
      id
      checked
    }
  }
`;

const renameTodoMutation = gql`
  mutation($todoId: ID!, $newText: String!) {
    RenameTodo(todoId: $todoId, newText: $newText) {
      id
      text
    }
  }
`;
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.throttledUpdate = _.throttle(async value => {
      if (value) {
        await props.client.mutate({
          mutation: renameTodoMutation,
          variables: {
            todoId: this.props.todo.id,
            newText: value
          }
        });
      }
    }, 300);

    this.setTodoCheckStatus = this.setTodoCheckStatus.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.props.onEditingChange(this.props.todo.id, true);
  }

  onBlur() {
    this.props.onEditingChange(this.props.todo.id, false);
  }

  setTodoCheckStatus(event, toggleTodo) {
    event.preventDefault();
    toggleTodo({
      variables: { itemId: this.props.todo.id, checked: event.target.checked }
    });
  }

  updateTodo(event) {
    this.throttledUpdate(event.target.value);
  }

  render() {
    const { todo, editing } = this.props;
    const todoClass = classnames({
      "list-item": true,
      checked: todo.checked,
      editing
    });
    return (
      <Wrapper className={todoClass} data-testid={todo.text}>
        <Mutation mutation={toggleTodoCheckMutation}
          update={proxy => {
            const data = proxy.readQuery({ query: AllListsDocument });
            const list = data.Lists.find(l => l.id === this.props.listId);
            if (todo.checked) {
              list.incompleteCount += 1;
            } else {
              list.incompleteCount -= 1;
            }
            proxy.writeQuery({ query: AllListsDocument, data });
          }}>
          {toggleTodo => (
            <label
              className="checkbox"
              htmlFor={todo.id}
              title={`check-${todo.text}`}
            >
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.checked}
                name="checked"
                data-testid={`checkbox-${todo.text}`}
                onChange={event => this.setTodoCheckStatus(event, toggleTodo)}
              />
              <span className="checkbox-custom" />
            </label>
          )}
        </Mutation>
        <input
          type="text"
          defaultValue={todo.text}
          placeholder="Task name"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.updateTodo}
        />
        <Mutation
          mutation={removeItemMutation}
          variables={{ itemId: todo.id }}
          update={proxy => {
            const data = proxy.readQuery({ query: AllListsDocument });
            const list = data.Lists.find(l => l.id === this.props.listId);
            list.todos = _.reject(list.todos, t => t.id === todo.id);
            proxy.writeQuery({ query: AllListsDocument, data });
          }}
        >
          {removeItem => (
            <a
              className="delete-item"
              href="#delete"
              onClick={removeItem}
              onMouseDown={removeItem}
            >
              <span className="icon-trash" data-testid="deleteItem" />
            </a>
          )}
        </Mutation>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 3rem;
  width: 100%;

  .checkbox {
    -webkit-box-flex: 0;
    -ms-flex: 0, 0, 44px;
    flex: 0, 0, 44px;
    cursor: pointer;
  }
  input[type="text"] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .delete-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 3rem;
    flex: 0 0 3rem;
  }
  input[type="text"] {
    background: transparent;
    cursor: pointer;
  }
  input[type="text"]:focus {
    cursor: text;
  }
  .delete-item {
    color: #cccccc;
    line-height: 3rem;
    text-align: center;
  }
  .delete-item:hover {
    color: #2cc5d2;
  }
  .delete-item:active {
    color: #555555;
  }
  .delete-item .icon-trash {
    font-size: 1.1em;
  }
  + .list-item {
    border-top: 1px solid #f0f9fb;
  }
  &.checked input[type="text"] {
    color: #cccccc;
    text-decoration: line-through;
  }
  &.checked .delete-item {
    display: inline-block;
  }
  .delete-item {
    display: none;
  }
  .editing .delete-item {
    display: inline-block;
  }
`;

export default withApollo(TodoItem);

TodoItem.propTypes = {
  todo: PropTypes.object,
  editing: PropTypes.bool,
  onEditingChange: PropTypes.func
};
