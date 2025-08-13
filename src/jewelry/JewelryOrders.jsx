import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import { useApi } from "../api/ApiContext";

export default function JewelryOrders() {
    const [orderProducts, setOrderProducts] = useState()
    const { request, invalidateTags } = useApi()
    const { token } = useAuth();
    const {
        data: account,
        loading,
        error,
    } = useQuery("/orders", "orders")
    useEffect(() => {
        if (!account?.length) return
        async function orderProducts() {
            const result = await Promise.all(
                account.map((order) => {
                    return request(`/orders/${order.id}/products`, {method: "GET"})
                })
            )
            console.log(result);
            setOrderProducts(result)
        }
        orderProducts()
    }, [account])
    if (loading || !account) return <p>Oops! Please log in to access this feature.</p>;
    console.log(account, orderProducts);
    if (error) return <p>Sorry! {error}</p>;
    return(
        <>
        <h1>Your order history</h1>
        <br />
        <ul>
            {orderProducts?.map((orderProducts, index) =>
                <li key={index}>
                    <ul>
                        <h2>Order {index + 1}: {account[index].date.slice(0,10)}</h2>
                        {orderProducts.map((P, i) =>
                            <li key={i}>
                                {P.title} <br />
                                ${P.price}
                            </li>
                        )}
                    </ul>
                    <br />
                </li>
            )}
        </ul>
        <p><Link to= "/purchases">Checkout Page</Link></p>
        </>
    );
}