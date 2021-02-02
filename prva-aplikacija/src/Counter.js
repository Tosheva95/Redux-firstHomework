import React from 'react'

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  decrement = () => {
    const newCount = this.state.counter - 1
    const newState = { counter: newCount }
    this.setState(newState)
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}