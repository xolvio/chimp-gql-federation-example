import React from "react";
import styled from "styled-components";

type ListOptionsWebProps = {
  onClick: () => void;
  children: any;
};

export default function ListOptionsWeb(props: ListOptionsWebProps) {
  return (
    <Wrapper>
      <a className="nav-item trash" onClick={props.onClick}>
        <span
          className="icon-trash"
          title="Delete list"
          data-testid="deleteList"
        />
      </a>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  .nav-item {
    font-size: 16px;
    line-height: 24px;
    width: 2rem;
  }
  .nav-item:last-child {
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 40em) {
    display: block;
  }
`;
