import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import Country from "./pages/Country"
import Short from "./pages/Short"

export default function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="country" element={<Country/>}/>
          <Route path="short" element={<Short/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}