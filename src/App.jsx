import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
 const [intro, setIntro] = useState({})

 useEffect(()=>{
  axios.get("/api")
  .then((response)=>{
    setIntro(response.data)
  })
  .catch((err)=>{
    console.log(err);
  })
 })

  return (
    <>
  <h1>I am</h1>
  <span>{intro.name}</span>


    </>
  )
}

export default App
