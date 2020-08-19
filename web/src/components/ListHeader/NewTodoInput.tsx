import React from "react";
import styled from "styled-components";

type NewTodoInputProps = {
  onSubmit: (e: any) => void;
  ref: (e: any) => void;
  onClick: (e: any) => void;
};

const NewTodoInput = React.forwardRef((props: NewTodoInputProps, ref: any) => {
  return (
    <FormWrapper
      className="input-symbol"
      data-testid="newTodoForm"
      onSubmit={props.onSubmit}
    >
      <input type="text" ref={ref} placeholder="Type to add new tasks" />
      <span
        className="icon-add"
        data-testid="focusTodoInput"
        onClick={props.onClick}
      />
    </FormWrapper>
  );
});

const FormWrapper = styled.form`
  position: absolute;
  top: 3em;
  right: 0;
  bottom: auto;
  left: 0;
  width: auto;
  height: auto;

  input[type="text"] {
    background: transparent;
    padding-bottom: 0.25em;
    padding-left: 44px !important;
    padding-top: 0.25em;
  }
`;

export default NewTodoInput;
