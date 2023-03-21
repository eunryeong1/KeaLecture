import './App.css';
import React, { useState } from "react";
import{RecoilRoot, atom, selector, useRecoilState,useRecoilValue} from "recoil";

const number1State=atom({
  key:"number1State",
  default:""
});
const n1State=selector({
  key:"n1State",//unique ID
  get:({get})=>{
    const n1=get(number1State);
    return n1;
  }
});
const number2State=atom({
  key:"number2State",
  default:""
});
const n2State=selector({
  key:"n2State",//unique ID
  get:({get})=>{
    const n2=get(number2State);
    return n2;
  }
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
    const digit1 = useRecoilValue(n1State);
    const digit2 = useRecoilValue(n2State);
    const [sum,setSum]=useState(0);
    // const sum_number=()=>{
      
    // }
    const [minus,setMinus]=useState(0)
    // const minus_number=()=>{
      
    // }
    const [multi,setMulti]=useState(0)
    // const multi_number=()=>{
      
    // }
    
    const [div,setDiv]=useState(0)
    // const div_number=()=>{
      
    // }
    const calc=(char)=>{
      switch(char){
        case "+":
          return setSum(Number.parseInt(digit1)+Number.parseInt(digit2));
        case "-":
          return setMinus(Number.parseInt(digit1)-Number.parseInt(digit2));
        case "*":
          return setMulti(Number.parseInt(digit1)*Number.parseInt(digit2));
        case "/":
          return setDiv(Number.parseInt(digit1)/Number.parseInt(digit2));
        default:
          return NaN;
      }
      
    }
    
    return (
  
        <div>
          <div>
            <button title="plus" onClick={()=>calc("+")}>+</button>
            <input value={sum}></input>
          </div>
          <div>
            <button title="minus" onClick={()=>calc("-")}>-</button>      
            <input value={minus}></input>
          </div>
          <div>
            <button title="multi" onClick={()=>calc("*")}>*</button>
            <input value={multi}></input>
          </div>
          <div>
            <button title="divi" onClick={()=>calc("/")}>/</button>
            <input value={div}></input>
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
