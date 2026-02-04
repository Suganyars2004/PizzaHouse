import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Checkout from './Checkout.jsx'
import Cart from './Cart.jsx'
import { CartProvider } from './CartContext.jsx'

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/Menu", element: <Menu /> },
    { path: "/About", element: <About /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/Checkout", element: <Checkout /> },
    { path: "/Cart", element: <Cart /> },
    { path: "*", element: <h1>Page Not Found</h1> }
  ],
  {
    basename: "/PizzaHouse"   // ✅ THIS FIXES YOUR ERROR
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
