import React from "react";
import styled from "styled-components";

type MobileMenuProps = {
  toggleMenu: () => void;
};

function MobileMenu(props: MobileMenuProps) {
  return (
    <Wrapper className="nav-group">
      <a href="#toggle-menu" className="nav-item" onClick={props.toggleMenu}>
        <span className="icon-list-unordered" title="Show menu" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 40em) {
    display: none;
  }
`;

export default MobileMenu;
