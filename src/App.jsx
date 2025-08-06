import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import HomePage from "./HomePage";
import JewelryPage from "./jewelry/JewelryPage"
import JewelryOrder from "./jewelry/JewelryOrders"
import JewelryPurchase from "./jewelry/JewelryPurchase"

export default function App() {
  return (
     <>
     <Layout />
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/jewelry" element ={<JewelryPage/>}/>

      <Route path="/order" element = {<JewelryOrder/>}/>
      <Route path = "/purchase" element= {<JewelryPurchase/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </>
  );
}
