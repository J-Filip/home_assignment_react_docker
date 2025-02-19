import 'antd/dist/antd.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/UserContext';
import MainLayout from './layout/MainLayout';
import { CreateUserPage } from './routes/CreatePokemonPage';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import { PokemonDetailsPage } from './routes/PokemonDetailsPage';
import PokemonListPage from './routes/PokemonListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pokemons',
        element: <PokemonListPage />,
      },
      {
        path: 'pokemon/:pokemonName/details',
        element: <PokemonDetailsPage />,
      },
      {
        path: 'pokemons/create',
        element: <CreateUserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
