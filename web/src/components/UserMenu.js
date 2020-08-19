import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UserMenu extends React.Component {
  state = { open: false };

  toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      open: !this.state.open
    });
  }

  renderLoggedOut() {
    return (
      <Wrapper>
        <Link to="/signin" className="btn-secondary">
          Sign In
        </Link>
        <Link to="/join" className="btn-secondary">
          Join
        </Link>
      </Wrapper>
    );
  }

  render() {
    // if (this.props.user && this.props.user.email) {
    //   return this.renderLoggedIn();
    // }
    return this.renderLoggedOut();
  }
}

const Wrapper = styled.div`
  margin: 1em auto 2em;
  text-align: center;
  width: 90%;

  .btn-secondary {
    font-size: 10px;
    line-height: 14px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 110px;
  }
`;

UserMenu.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

export default UserMenu;
