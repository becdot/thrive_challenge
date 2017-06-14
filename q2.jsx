/**
 * INSTRUCTIONS
 *
 * In React, create a Counter component that does the following:
 *  1. Display a number with a minimum value of 0, and a maximum value of 100
 *  2. Increments the counter by 1 when the user clicks an up arrow
 *  3. Decreases the counter by 1 when the user clicks a down arrow
 * Non-react developers may alternatively use vanilla js
 */

/**
 * TODO
 *
 * - Use ES6 getters/setters to update value (nicer way to handle bounding logic)
 * - Would be nice to add Jest tests
 */

const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  updateValue(value) {
    const newValue = this.state.value + value;
    if (newValue <= 100 && newValue >= 0) {
      console.log(`setting state to ${value}`);
      this.setState({value: newValue});
    } else {
      console.log("Value is out of bounds!");
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.updateValue.bind(this, 1)}>up</button>
        <button onClick={this.updateValue.bind(this, -1)}>down</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('react-counter'));