import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './paginas/Home';
import DetalhesProduto from './paginas/DetalhesProduto';


const roteador = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/de/:id', element: <DetalhesProduto /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} /> 
  </React.StrictMode>
);

reportWebVitals();