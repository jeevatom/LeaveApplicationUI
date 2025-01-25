import React from 'react'
import {useState} from 'react'


const Usestate = () => {

    const[count,setCount] = useState(0)

    function IncreaseFunction(){
        funcheck(9);
        setCount(count+1);
        
    }
    function DecreaseFunction(){
        funcheck(11);
        setCount(count-1);
    }

    function funcheck(num){
        if(count==num){
        alert('hello');
        }
    }
  return (
    <div>
      <h1>hello the count is  {count}</h1>
      <button onClick={IncreaseFunction}>increase</button>
      <button onClick={DecreaseFunction}>decrease</button>
    </div>
  )
}

export default Usestate;
