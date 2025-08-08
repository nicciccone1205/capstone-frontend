import CartItem from "./CartItem";
import { useCart } from "./CartContext";

export default function Cart() {
  const {cart, addItems,removeItems} = useCart();
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addItems={addItems}
                removeItems={removeItems}
              />
            ))}
          </ul>
        </>
      )}
      <br />
    </section>
  );
}