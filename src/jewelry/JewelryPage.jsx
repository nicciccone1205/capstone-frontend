
import {Link} from "react-router";
import Cart from "../cart/Cart";

import JewelryList from "./JewelryList";

export default function JewelryPage() {
    return(
        <div>

            <h1>Our Jewelry</h1>
            <Link to = "/order">Go to order page</Link>
            <Cart
                cart={[]}/>
            <JewelryList />
        </div>
        

    );
}