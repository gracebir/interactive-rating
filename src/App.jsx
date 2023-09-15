import { Route, Routes } from "react-router-dom"
import Rate from "./pages/Rate"
import Summary from "./pages/Summary"

function App() {
  return (
    <div className="font-overpass h-screen bg-dark w-full flex items-center px-6 lg:px-0">
      <Routes>
        <Route element={<Rate/>} path="/"/>
        <Route element={<Summary/>} path="/summary"/>
      </Routes>
    </div>
  )
}

export default App
