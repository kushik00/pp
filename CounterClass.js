import React from 'react';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSub = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleSub} disabled={this.state.count === 0}>-1</button>
      </div>
    );
  }
}

export default CounterClass;
