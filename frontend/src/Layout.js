import React from 'react'
import Login from './Login'
import Sign from './Sign'
import App from './App'
import { Routes,Route } from 'react-router-dom'
export default function Layout() {
  return (
    <div><Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Sign/>}/>
        <Route path='/register' element={<Sign/>}/>
        <Route path='/home' element={<App/>}/>
        
        </Routes></div>
  )
}
