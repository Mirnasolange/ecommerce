import ProductList from '../components/ProductList.jsx';
import { useProducts } from '../hooks/useProducts.js';

const ProductsPage = () => {
  const { products, loading, error, refresh } = useProducts();

  return (
    <section className="products-page">
      <header className="products-page__header">
        <h1>Catálogo</h1>
        <button className="button button--ghost" type="button" onClick={refresh}>
          Actualizar productos
        </button>
      </header>
      <ProductList products={products} loading={loading} error={error} onRetry={refresh} />
    </section>
  );
};

export default ProductsPage;
