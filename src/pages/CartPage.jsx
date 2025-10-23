import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const CartPage = () => {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h1>Tu carrito está vacío</h1>
        <Link to="/products" className="button button--primary">
          Explorar productos
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <header className="cart-page__header">
        <h1>Carrito de compras</h1>
        <button className="button button--ghost" type="button" onClick={clearCart}>
          Vaciar carrito
        </button>
      </header>
      <ul className="cart-page__list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-page__item">
            <img src={item.image} alt={item.title} />
            <div className="cart-page__info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="cart-page__controls">
                <label htmlFor={`cart-quantity-${item.id}`}>Cantidad</label>
                <input
                  id={`cart-quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                />
                <span className="cart-page__price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <button
                className="button button--link"
                type="button"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="cart-page__footer">
        <div>
          <span>Total de productos:</span>
          <strong>{totalItems}</strong>
        </div>
        <div>
          <span>Total a pagar:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <Link to="/checkout" className="button button--primary">
          Proceder al checkout
        </Link>
      </footer>
    </section>
  );
};

export default CartPage;
