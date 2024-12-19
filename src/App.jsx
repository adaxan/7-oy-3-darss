import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clock from './pages/Clock'
import Timer from './pages/Timer'
import Time from './pages/Time'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout><Clock /></MainLayout>} />
        <Route path="/timer" element={<MainLayout><Timer /></MainLayout>} />
        <Route path='/time' element={<MainLayout><Time /></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App  