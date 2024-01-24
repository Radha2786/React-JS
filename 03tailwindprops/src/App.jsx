import { useState } from 'react'

import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  const arr =[1,2,3];
  const obj ={
    name:"radha",
    age:19 
  }

  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Props</h1>
<Card username="Yash" myarray= {arr} myobj={obj} button="show" />
<Card username="Radha Sharma" button="visit me"/>
    </>
  )
}

export default App
