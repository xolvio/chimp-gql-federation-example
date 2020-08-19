import styled from "styled-components";

export default styled.div<{ menuOpen?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  cursor: pointer;

  ${props =>
    props.menuOpen
      ? `
        -webkit-transform: translate3d(270px, 0, 0);
        transform: translate3d(270px, 0, 0);
        z-index: 1;`
      : ""};

  @media screen and (min-width: 40em) {
    display: none;
  }
`;
