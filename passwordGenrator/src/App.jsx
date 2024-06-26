import { useCallback, useState , useEffect, useRef } from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

      for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random() * str.length);
          pass += str.charAt(char);
      }

      setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
 

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenerator()
    
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
    <h1 className='text-white text-center my-3 text-2xl'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3 my-2 rounded-md'
      placeholder='Password'
      readOnly
      ref={passwordref} />
      <button onClick={copyPasswordToClipboard}  className='outline-none bg-blue-700 text-white px-3 py-0.5 h-10 my-2 shrink-0 rounded-r-lg'>copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        ref={passwordref}
        onChange={(e) =>{setLength(e.target.value)}} />
        <label >Lenght : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((preve) => !preve);
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={() => {
          setCharAllowed((preve) => !preve);
        }} />
        <label htmlFor="charInput">Char</label>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
