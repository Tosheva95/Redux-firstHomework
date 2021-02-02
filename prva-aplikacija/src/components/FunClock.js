import React, { useState } from 'react'

const FunClock = (props) => {

  const realTime = new Date().toLocaleTimeString()
  const [time, setTime] = useState(realTime)

  setInterval(() =>
    liveTime(), 1000)

  const liveTime = () => {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  return (
    <div>
      <h1 className="heading">What time is it?</h1>
      <h2 className="clock">
        {time}
      </h2>
    </div>
  )
}

export default FunClock