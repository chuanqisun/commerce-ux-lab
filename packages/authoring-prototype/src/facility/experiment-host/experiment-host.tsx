import * as React from 'react';
import { SuiteHeaderDemo } from '../../experiments/suite-header/suite-header.demo';
import { ContextToolbarDemo } from '../../experiments/context-toolbar/context-toolbar.demo';
import { Route } from 'react-router-dom';

export const experiments = [
  {
    name: 'Suite header',
    component: SuiteHeaderDemo,
    subroute: 'suite-header',
  },
  {
    name: 'Context toolbar',
    component: ContextToolbarDemo,
    subroute: 'context-toolbar',
  },
];

export function ExperimentHost() {
  return (
    <>
      {experiments.map(exp => (
        <Route key={exp.name} path={`/host/${exp.subroute}`} component={exp.component} />
      ))}
    </>
  );
}
