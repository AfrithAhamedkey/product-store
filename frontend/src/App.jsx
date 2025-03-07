import { Box, Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import Navbar from "./MyComponents/Navbar.jsx"
// import {Navbar} from "./components/ui/Navbar.jsx"

function App() {
  
  return (
    <Box minH={"100vh"}>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
      </Routes>
  
    
      
    </Box>
  )
}

export default App
