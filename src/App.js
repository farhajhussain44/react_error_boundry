import React from 'react';
import Component1 from './components/component1';
import Component2 from './components/component2';
import ErrorBoundary from './components/errorboundry';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <ErrorBoundary>
        <Component1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Component2 />
      </ErrorBoundary>
    </div>
  );
}

export default App;
