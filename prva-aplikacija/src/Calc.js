import React from 'react'

class Calc extends React.Component {

  constructor() {
    super()

    this.state = {
      firstNum: '',
      operation: '',
      secondNum: '',
      initialResult: 0
    }
  }

  changeFirstNum = (event) => {
    const value = event.target.value
    this.setState({ firstNum: value })
  }

  changeOperation = (event) => {
    const value2 = event.target.value
    this.setState({ operation: value2 })
  }

  changeSecondNum = (event) => {
    const value3 = event.target.value
    this.setState({ secondNum: value3 })
  }

  buttonFunction = () => {
    const firstNumber = this.state.firstNum
    const operationInput = this.state.operation
    const secondNumber = this.state.secondNum
    let result = 0

    if (operationInput === '+') {
      result = Number(firstNumber) + Number(secondNumber)
    } else if (operationInput === '-') {
      result = firstNumber - secondNumber
    } else if (operationInput === '*') {
      result = firstNumber * secondNumber
    } else if (operationInput === '/') {
      result = firstNumber / secondNumber
    } else if (!operationInput) {
      alert('Missing sign operation, please try again')
    }
    this.setState({ initialResult: result })
  }


  render = () => {
    return (
      <div>
        <div>
          <input placeholder='First number' onChange={this.changeFirstNum} />
        </div>

        <div>
          <input placeholder='Operation' onChange={this.changeOperation} />
        </div>

        <div>
          <input placeholder='Second number' onChange={this.changeSecondNum} />
        </div>

        <div>
          <button onClick={this.buttonFunction}>Calculate!</button>
        </div>

        <div>
          Result=<span>{this.state.initialResult}</span>
        </div>
      </div>
    )
  }
}
export default Calc