import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import JewelryPage from "./jewelry/JewelryPage"
import JewelryOrder from "./jewelry/JewelryOrders"
import JewelryPurchase from "./jewelry/JewelryPurchase"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element ={<JewelryPage/>} />
      <Route path="/order" element = {<JewelryOrder/>}/>
      <Route path = "/purchase" element= {<JewelryPurchase/>}/>
        <Route index element={<p>Home page</p>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Route>
    </Routes>
  );
}
