import { useState } from 'react'
import './App.css'
import {Link}from'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend class KLU</h1>
      <h2> Today's topic is introduction to react</h2>
      <h3> Todays's daye is 23.07.2025</h3>
      <h4>Reg no: 2400032427</h4>
      <Link to="/Page1">Go to page1</Link>
      <br />
      <Link to="/Page2">Go to Page2</Link>
      <br />
      <Link to="/page3">Go to page3</Link>
      
      
    </>
  )
}

export default App
