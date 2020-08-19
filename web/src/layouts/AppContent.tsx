import styled from "styled-components";

export default styled.div<{ menuOpen?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  -webkit-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background: #d2edf4;
  opacity: 1;
  @media screen and (min-width: 40em) {
    left: 270px;
  }

  .content-scrollable {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  ${props =>
    props.menuOpen
      ? `
        -webkit-transform: translate3d(270px, 0, 0);
        transform: translate3d(270px, 0, 0);
        opacity: 0.85;
        left: 0;
        @media screen and (min-width: 40em) {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          opacity: 1;
          left: 270px;
        }
        `
      : ""};
`;
