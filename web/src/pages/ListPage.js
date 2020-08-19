import React from "react";
import PropTypes from "prop-types";

import ListHeader from "../components/ListHeader/ListHeader";
import TodoItem from "../components/TodoItem";
import Message from "../components/Message";
import Page from "./Page";

export default class ListPage extends React.Component {
  state = { editingTodo: null };

  onEditingChange = (id, editing) => {
    this.setState({
      editingTodo: editing ? id : null
    });
  };

  render() {
    const { list } = this.props;
    const { todos } = list;
    const { editingTodo } = this.state;

    let Todos;
    if (!todos || !todos.length) {
      Todos = (
        <Message
          title="No tasks here"
          subtitle="Add new tasks using the field above"
        />
      );
    } else {
      Todos = todos.map(todo => (
        <TodoItem
          todo={todo}
          listId={list.id}
          key={todo.id}
          editing={todo.id === editingTodo}
          onEditingChange={this.onEditingChange}
        />
      ));
    }

    return (
      <Page className="lists-show">
        <ListHeader list={list} menuOpen={this.props.menuOpen} />
        <div className="content-scrollable">{Todos}</div>
      </Page>
    );
  }
}

ListPage.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired
};
