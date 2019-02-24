import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
 * Smoke Test
 * When we render the component does it cause any errors?
 */
it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
