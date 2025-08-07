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
      <Route path="/jewelrypage" element ={<JewelryPage/>}/>

      <Route path="/orders" element = {<JewelryOrder/>}/>
      <Route path = "/purchases" element= {<JewelryPurchase/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </>
  );
}
