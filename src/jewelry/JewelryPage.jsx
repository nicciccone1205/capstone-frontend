
import {Link} from "react-router";
import Cart from "../cart/Cart";

import JewelryList from "./JewelryList";

export default function JewelryPage() {
    return(
        <div>

            <h1>Our Jewelry</h1> 
            <br />          
            <JewelryList />
            <br />  
            <p><Link to = "/purchases">Go to checkout page</Link></p>
            <p><Link to = "/orderhistory">Check previous purchases</Link></p>
        </div>
        

    );
}