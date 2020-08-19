import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

type ListTitleProps = {
  list: {
    name: string;
    todos: [];
  };
  onClick: () => void;
};
export default function ListTitle(props: ListTitleProps) {
  return (
    <Wrapper onClick={props.onClick}>
      <Title data-testid="editListName">{props.list.name}</Title>
      <CountList>{props.list.todos.length}</CountList>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
    position: absolute;
    top: 0;
    right: 3rem;
    bottom: auto;
    left: 3rem;
    width: auto;
    height: auto;
    line-height: 3rem;
    cursor: pointer;
    font-size: 1.125em;
    white-space: nowrap;
  }
  @media screen and (min-width: 40em) {
      left: 1rem;
      right: 6rem;
  }
`;

const CountList = styled.span`
  background: #2cc5d2;
  border-radius: 1em;
  color: white;
  display: inline-block;
  font-size: 0.7rem;
  line-height: 1;
  margin-left: -1.25rem;
  margin-top: -4px;
  padding: 0.3em 0.5em;
  vertical-align: middle;
`;
const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1c3f53;
  display: inline-block;
  padding-right: 1.5rem;
  vertical-align: top;
  max-width: 100%;
`;

ListTitle.propTypes = {
  onClick: PropTypes.func,
  list: PropTypes.any
};
