import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './views/TestComponent';
import TestComponent2 from './views/TestComponent2';

ReactDOM.render(
  <React.StrictMode>
    <TestComponent />
    <h4>
      The following table is with multiple record if you have more than 10 records the pagination and record per page dropdown will show.
    </h4>
    <TestComponent2/>
  </React.StrictMode>,
  document.getElementById('root')
);

