import * as React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { experiments } from '../experiment-host/experiment-host';

export function ExperimentBrowser() {
  return (
    <>
      <ul>
        {experiments.map(exp => (
          <li key={exp.name}>
            <NavLink to={`/exp/${exp.subroute}`}>{exp.name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        {experiments.map(exp => (
          <Route key={exp.name} path={`/exp/${exp.subroute}`}>
            <iframe width="100%" height="100%" frameBorder="0" src={`/host/${exp.subroute}`} />
          </Route>
        ))}
      </Switch>
    </>
  );
}
