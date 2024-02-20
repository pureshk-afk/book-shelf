import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'

function App() {
  return (
  <Routes>
    <Route key={'/'} path={"/"} element={<Homepage />} />
  </Routes>
  )
}

export default App