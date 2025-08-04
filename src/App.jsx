import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import JeweleryPage from "./jewelery/JeweleryPage"
import JeweleryOrder from "./jewelry/JeweleryOrder"
import JeweleryPurchase from "./jewelery/JeweleryPurchase"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element ={JeweleryPage/>}/>
      <Route path="/order" element = {JeweleryOrder/>}/>
      <Route path = "/purchase" element= {JeweleryPurchase/>}/>
        <Route index element={<p>Home page</p>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Route>
    </Routes>
  );
}
