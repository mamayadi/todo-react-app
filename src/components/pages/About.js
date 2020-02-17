import React from 'react';
import {version} from '../../../package.json';

export default function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>
        This is the TodoList app v{version}. It is part of a React crash course
      </p>
    </React.Fragment>
  );
}
