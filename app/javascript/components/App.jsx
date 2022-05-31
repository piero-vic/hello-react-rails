import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>This is the root path</>} />
        <Route path="/hello" element={<>This is the hello path</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
