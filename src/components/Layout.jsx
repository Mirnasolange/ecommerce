import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import CartPreview from './CartPreview.jsx';

const Layout = () => (
  <div className="layout">
    <Navbar />
    <div className="layout__content">
      <main className="layout__main">
        <Outlet />
      </main>
      <aside className="layout__aside">
        <CartPreview />
      </aside>
    </div>
    <footer className="layout__footer">
      <p>© {new Date().getFullYear()} ShopNow · Creado con React y Vite.</p>
    </footer>
  </div>
);

export default Layout;
