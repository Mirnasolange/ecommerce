import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="not-found">
    <h1>404</h1>
    <p>No encontramos la página que buscas.</p>
    <Link to="/" className="button button--primary">
      Volver al inicio
    </Link>
  </section>
);

export default NotFoundPage;
