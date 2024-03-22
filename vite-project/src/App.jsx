import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [counter,setCounter] = useState(15)
  // let counter = 15
  function addval(){
    console.log("Clicked", counter);
    // counter = counter + 1
    if(counter > 19){
      return
    }
    setCounter(counter + 1)
  }

  function subValue(){
    console.log("Clicked " , counter);
    if(counter < 1){
      return
    }
    setCounter(counter -1)
  }


  return(
    <>
    <h1>Hello | Nitin</h1>
    <h2>Counter Value: {counter}</h2>
    <h3>Counter Value: {counter}</h3>
    <button onClick={addval}>Add Value</button>
    <button onClick={subValue}>Sub Value</button>
    </>
  )
}

export default App
