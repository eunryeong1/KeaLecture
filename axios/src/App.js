import React, {useState,useEffect} from "react";
import Axios from 'axios'


function App() {
  const [car,setCar]=useState("");
  useEffect(()=>{
    Axios.post("/api/cars").then((response)=>{
      if(response.data){
        setCar(response.data);
      }else{
        alert("failed to");
      }
    });
  },[]);

  const [car2,setCar2]=useState("");


  const onChange=()=>{
    Axios.get("/api/getCar").then((responses)=>{
      if(responses.data){
        setCar2(responses.data);
      }else{
        alert("failed to");
      }
    });
    console.log(car2)

  }
  
  
  
  
  return (
    <div className="App">
      <div align="left" style={{margin:"20px"}}>
        <h2>GCU React-Spring postCar</h2>
        ID:{car.id}<br/>
        Brand:{car.brand}<br/>
        Company:{car.company}<br/>
        Price:{car.price}<br/>
      </div>
      <div>
        <div align="left" style={{margin:"20px"}}>
        <h2>GCU React-Spring getCar</h2>
        <button onClick={onChange}>getCars</button><br/>
        ID:{car2.id}<br/>
        Brand:{car2.brand}<br/>
        Company:{car2.company}<br/>
        Price:{car2.price}<br/>
      </div>
      </div>
      
      
    </div>
  );
}
export default App;