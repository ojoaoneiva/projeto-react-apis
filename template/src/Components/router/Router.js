import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PokedexPage} from "../../Pages/PokedexPage/PokedexPage";
import {PokedexListPage} from "../../Pages/PokemonListPage/PokemonListPage";
import {PokedexDetailPage} from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import { useState,useEffect } from "react";

export const Routess = () => {
  const [pokedex,setPokedex] =useState([]);

  useEffect(() => {
  const pokemons = localStorage.getItem("pokedex")
         if (pokemons) { setPokedex(JSON.parse(pokemons) ) }
  }, []);
  
  useEffect(() => {
  if (pokedex.length > 0) { 
        localStorage.setItem("pokedex", JSON.stringify(pokedex))}
  }, [pokedex]);
  
const addPokemon =(pokemon)=>{
    setPokedex([...pokedex, pokemon]);
}
const removePokemon =(pokemon)=>{
  const filteredList = pokedex.filter((item) => item !== pokemon)
  setPokedex(filteredList);
}


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokedexListPage addPokemon={addPokemon} pokedex={pokedex} setPokedex={setPokedex}/>} />
        <Route path="/pokedexPage/" element={<PokedexPage removePokemon={removePokemon} pokedex={pokedex} setPokedex={setPokedex}/>} />
        <Route path="/pokedexDetailPage/:pokemonName" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};