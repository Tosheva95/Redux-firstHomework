import React, {useState} from 'react'

 
const FunCalc = () => {
  const [firstNum, setFirstNum] = useState('')
  const [operation, setOperation] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [initialResult, setInitialResult] = useState(0)
  

  const changeFirstNum = (event) => {
    const value = event.target.value
    setFirstNum(value)
  }

  const changeOperation = (event) => {
    const value2 = event.target.value
    setOperation(value2)
  }

  const changeSecondNum = (event) => {
    const value3 = event.target.value
    setSecondNum(value3)
  }

  const buttonFunction = () => {
    const firstNumber = firstNum
    const operationInput = operation
    const secondNumber = secondNum
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
    setInitialResult(result)
  }


    return (
      <div>
        <div>
          <input placeholder='First number' onChange={changeFirstNum} />
        </div>

        <div>
          <input placeholder='Operation' onChange={changeOperation} />
        </div>

        <div>
          <input placeholder='Second number' onChange={changeSecondNum} />
        </div>

        <div>
          <button onClick={buttonFunction}>Calculate!</button>
        </div>

        <div>
          Result=<span>{initialResult}</span>
        </div>
      </div>
    )
  }

export default FunCalc;