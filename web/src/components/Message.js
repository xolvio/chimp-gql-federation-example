import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Message = ({ title, subtitle }) => (
  <Wrapper>
    {title ? <Title>{title}</Title> : null}
    {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  bottom: auto;
  left: 0;
  width: auto;
  height: auto;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  text-align: center;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #1c3f53;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #aaaaaa;
`;

Message.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Message.defaultProps = {
  subtitle: ""
};

export default Message;
