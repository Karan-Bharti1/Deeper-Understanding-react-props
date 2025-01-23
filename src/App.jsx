import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { prototypejs } from 'globals'
const Greeting=(props)=>{
return <h1>Hi {props.name}</h1>
}
function App() {


  return (
    <>
     <Greeting name="React Learner"/>
    </>
  )
}

export default App
