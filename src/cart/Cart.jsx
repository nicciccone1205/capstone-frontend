import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function Cart() {
  const { token } = useAuth();
  const {cart, addItems,removeItems} = useCart();
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
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
          <p>Total: ${total}</p>
        </>
      )}
      {token && <PurchaseButton cart={cart} token />}
      </section>
  );
}

function PurchaseButton(cart) {
  const {
    mutate: createOrder,
    data,
    loading: creatingOrder,
    error: createOrderError,
  } = useMutation("POST", "/orders", ["orders", "order"]);

  const {
    mutate: addOrderProduct,
    loading: addingOrderProduct,
    error: addOrderProductError,
  } = useMutation("POST", "/orders/products", [])
  //use try-catch method beneath if function below
  const onPurchase = async() => {
    const newOrder = await createOrder( {date: new Date().toISOString(), note: "Purchase successful"} )
    
    if (!newOrder) throw new Error ("Sorry, order ID is missing.")
      await Promise.all(
        cart.cart.map((product) => {
          addOrderProduct({
            orderId: newOrder.id,
            productId: product.id,
            quantity: product.quantity,
          })
        })
      )
  };
  return (
    <button onClick={onPurchase}>
      Buy
    </button>
  )
}