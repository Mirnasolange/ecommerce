import { Link } from 'react-router-dom';

const HomePage = () => (
  <section className="home">
    <div className="home__hero">
      <h1>Tu nuevo eCommerce favorito</h1>
      <p>
        Descubre una experiencia de compra moderna, rápida y enfocada en las necesidades de
        tus clientes.
      </p>
      <Link to="/products" className="button button--primary">
        Ver productos
      </Link>
    </div>
    <div className="home__features">
      <article>
        <h3>Catálogo dinámico</h3>
        <p>Los productos se actualizan automáticamente desde una API pública.</p>
      </article>
      <article>
        <h3>Carrito inteligente</h3>
        <p>Administra cantidades, elimina productos y revisa el total en tiempo real.</p>
      </article>
      <article>
        <h3>Experiencia segura</h3>
        <p>Accede al checkout mediante rutas protegidas y autenticación básica.</p>
      </article>
    </div>
  </section>
);

export default HomePage;
