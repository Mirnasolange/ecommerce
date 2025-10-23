# Ecommerce React

Este proyecto implementa un eCommerce educativo creado con **React**, **Vite** y **Sass**. Contiene un flujo completo para explorar productos, gestionar un carrito de compras y navegar por rutas públicas, dinámicas y protegidas.

## Características principales

- Catálogo de productos obtenido dinámicamente desde [`https://fakestoreapi.com`](https://fakestoreapi.com).
- Gestión global del carrito usando `useState` y el Context API.
- Rutas dinámicas y protegidas con React Router (`/products/:productId` y `/checkout`).
- Manejo de estados de carga, error y recarga manual de los productos.
- Layout adaptable con un resumen del carrito siempre visible.
- Estilos modernos escritos en **Sass**.

## Scripts disponibles

```bash
npm install
npm run dev     # Arranca el entorno de desarrollo
npm run build   # Genera la build de producción
npm run preview # Sirve la build generada
```

## Estructura

```
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.scss
│   ├── components
│   ├── context
│   ├── hooks
│   └── pages
└── vite.config.js
```

Para iniciar el proyecto instala las dependencias y ejecuta `npm run dev`.
