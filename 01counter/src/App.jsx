import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter + 1)
    }
  }
  

  const subValue = () => {
    if(counter > 1){
      setCounter(counter - 1);
    }
    
  }


  return (
    <>


      <h1>Chai Aur Code</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>AddValue {counter}</button>
      <button onClick={subValue}>SubValue: {counter}</button>

      
    </>
  )
}

export default App
