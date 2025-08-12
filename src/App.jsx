import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import HomePage from "./HomePage";
import JewelryPage from "./jewelry/JewelryPage"
import JewelryDetails from "./jewelry/JewelryDetails";
import JewelryOrders from "./jewelry/JewelryOrders"
import Checkout from "./jewelry/Checkout"



export default function App() {
  return (
     <>
     <Layout />
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/jewelrypage" element ={<JewelryPage/>}/>
      <Route path="/jewelrypage/:id" element={<JewelryDetails />} />
      <Route path="/orderhistory" element = {<JewelryOrders/>}/>
      <Route path = "/purchases" element= {<Checkout/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </>
  )
}
