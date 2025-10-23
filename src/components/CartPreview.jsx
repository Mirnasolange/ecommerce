import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const CartPreview = () => {
  const { cartItems, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const isEmpty = cartItems.length === 0;

  return (
    <section id="carrito" className="cart-preview">
      <div className="cart-preview__header">
        <h2>Carrito</h2>
        <span>{totalItems} productos</span>
      </div>
      {isEmpty ? (
        <p className="cart-preview__empty">Aún no has agregado productos.</p>
      ) : (
        <ul className="cart-preview__list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-preview__item">
              <img src={item.image} alt={item.title} />
              <div className="cart-preview__details">
                <Link to={`/products/${item.id}`}>{item.title}</Link>
                <div className="cart-preview__meta">
                  <label htmlFor={`quantity-${item.id}`}>Cant.</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                  />
                  <span className="cart-preview__price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <button
                  className="button button--link"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-preview__footer">
        <div>
          <span>Total:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <Link
          to={isEmpty ? '#carrito' : '/checkout'}
          className={`button button--primary${isEmpty ? ' button--disabled' : ''}`}
          aria-disabled={isEmpty}
          onClick={(event) => {
            if (isEmpty) {
              event.preventDefault();
            }
          }}
        >
          Finalizar compra
        </Link>
      </div>
    </section>
  );
};

export default CartPreview;
