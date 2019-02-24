import React from 'react';

class CounterButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

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
