import React from "react";
import styled from "styled-components";

type ListNameEditProps = {
  onSubmit: () => void;
  ref: (e: any) => void;
  list: {
    name: string;
  };
  onKeyUp: () => void;
  onBlur: () => void;
  onMouseDown: () => void;
};

const ListNameEdit = React.forwardRef((props: ListNameEditProps, ref: any) => {
  return (
    <Form className="list-edit-form" onSubmit={props.onSubmit}>
      <input
        type="text"
        name="name"
        autoComplete="off"
        ref={ref}
        defaultValue={props.list.name}
        onKeyUp={props.onKeyUp}
        onBlur={props.onBlur}
      />
      <div className="nav-group right">
        <a
          className="nav-item"
          onMouseDown={props.onMouseDown}
          onClick={props.onMouseDown}
        >
          <span className="icon-close" title="Cancel" />
        </a>
      </div>
    </Form>
  );
});

const Form = styled.div`
  position: absolute;
  width: 100%;
  input[type="text"] {
    background: transparent;
    font-size: 1.125em;
    width: 100%;
    padding-right: 3em;
    padding-left: 1rem;
  }
`;

export default ListNameEdit;
