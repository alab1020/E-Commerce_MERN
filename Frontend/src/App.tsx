import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hompage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/registerPage";




function App() {
  return (

    <BrowserRouter>
       <Navbar />
    <Routes>
      <Route path="/" element={<Hompage></Hompage>} />
       <Route path="/user/register" element={<RegisterPage />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
