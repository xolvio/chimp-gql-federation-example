import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { List } from "../../generated/graphql";

export const ListNavigatorView = ({
  lists,
  addList
}: {
  lists: List[];
  addList: () => void;
}) => {
  return (
    <Wrapper data-testid="list-todos">
      <a onClick={() => addList()}>
        <span className="icon-plus" />
        New List
      </a>
      {lists.map(list => (
        <NavLinkStyled
          to={`/lists/${list.id}`}
          key={list.id}
          title={list.name}
          activeClassName="active"
        >
          {list.todos.length ? (
            <span className="count-list">{list.todos.length}</span>
          ) : null}
          {list.name}
        </NavLinkStyled>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    -webkit-box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 0;
    box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 0;
    display: block;
    line-height: 1.5em;
    padding: 0.75em 2.5em;
    position: relative;
  }
  [class^="icon-"],
  [class*=" icon-"] {
    font-size: 14px;
    line-height: 20px;
    float: left;
    margin-left: -1.5rem;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    width: 1em;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: rgba(255, 255, 255, 0.4);
  &:hover,
  &:active,
  &.active {
    color: white;
  }
  &:hover .count-list,
  &:active .count-list,
  &.active .count-list {
    background: #2cc5d2;
  }

  .count-list {
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1em;
    float: right;
    font-size: 0.7rem;
    line-height: 1;
    margin-top: 0.25rem;
    margin-right: -1.5em;
    padding: 0.3em 0.5em;
  }
`;
