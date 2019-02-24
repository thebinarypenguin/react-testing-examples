import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

/*
 * Snapshot Test
 * Does the component render the correct UI
 */
it('renders the UI as expected', () => {

  // Render the component and convert it's output into a JSON format called a snapshot.
  // These snapshot files are created in the directory ./__snapshots__
  const tree = renderer.create(<CounterButton />).toJSON();

  // Assert the current snapshot matches the correct snapshot.
  // The very first time you run this test you won't have anything to compare to
  expect(tree).toMatchSnapshot();
});
