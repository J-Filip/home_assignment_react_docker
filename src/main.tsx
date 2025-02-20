import 'antd/dist/antd.css';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/UserContext';
import MainLayout from './layout/MainLayout';
import { CreatePokemonPage } from './routes/CreatePokemonPage';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import { PokemonDetailsPage } from './routes/PokemonDetailsPage';
import PokemonListPage from './routes/PokemonListPage';

export const App = () => {
  const [response, setResponse] = useState<any>({});

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="pokemons" element={<PokemonListPage />} />
        <Route path="pokemon/:pokemonName/details" element={<PokemonDetailsPage />} />

        {/* demonstrate lifting and using shared state */}
        <Route path="pokemons/create" element={<CreatePokemonPage setResponse={setResponse} />} />
        <Route path="pokemons/create/success" element={<p>Pokemon created: {response.name}</p>} />
      </Route>
    </Routes>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* demonstrate context api */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
