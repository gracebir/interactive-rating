import { Route, Routes } from "react-router-dom"
import Rate from "./pages/Rate"
import Summary from "./pages/Summary"
import { useState } from "react"

function App() {
  const [rate, setRate] = useState(0)
  return (
    <div className="font-overpass h-screen bg-dark w-full flex items-center px-6 lg:px-0">
      <Routes>
        <Route element={<Rate rate={rate} setRate={setRate}/>} path="/"/>
        <Route element={<Summary rate={rate}/>} path="/summary"/>
      </Routes>
    </div>
  )
}

export default App
