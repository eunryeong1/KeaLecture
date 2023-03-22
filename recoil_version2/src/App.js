import './App.css';
import React, { useState } from "react";
import{RecoilRoot, atom, selector, useRecoilState,useRecoilValue} from "recoil";

const number1State=atom({
  key:"number1State",
  default:""
});
const number2State=atom({
  key:"number2State",
  default:""
});
const selectedOperator = atom({ 
  key: "selectedOperator", 
  default: "+" 
});

const result = selector({
  key: "result",
  get: ({ get }) => {
    const num1 = (get(number1State));
    const num2 = (get(number2State));
    const operator = get(selectedOperator);

    switch (operator) {
      case "+":
        return Number.parseInt(num1) + Number.parseInt(num2);
      case "-":
        return Number.parseInt(num1) - Number.parseInt(num2);
      case "*":
        return Number.parseInt(num1) * Number.parseInt(num2);
      case "/":
        return Number.parseInt(num1) / Number.parseInt(num2);
      default:
        return NaN;
    }
  },
});

function NumberInput() {
  const [n1, setN1] = useRecoilState(number1State);
  const [n2, setN2] = useRecoilState(number2State);
  const onChange = (event) => {
    setN1(event.target.value);
  };
  const onChange2 = (event) => {
    setN2(event.target.value);
  };
  return (
    <div>
    Number1 <input type="n1" value={n1} onChange={onChange} />
    <br />
    Number2 <input type="n2" value={n2} onChange={onChange2} />
    </div>
    );
    
  }
  function Calculate() {
    const [operate,setOperate]=useRecoilState(selectedOperator)

    const ope=(char)=>{
      switch(char){
        case "+":
          return setOperate("+");
        case "-":
          return setOperate("-");
        case "*":
          return setOperate("*");
        case "/":
          return setOperate("/");
        default:
          return NaN;
      }
    }
    const results=useRecoilValue(result);
      
    return (
  
        <div>
          <div>
            <button title="plus" onClick={()=>ope("+")}>+</button>
            <input value={results}></input>
          </div>
          <div>
            <button title="minus" onClick={()=>ope("-")}>-</button>      
            <input value={results}></input>
          </div>
          <div>
            <button title="multi" onClick={()=>ope("*")}>*</button>
            <input value={results}></input>
          </div>
          <div>
            <button title="divi" onClick={()=>ope("/")}>/</button>
            <input value={results}></input>
          </div>
          
          
        </div>  
    )   
    }
    function Calculator() {
      return (
      <div>
      <NumberInput />
      <Calculate />
      </div>
      );
    }
      
function App() {
  
  return (
    <RecoilRoot>
      <div className="App">
        <h1>GCU Calculate</h1>
        <Calculator/>
      </div>
    </RecoilRoot>
  );
}

export default App;
