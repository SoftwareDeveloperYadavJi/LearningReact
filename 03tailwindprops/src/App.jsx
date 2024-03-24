import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let obj = {
    username:"Nitin",
    age:21
  }
 



  return (
    <>
   <Card channel="ChaiAurCode" BtnTex="Click Me"/>
   <Card channel="Nitin Yadav" BtnTex="Click Me"/>
    </>
  )
}

export default App
