import React from 'react';

class CounterButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    // Set initial value for count
    if (Number.isInteger(props.initialCount)) {
      this.state.count = props.initialCount;
    } else {
      this.state.count = 0;
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render () {

    return (
      <button onClick={this.increment}>
        I have been clicked {this.state.count} {this.state.count === 1 ? 'time' : 'times' }
      </button>
    )
  }
}

export default CounterButton;
