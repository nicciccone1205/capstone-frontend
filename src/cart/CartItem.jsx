import CartItemQty from "./CartItemQuantity";

export default function CartItem({ item, removeItems, addItems }) {
  return (
    <li className="cart-item">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>${item.price}</p>
      <CartItemQty
        item={item}
        removeItems={removeItems}
        addItems={addItems}
      />
    </li>
  );
}