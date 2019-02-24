import React from 'react';
import CounterButton from '../CounterButton/CounterButton';

class App extends React.Component {

  render() {

    return (
      <main>

        <h1>React Testing Examples</h1>

        <p>This button starts at 0</p>
        <CounterButton />

        <p>This button starts at 42</p>
        <CounterButton initialCount={42} />

      </main>
    );
  }
}

export default App;
