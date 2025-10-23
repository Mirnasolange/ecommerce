import { useCart } from '../context/CartContext.jsx';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  const handleConfirm = () => {
    clearCart();
    alert('¡Gracias por tu compra!');
  };

  return (
    <section className="checkout">
      <h1>Resumen del pedido</h1>
      <ul className="checkout__list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>
              {item.title} x {item.quantity}
            </span>
            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      <div className="checkout__total">
        <span>Total</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="button button--primary" type="button" onClick={handleConfirm}>
        Confirmar pago
      </button>
    </section>
  );
};

export default CheckoutPage;
