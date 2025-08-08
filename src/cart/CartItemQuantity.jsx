export default function CartItemQty({ item, removeItems, addItems }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeItems(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addItems(item)}>+</button>
    </div>
  );
}