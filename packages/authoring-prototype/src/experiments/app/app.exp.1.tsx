import * as React from 'react';
import styled from 'styled-components';

import { SuiteHeader } from '../suite-header/suite-header.exp.1';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ExperimentBrowser } from '../../facility/experiment-browser/experiment-browser';
import { Pages } from '../list-views/pages/pages.exp.1';

import { Nav } from '../nav/nav.exp.1';

export function App() {
  return (
    <StyledAppRoot>
      <SuiteHeader className="suite-header" />
      <div className="app-body">
        <Switch>
          <Route path="/exp" component={ExperimentBrowser} />
          <Route path="/">
            <Nav className="app-body__aside" />
            <Switch>
              <Redirect exact from="/" to="/app/pages" />
              <Redirect exact from="/app" to="/app/pages" />
              <Route path="/app/pages" component={() => <Pages className="app-body__main" />} />
              <Route path="/app/products" component={() => <h1>Products</h1>} />
              <Route path="/app/urls" component={() => <h1>URLs</h1>} />
              <Route path="/app/layouts" component={() => <h1>Layouts</h1>} />
              <Route path="/app/templates" component={() => <h1>Templates</h1>} />
              <Route path="/app/media" component={() => <h1>Media</h1>} />
            </Switch>
          </Route>
        </Switch>
      </div>
    </StyledAppRoot>
  );
}

const StyledAppRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .suite-header {
    flex-shrink: 0;
  }

  .app-body {
    height: calc(100% - 48px);
    display: flex;
    flex-grow: 1;
    position: relative;
  }

  .app-body__aside {
    flex-shrink: 0;
  }
  .app-body__main {
    flex-grow: 1;
    height: 100%;
  }

  .side-panel {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
`;
