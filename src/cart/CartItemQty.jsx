export default function CartItemQty({ item, removeFromCart, addToCart }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}