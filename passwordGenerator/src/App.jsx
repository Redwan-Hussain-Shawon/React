import { useCallback, useEffect, useRef, useState } from 'react'
import Count  from './Count'

function App() {
  let [length,setLength]=useState(8)
  let [numberAllowed,setNumberAllowed]=useState(false)
  let [charAllowed,setcharAllowed]=useState(false)
  let [password,setPassword]=useState("")
  let passwordRef = useRef();
  
  const passwordGenerator=useCallback(()=>{
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="123456789";
    if(charAllowed) str+="!@#$%^&*(){}][]`~";
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);

    } 

    setPassword(pass);
 
  
  },[length,numberAllowed,charAllowed,setPassword])

 const passwordCopyClip = useCallback(()=>{
  passwordRef.current?.select();
   window.navigator.clipboard.writeText(password);
 },[password])

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed])

  return (
    <>
     <div className='w-full py-4 max-w-md mx-auto text-center shadow-lg rounded-lg px-4 my-4 text-orange-500 bg-gray-700 '> test
     <div className='flex '>
     <input 
      type="text"
      value={password}
      readOnly
      ref={passwordRef}
      className='outline-none w-full py-1 px-3 rounded-lg'/>
      <button className='bg-blue-700 py-1 px-4 text-white rounded-lg ' onClick={passwordCopyClip}>Copy</button>
      </div>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={function(e){setLength(e.target.value)}}
      />
      <label htmlFor="">{length}</label>
      <input 
      type="checkbox"
      id='numberInput'
      defaultChecked={numberAllowed}
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}
      />
      <label htmlFor="numberInput">Number</label>

     <div>
       <input 
      type="checkbox"
      id='chracterInput'
      defaultChecked={numberAllowed}
      onChange={()=>{
        setcharAllowed((prev)=>!prev)
      }}
      />
      <label htmlFor="chracterInput">Characters</label>
     </div>
      </div>
    </>
  )
}

export default App
