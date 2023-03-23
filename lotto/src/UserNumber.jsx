import React,{useState} from "react";
import generateRandomArray from "./Random";
import matching from "./Matching"
import sort from "./Sorted";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const inputNumber=atom({
    key:"inputNumber",
    default:{
        num1:"",
        num2:"",
    }
});

const numbers=selector({
    key:"numbers",
    get:({get})=>{
        const myinput=get(inputNumber)
        return myinput;
    }
})

function NumInput(){
    const [myInput,setmyInput]=useRecoilState(inputNumber)

    const onChangeMyInput=(id,event)=>{
        const temp={...myInput}
        temp[`num${id}`]=parseInt(event.target.value.trim());
        setmyInput(temp)
    }
    return(
        <div>
            <input type="number" value={myInput.num1} onChange={(event)=>onChangeMyInput(1,event)}/>
            <input type="number" value={myInput.num2} onChange={(event)=>onChangeMyInput(2,event)}/>
        </div>
    );
}



  function NumberByUser(){
    const [rand7Numb,setRand7Numb]=useState([])
    const [LottoNumbers, setLottoNumbers] = useState([]);
    const [matchingCount,setMatchingCount]=useState([])
    const myNum=useRecoilValue(numbers)
    let myNumber = [];
    for (let objKey in myNum) {
        if(myNum.hasOwnProperty(objKey)) {
            myNumber.push(myNum[objKey]);
        }
      }
    
    const onChangeNumber=()=>{
        if(myNum.num1===myNum.num2){
            alert("숫자가 중복됩니다.");
            return;
        }
        if (myNum.num1 < 1 || myNum.num1 > 45 || myNum.num2 < 1 || myNum.num2 > 45) {
            alert("1~45 사이 숫자를 입력해주세요.");
            return;
          }
        const LottoNumbers = generateRandomArray(9);
        setLottoNumbers(LottoNumbers);
        var rand=generateRandomArray(7)
        while(matching(rand,myNumber).length>0){
            rand=generateRandomArray(7)
        }
        if (matching(rand,myNumber).length===0){
            setRand7Numb(rand)
        }

        
        rand.push(myNum.num1)
        rand.push(myNum.num2)
        setMatchingCount(matching(LottoNumbers,rand))

    }


    // console.log(rand7Numb,"이거")
    // console.log(matchingCount);


    return <div>
        <button onClick={onChangeNumber}>Matching</button>
        <ul>Lotto Number
        {sort(LottoNumbers).map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
        <ul>Your Number
        {sort(rand7Numb).map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <p>{matchingCount.length}개 동일합니다!</p>
      <ul>동일한 숫자
        {sort(matchingCount).map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    
    </div>
    
  }


  function RandomUserNumbers(){
    return(
    <RecoilRoot>
        <div>
            <NumInput/>
            <NumberByUser></NumberByUser>
            
        </div>
    </RecoilRoot>
    );
  }
  
  export default RandomUserNumbers;