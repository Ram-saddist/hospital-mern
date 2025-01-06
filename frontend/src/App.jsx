import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register/Register'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path='/login'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}