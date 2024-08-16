import React from 'react'
import AddTopic from './AddTopic'
import AssignmentList from './Assignment'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AssignmentList />} />
      <Route path="/add-topic" element={<AddTopic />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
