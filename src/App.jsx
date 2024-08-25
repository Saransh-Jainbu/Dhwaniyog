import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import App1 from './App1'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App1 />} exact></Route>
        <Route path="/Login" element={<Login />} exact></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
