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
 *
 * Use the "react-test-renderer" library to render the component into a JSON
 * format called a snapshot. Assert that the current snapshot matches the
 * previously created "correct" snapshot.
 *
 * The first time you run the test you won't have anything to compare to, but
 * jest will prompt you with options to create/delete/update snapshots
 * automatically.
 *
 * The snapshots are created in a directory named "__snapshots__" and should be
 * committed to your repository.
 */
describe('Snapshot Tests', () => {

  it('renders the UI as expected when no props are provided', () => {

    const tree = renderer.create(<CounterButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected when "initialCount" is provided', () => {

    const tree = renderer.create(<CounterButton initialCount={42} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
})
