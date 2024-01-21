import React from 'react'
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Radha");
  function updateTitle(){
    setTitle("my name is" + Math.random());
  }

  return (
    <>
    <button onClick={updateTitle}>Update the Title</button>
    <Header title={title}></Header>
    <Header title="Radha"></Header>
    <Header title="Radha"></Header>
    <Header title="Radha"></Header>
    <Header title="Radha"></Header>
    </>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

// ab ye Header component tabhi re render hoga jab props m koi changes honge otherwise ni hoga re-render

export default App
