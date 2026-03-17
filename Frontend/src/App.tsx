import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hompage from "./pages/HomePage"
import Navbar from "./components/Navbar"




function App() {
  return (

    <BrowserRouter>
       <Navbar />
    <Routes>
      <Route path="/" element={<Hompage></Hompage>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
