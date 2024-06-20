import { useState } from "react";
import Login from "./Login";
import Users from "./Users";
import About from "./About";
import './App.css';


export const Introduction=({setModalIsOpen})=>{
  
  const openModal = () =>{
    setModalIsOpen(true)

  }
  return(
    <>
    
    <button className="logbtn" onClick={openModal}>Login</button>

    
    </>

  )
}

const App =()=>{
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div>
      <About/>
      <Login setisLoggedIn={setisLoggedIn}/>
      <Users isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;