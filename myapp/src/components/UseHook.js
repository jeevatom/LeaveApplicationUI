import React, { useState , useEffect } from 'react'

export default function UseHook() {
    const[count,setCount] = useState(0);

      function funClick(){
        setCount(0);
      }

      useEffect(() => {
       const timer = setTimeout(() => {
            setCount((prevCount) => prevCount + 1); 
        }, 1000);
        return () => clearTimeout(timer);
      },[count]);
    

  return (
    <div>
      <h1>I have rendered {count} times</h1>
      <button onClick={funClick}>Reset</button>
    </div>
  )
}
