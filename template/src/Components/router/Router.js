import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PokedexPage} from "../../Pages/PokedexPage/PokedexPage";
import {PokedexListPage} from "../../Pages/PokemonListPage/PokemonListPage";
import {PokedexDetailPage} from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import { useState,useEffect } from "react";

export const Routess = () => {
//   const [pokedex,setPokedex] =useState([]);
//   const[pokemons,setPokemons]=useState([]);

//   useEffect(() => {
//   const pokedex = localStorage.getItem("pokedex")
//          if (pokedex) { setPokedex(JSON.parse(pokedex) ) }
//   const pokemons = localStorage.getItem("pokemons")
//          if (pokemons) { setPokemons(JSON.parse(pokemons) ) }
//          else{setPokemons([])}
//   }, []);
  
//   useEffect(() => {
//   if (pokedex.length > 0) { 
//         localStorage.setItem("pokedex", JSON.stringify(pokedex))}
//   }, [pokedex]);

//   useEffect(() => {
//     if (pokemons.length > 0) { 
//           localStorage.setItem("pokemons", JSON.stringify(pokemons))}
//     }, [pokemons]);
  
// const addPokemon =(pokemon)=>{
//   const pokemonExist = pokedex.find((poke)=>pokemon.data.id === poke.data.id)
//   if (!pokemonExist){setPokedex([...pokedex, pokemon]);}
//   setPokemons(pokemons.filter((poke)=> poke!==pokemon))
//   if(pokemons.length===1){localStorage.removeItem("pokemons")}}

// const removePokemon =(pokemon)=>{
//   const pokemonExist = pokemons.find((poke)=>pokemon.data.id === poke.data.id)
//   if (!pokemonExist) {setPokemons([...pokemons,pokemon])}
//   setPokedex(pokedex.filter((poke) => poke !== pokemon));
//   if(pokedex.length===1){localStorage.removeItem("pokedex")}
// }
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