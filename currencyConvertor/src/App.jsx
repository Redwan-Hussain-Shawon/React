import { useState } from 'react'
import {Input} from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyinfo'


function App() {
  const [amount,setAmount]= useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,secovertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  return (
    <>
     <h2 className='bg-orange-400 text-black'>Hello</h2>
    </>
  )
}

export default App
