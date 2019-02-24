import React from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './CounterButton';

/*
 * Smoke Test
 * When we render the component does it cause any errors?
 */
it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<CounterButton />, div);

  ReactDOM.unmountComponentAtNode(div);
});
