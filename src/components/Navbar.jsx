import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <NavLink to="/">ShopNow</NavLink>
      </div>
      <nav className="navbar__links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Inicio
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Productos
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? 'active cart-link' : 'cart-link')}
        >
          Carrito
          <span className="navbar__badge" aria-label="Productos en carrito">
            {totalItems}
          </span>
        </NavLink>
      </nav>
      <div className="navbar__auth">
        {isAuthenticated ? (
          <>
            <span className="navbar__user">{user?.email}</span>
            <button className="button button--ghost" type="button" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active button button--primary' : 'button button--primary')}
          >
            Iniciar sesión
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
