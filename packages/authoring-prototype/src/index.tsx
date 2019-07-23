import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { App } from './experiments/app/app.exp.1';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { ExperimentHost } from './facility/experiment-host/experiment-host';

initializeIcons();

function AppRoot() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/host" component={ExperimentHost} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

const mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
