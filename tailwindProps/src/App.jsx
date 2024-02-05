import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let newArray = ['redwan','rimon']
  return (
    <>
     <h1 className='text-text bg-green-500 py-3 px-8 rounded'>Tailwind Test</h1>
    <Card username='Redwan Hussain Shawon' array={newArray}/>
    <Card username='Redwan Hussain Shawon' array={newArray}/>
    <Card username='Redwan Hussain Shawon' textColor='text-red' array={newArray}/>
    
    </>
  )
}

export default App
