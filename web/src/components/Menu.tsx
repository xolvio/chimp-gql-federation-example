import React from "react";
import UserMenu from "./UserMenu";
import { ListNavigator } from "./ListNavigator/ListNavigator";
import styled from "styled-components";

type MenuProps = { lists: [] };

function Menu(props: MenuProps) {
  return (
    <Wrapper>
      <UserMenu user={{}} />;
      <ListNavigator lists={props.lists} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 270px;
  height: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export default Menu;
