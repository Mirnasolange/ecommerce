import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useProduct } from '../hooks/useProducts.js';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProduct(productId);
  const { addToCart } = useCart();

  if (loading) {
    return <p className="state state--loading">Cargando producto...</p>;
  }

  if (error) {
    return <p className="state state--error">No se pudo cargar el producto: {error}</p>;
  }

  if (!product) {
    return <p className="state">Producto no encontrado.</p>;
  }

  return (
    <article className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail__image" />
      <div className="product-detail__info">
        <h1>{product.title}</h1>
        <p className="product-detail__category">{product.category}</p>
        <p className="product-detail__description">{product.description}</p>
        <div className="product-detail__cta">
          <span className="product-detail__price">${product.price}</span>
          <button className="button button--primary" type="button" onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductDetailPage;
