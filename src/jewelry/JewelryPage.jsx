import React from "react";
import {Link} from "react-router";

import JewelryList from "./JewelryList";

export default function JewelryPage() {
    return(
        <div>
            <h1>Welcome to 3 Jewels!</h1>
            <JewelryList />
        </div>
    );
}