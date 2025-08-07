import { useState, useEffect } from "react";

import { useCart } from "../cart/CartContext";

import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

import { products } from "./JewelryDummyData.js";

export default function JewelryDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(()=>{
    console.log(products, id);
    setProduct(products.find((item) => item.id == id))
    console.log(product);
  }
    , [])
  // const {
  //   data: product,
  //   loading,
  //   error,
  // } = useQuery(`/jewelrypage/${id}`, "product");

  // if (loading) return <p>Loading...</p>;
  // if (error || !product) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>{product?.title ? product.title : "Not available"}</h1>
      <br />
      <p>{product?.description ? product.description : "Not available"}</p>
      <br />
      <p>Price: ${product?.price ? product.price : "Not available"}</p>
      <br />
      <img src={product?.image ? product.image : "Not available"}/>
      <br />
      {/* {token && */}
      <button onClick={() => addItems(product)}>Add Item</button>
    </>
  );
}