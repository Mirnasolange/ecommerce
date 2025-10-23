import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Completa tus credenciales para continuar.');
      return;
    }

    login(email);
    navigate(from, { replace: true });
  };

  return (
    <section className="login">
      <h1>Inicia sesión</h1>
      <p>Accede al checkout y gestiona tus compras.</p>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@correo.com"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="********"
        />
        {error && <p className="state state--error">{error}</p>}
        <button className="button button--primary" type="submit">
          Ingresar
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
