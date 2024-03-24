import { useState } from 'react'

// import './App.css' 

function App() {
  const [color,setClor] = useState("olive")


  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-self-end bottom-12 inest-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={() => setClor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={() => setClor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}} onClick={() => setClor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={() => setClor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"grey"}} onClick={() => setClor("grey")}>Grey</button>
      </div>
    </div>
   </div>
  )
}

export default App
