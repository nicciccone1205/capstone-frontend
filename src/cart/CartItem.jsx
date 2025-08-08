import CartItemQty from "./CartItemQuantity";

export default function CartItem({ item, removeItems, addItems }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartItemQty
        item={item}
        removeItems={removeItems}
        addItems={addItems}
      />
    </li>
  );
}