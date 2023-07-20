import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokedexPage } from "../../Pages/PokedexPage/PokedexPage";
import { PokedexListPage } from "../../Pages/PokemonListPage/PokemonListPage";
import { PokedexDetailPage } from "../../Pages/PokemonDetailPage/PokemonDetailPage";

export const Routess = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokedexListPage />} />
        <Route path="/pokedexPage/" element={<PokedexPage />} />
        <Route path="/pokedexDetailPage/:pokemonName" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};