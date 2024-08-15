import {BrowserRouter,Route,Routes} from "react-router-dom"

import { Login } from "./pages/Login"
import { Singup } from "./pages/Singup"
import { SellerDashbod } from "./pages/SellerDashbod"
import BuyerDashbod from "./pages/BuyerDashbod"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
 export default function App() {
  return (
<>
<BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/singup" element={<Singup/>}/>
  <Route path="/seller/profile" element={<SellerDashbod/>}/>
  <Route path="/buyer/profile" element={<BuyerDashbod/>}/>
</Routes>
</BrowserRouter>
</>
  )
}