import React from "react";
import { Link } from "react-router";

export default function JeweleryOrders() {
    return(
        <div>
            <h1>Order Your Jewelery!</h1>
            <Link to= "/purchase">Purchase Page</Link>
        </div>
    );
}