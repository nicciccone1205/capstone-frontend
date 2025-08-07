import { Link } from "react-router";

//import useQuery from "../api/useQuery";

import { products } from "./JewelryDummyData.js";

import { useState, useEffect } from "react";

export default function JewelryList() {
    // const {
    //   data: jewels,
    //   loading,
    //   error,
    // } = useQuery("/jewelrypage", "jewelrypage");
  
    return (
      <ul>
        {products.map((product) => (
          <JewelryListItem key={product.id} product={product} />
        ))}
      </ul>
    );
  }
  
function JewelryListItem({ product }) {
    return (
        <li>
            <h2><Link to={"/jewelrypage/" + product.id}>{product.title}</Link></h2>
        </li>
      );
    }