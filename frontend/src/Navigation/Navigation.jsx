import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import "./Navigation.css"
export default function Navigation() {
  const patientId=localStorage.getItem("patientId")
  const navigate=useNavigate()
  function logout(){
    localStorage.removeItem("patientId")
    navigate("/")
  }
  return (
    <>
      {
        patientId?(
          <div className='navbar'>
            <Link to="/">Home</Link>
            <Link onClick={logout}>Logout</Link>
          </div>
        ):(
          <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )
      }
    </>
  )
}
