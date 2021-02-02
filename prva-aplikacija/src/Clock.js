import React from 'react'

class Clock extends React.Component {
  constructor() {
    super()

    this.state = {
      time: new Date()
    }

    setInterval(() =>
      this.liveTime(), 1000)
  }

  liveTime = () => {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1 className="heading">What time is it?</h1>
        <h2 className="clock">
          {this.state.time.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}

export default Clock;