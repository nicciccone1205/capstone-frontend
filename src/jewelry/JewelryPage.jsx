
import {Link} from "react-router";
import Cart from "../cart/Cart";

export default function JeweleryPage() {
    return(
        <div>
            <h1>Our Jewelry</h1>
            <Link to = "/order">Go to order page</Link>
            <Cart
            cart={[]}/>
        </div>
        

    );
}