import { useState } from 'react'

function App() {
  const [color,stateColor]=useState("olive")
  return (
    <div className='mx-auto w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed bottom-8 left-[20%]'>
        <button onClick={()=>{stateColor('red')}}>Green</button>
        <button onClick={()=>{stateColor('yellow')}}>yellow</button>
      </div>
    </div>
  )
}

export default App
