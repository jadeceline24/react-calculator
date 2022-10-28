import React from "react";
import { useState } from "react";


function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const opt = ['/','*','-','+','.']

  const createDigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={()=>updateDigits(i.toString())}>{i}</button>
      )
    }
    return digits
  }

  const updateDigits = (value) => {

    if(opt.includes(value) & calc === '' || 
    opt.includes(value) & opt.includes(calc.slice(-1)) ){
      return
    }
    setCalc(calc + value)

    if(!opt.includes(value)){
      setResult(eval(calc + value).toString())
    }

  }
  const equals = () => {
    setCalc(eval(calc).toString())
  }
  const del = () => {
    if (calc === '') {
      return
    }
    const del = calc.slice(0, -1)
    setCalc(del)
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}{calc || '0'}
        </div>
        <div className="operators">
          <button onClick={()=>updateDigits('/')}>/</button>
          <button onClick={()=>updateDigits('+')}>+</button>
          <button onClick={()=>updateDigits('-')}>-</button>
          <button onClick={()=>updateDigits('*')}>x</button>
          <button onClick={del}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateDigits('0')}>0</button>
          <button onClick={()=>updateDigits('.')}>.</button>
          <button onClick={equals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
