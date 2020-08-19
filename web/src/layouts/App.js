import React from "react";
import styled from "styled-components";
import { Switch, Redirect } from "react-router-dom";
import { Router, Route } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import _ from "lodash";
import PropTypes from "prop-types";
import {createBrowserHistory} from "history";
import Loading from "../components/Loading";
import ListPage from "../pages/ListPage";
import { AllListsComponent } from "../generated/graphql";
import GlobalStyles from "./GlobalStyles";
import Menu from "../components/Menu";
import ContentOverlay from "../components/ContentOverlay";
import AppContent from "./AppContent";

export default class App extends React.Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  renderRedirect(location, lists) {
    const { pathname } = location;
    let redirect = null;
    if (pathname.includes("/lists/")) {
      const listId = pathname.split("/")[2];
      const list = _.find(lists, l => l.id === listId);
      if (!list) {
        redirect = <Redirect to={`/lists/${lists[0].id}`} />;
      }
    }
    if (pathname === "/" && lists[0].id) {
      redirect = <Redirect to={`/lists/${lists[0].id}`} />;
    }
    return redirect;
  }

  renderContent = (location, lists, subscribeToNewLists) => {
    const commonChildProps = {
      menuOpen: this.state.menuOpen
    };

    return (
      <ContentWrapper menuOpen={this.state.menuOpen}>
        <ContentOverlay
          onClick={this.closeMenu}
          menuOpen={this.state.menuOpen}
        />

        <Menu lists={lists} />

        <AppContent menuOpen={this.state.menuOpen}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={200}>
              <Switch location={location}>
                <Route
                  path="/lists/:listId"
                  render={({
                    match: {
                      params: { listId }
                    }
                  }) => {
                    const list = _.find(lists, l => l.id === listId);
                    if (list) {
                      return <ListPage list={list} {...commonChildProps} />;
                    }
                    return <Loading key="loading" />;
                  }}
                />
                <Route path="/*" render={() => <Loading key="loading" />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </AppContent>
      </ContentWrapper>
    );
  };

  render() {
    return (
      <>
        <GlobalStyles />

        <Router history={this.props.history}>
          <AllListsComponent>
            {({ loading, data, error }) => {
              if (error) {
                console.log(error);
              }
              if (loading) {
                return <Loading key="loading" />;
              }

              const { Lists } = data;
              return (
                <Route
                  render={({ location }) =>
                    this.renderRedirect(location, Lists) ||
                    this.renderContent(location, Lists)
                  }
                />
              );
            }}
          </AllListsComponent>
        </Router>
      </>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

App.defaultProps = {
  history: createBrowserHistory()
};

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  @media screen and (min-width: 60em) {
    left: 5.55555%;
    right: 5.55555%;
  }
  @media screen and (min-width: 80em) {
    left: 11.1111%;
    right: 11.1111%;
  }
`;
