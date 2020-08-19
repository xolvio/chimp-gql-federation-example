import React from "react";
import styled from "styled-components";
import logo from "./logo-todos.svg";

class Loading extends React.Component {
  render() {
    return <Img src={logo} alt="Loading..." />;
  }
}

const Img = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: auto;
  left: auto;
  width: 50%;
  height: auto;
  -webkit-transform: translate3d(50%, -50%, 0);
  transform: translate3d(50%, -50%, 0);
  min-width: 160px;
  max-width: 320px;
`;

export default Loading;
