import React from "react";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function JewelryOrders() {
    const { token } = useAuth();
        const {
          data: orders,
          loading,
          error,
        } = useQuery("/orders", "orders")
    if (loading) return <p>Loading...</p>;
    if (error || !order) return <p>Sorry! {error}</p>;
    return(
        <div>
            <h1>Your order history!</h1>
            <Link to= "/purchases">Checkout Page</Link>
        </div>
    );
}

// TO-DO: draw from orders on back end to fill out order history page