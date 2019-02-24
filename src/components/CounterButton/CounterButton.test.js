import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CounterButton from './CounterButton';

/*
 * Smoke Tests
 * When we render the component does it cause any errors?
 */
describe('Smoke Tests', () => {

  it('renders without crashing when no props are provided', () => {

    const div = document.createElement('div');

    ReactDOM.render(<CounterButton />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing when "initialCount" is provided', () => {

    const div = document.createElement('div');

    ReactDOM.render(<CounterButton initialCount={42} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});


/*
 * Snapshot Tests
 * Does the component render the correct UI
 */
describe('Snapshot Tests', () => {

  it('renders the UI as expected when no props are provided', () => {

    // Render the component and convert it's output into a JSON format called a snapshot.
    // These snapshot files are created in the directory ./__snapshots__
    const tree = renderer.create(<CounterButton />).toJSON();

    // Assert the current snapshot matches the correct snapshot.
    // The very first time you run this test you won't have anything to compare to
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected when "initialCount" is provided', () => {

    // Render the component and convert it's output into a JSON format called a snapshot.
    // These snapshot files are created in the directory ./__snapshots__
    const tree = renderer.create(<CounterButton initialCount={42} />).toJSON();

    // Assert the current snapshot matches the correct snapshot.
    // The very first time you run this test you won't have anything to compare to
    expect(tree).toMatchSnapshot();
  });
})
