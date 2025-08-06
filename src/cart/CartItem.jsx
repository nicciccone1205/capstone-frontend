import CartItemQty from "./CartItemQty";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartItemQty
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}