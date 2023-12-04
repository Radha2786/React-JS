import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* We use useState for Ui updation for ex here we are updating counter in so many places that's where the use of 
useState hook comes in picture  */

function App() {
//  let counter=1;
let[counter,setCounter]= useState(1);   
let AddValue=()=>{
  if(counter>=20){
    setCounter(counter=20);
  }else{
    setCounter(counter+1);
  }
 
}

 let RemoveVal = ()=>{
  if(counter<=0){
    setCounter(counter=0);
  }else{
    setCounter(counter-1);
  }

 }

  return (
    <>
      <h1>Gulab Jamun khalo Guys</h1>
      <h2>Counter value: 5</h2>

      <button onClick={AddValue}>Add Value {counter}</button>
      
      <br></br>
      <br/>
      <button onClick={RemoveVal}>remove value {counter}</button>
      <p>footer: {counter}</p>      
    </>
  )
}

export default App
