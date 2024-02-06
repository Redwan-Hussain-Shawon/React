import {useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passRef = useRef();

const copyClip = useCallback(()=>{
  passRef.current?.select();
  window.navigator.clipboard.writeText(password);
},[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) strr += "123456789";
    if (charAllowed) strr += "!@#$%^&*(){}][]`~";
    for (let x = 1; x <= length; x++) {
      let char = Math.floor(Math.random() * strr.length + 1);
      pass += strr.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, password]);
  
  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed])
  
  return (
    <>
      <div className="w-full py-4 max-w-md mx-auto text-center shadow-lg rounded-lg px-4 my-4 text-orange-500 bg-gray-700 ">
        {" "}
        test
        <div className="flex ">
          <input
            type="text"
            readOnly
            ref={passRef}
            className="outline-none w-full py-1 px-3 rounded-lg"
            defaultValue={password}
          />
          <button className="bg-blue-700 py-1 px-4 text-white rounded-lg " onClick={copyClip}>
            Copy
          </button>
        </div>
        <input type="range" value={length} min={6} max={100} onChange={(e)=>{setLength(e.target.value)}} className="cursor-pointer" />
        <label htmlFor=""></label>
        <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=> setNumberAllowed((pre)=>!pre) } />
        <label htmlFor="numberInput" >Number</label>
        <div>
          <input type="checkbox" id="chracterInput" checked={charAllowed} onChange={()=>{ setcharAllowed((pre)=> !pre) }} />
          <label htmlFor="chracterInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
