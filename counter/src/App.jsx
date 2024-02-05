import { useState } from 'react'

import './App.css'

function App() {
  let [value,update] = useState(0);
  // let counter =15;
  const addValue=()=>{
    value>10?10:update(value++)
  }
  const removeValue = ()=>{
    value<=0?0:update(value-1);
  }
 
   return (
     <>
       <h1>Redwan Hussain Shawon</h1>
       <h2>Counter Value : {value}</h2>
       <button onClick={addValue} >Add Value</button>
       <br/>
       <button onClick={removeValue}>Remove Value</button>
     </>
   )
 }

export default App
