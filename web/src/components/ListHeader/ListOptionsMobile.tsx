import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

type ListOptionsMobileProps = {
  onChange: (e: any) => void;
};

export default function ListOptionsMobile(props: ListOptionsMobileProps) {
  return (
    <Wrapper className="nav-item options-mobile">
      <select defaultValue="default" onChange={props.onChange}>
        <option disabled value="default">
          Select an action
        </option>
        <option value="delete">Delete list</option>
      </select>
      <span className="icon-cog" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  select {
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    background: transparent;
    opacity: 0;
  }

  @media screen and (min-width: 40em) {
    display: none;
  }

  @media screen and (min-width: 40em) {
    display: none !important;
  }
`;

ListOptionsMobile.propTypes = { onChange: PropTypes.func };
