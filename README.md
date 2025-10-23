# Ecommerce React

Aplicación eCommerce desarrollada con **React**, **Vite** y **Sass** que permite explorar productos, gestionarlos en un carrito y completar un flujo básico de compra.

## Cumplimiento de requerimientos

### Requerimiento #1 · Carrito de compras
- `ProductList` lista cada producto disponible y expone un botón para agregarlo al carrito mediante `addToCart`.  
- El estado del carrito se controla con `useState` dentro de `CartProvider`, que actualiza cantidades, elimina artículos y calcula totales.  
- `CartPreview` y `CartPage` muestran los productos seleccionados en componentes separados, junto con controles de cantidad y totales.  
- `Layout` organiza la vista con barra de navegación, contenido principal y un aside fijo para el carrito.

### Requerimiento #2 · Integración con API
- El hook `useProducts` consume la API pública de Fake Store, maneja estados de carga y error, y permite refrescar los datos.  
- `useProduct` obtiene un producto individual para la vista de detalle.  
- Los estilos se implementan en `styles.scss`, actualizando el diseño general del eCommerce.  
- El carrito admite edición de cantidades, eliminación y totales en tiempo real.

### Requerimiento #3 · Rutas
- `App` define las rutas principales (`/`, `/products`, `/cart`, `/checkout`, `/login`) y una página 404.  
- Cada sección cuenta con su componente dedicado en `src/pages`.  
- Los enlaces del catálogo y el carrito permiten navegar entre productos y sus detalles.

### Requerimiento #4 · Rutas dinámicas y protegidas
- La ruta `/products/:productId` muestra detalles dinámicos usando `useParams` y `useProduct`.  
- El botón "Agregar al carrito" del detalle reutiliza la lógica global para mantener la interactividad.  
- `ProtectedRoute` restringe el acceso a `/checkout` y redirige al formulario de login cuando el usuario no está autenticado.  
- `Navbar` contiene los enlaces principales, indica la cantidad de productos en el carrito y gestiona la sesión.

## Tecnologías utilizadas
- React 18 con React Router DOM.  
- Vite como herramienta de build.  
- Sass para los estilos.

## Ejecución local
1. Instala las dependencias desde la raíz del proyecto:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre el enlace que muestra la terminal (por defecto `http://localhost:5173`).

```powershell
# Ejemplo en Windows
PS D:\Lara\...\ecommerce> npm install
PS D:\Lara\...\ecommerce> npm run dev
```

## Estructura del proyecto
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
