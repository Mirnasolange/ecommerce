import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const ProductList = ({ products, loading, error, onRetry }) => {
  const { addToCart } = useCart();

  if (loading) {
    return <p className="state state--loading">Cargando productos...</p>;
  }

  if (error) {
    return (
      <div className="state state--error">
        <p>Algo ha salido mal: {error}</p>
        <button className="button button--primary" type="button" onClick={onRetry}>
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <Link to={`/products/${product.id}`} className="product-card__image-wrapper">
            <img src={product.image} alt={product.title} loading="lazy" />
          </Link>
          <div className="product-card__body">
            <h3>{product.title}</h3>
            <p className="product-card__description">{product.description}</p>
            <div className="product-card__footer">
              <span className="product-card__price">${product.price}</span>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
