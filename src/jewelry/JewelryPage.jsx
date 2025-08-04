import React from "react";
import {Link} from "react-router-dom";

export default function JeweleryPage() {
    return(
        <div>
            <h1>Welcome to 3 Jewels!</h1>
            <Link to = "/order">Go to order page</Link>
        </div>
    );
}