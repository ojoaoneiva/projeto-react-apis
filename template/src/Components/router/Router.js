import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PokedexPage} from "../../Pages/PokedexPage/PokedexPage";
import {PokedexListPage} from "../../Pages/PokemonListPage/PokemonListPage";
import {PokedexDetailPage} from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import { useState } from "react";

export const Routess = () => {
  const [pokedex,setPokedex] =useState([]);
  const addPokemon =(pokemon)=>{
    setPokedex([...pokedex, pokemon]);
    console.log(pokemon)
}

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokedexListPage addPokemon={addPokemon} pokedex={pokedex} setPokedex={setPokedex}/>} />
        <Route path="/pokedexPage/" element={<PokedexPage addPokemon={addPokemon} pokedex={pokedex} setPokedex={setPokedex}/>} />
        <Route path="/pokedexDetailPage/:pokemon" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};