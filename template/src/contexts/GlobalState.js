import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import {BASE_URL} from "../constants/url";
import add from "../Assets/cardButtons/caputurar.png"
import remove from "../Assets/cardButtons/excluir.png"

const GlobalState = (props) => {
    const [pokedex,setPokedex] =useState([]);
    const [pokemons,setPokemons]=useState([]);
  
    useEffect(() => {
    const pokedex = localStorage.getItem("pokedex")
           if (pokedex) { setPokedex(JSON.parse(pokedex) ) }
    const pokemons = localStorage.getItem("pokemons")
           if (pokemons) { setPokemons(JSON.parse(pokemons) ) }
           else{setPokemons([])}
    }, []);
    
    useEffect(() => {
    if (pokedex.length > 0) { 
          localStorage.setItem("pokedex", JSON.stringify(pokedex))}
    }, [pokedex]);
  
    useEffect(() => {
      if (pokemons.length > 0) { 
            localStorage.setItem("pokemons", JSON.stringify(pokemons))}
      }, [pokemons]);
    
  const addPokemon =(pokemon)=>{
    const pokemonExist = pokedex.find((poke)=>pokemon.data.id === poke.data.id)
    if (!pokemonExist){setPokedex([...pokedex, pokemon]);}
    setPokemons(pokemons.filter((poke)=> poke!==pokemon))
    if(pokemons.length===1){localStorage.removeItem("pokemons")}};
  
  const removePokemon =(pokemon)=>{
    const pokemonExist = pokemons.find(
        (poke)=>pokemon.data.id === poke.data.id)
    if (!pokemonExist) {
        setPokemons([...pokemons,pokemon])
    }
    setPokedex(pokedex.filter((poke) => poke !== pokemon));
    if(pokedex.length===1){
        localStorage.removeItem("pokedex")
    }
  }

  useEffect(()=>{
    const pok = JSON.parse(localStorage.getItem("pokemons"));
    const poked = JSON.parse(localStorage.getItem("pokedex"));
    if (pok || poked){setPokemons(JSON.parse(localStorage.getItem("pokemons")))}
    else{ListPokemons()}
    pokemons.map((poke)=> {const z = poke.data.id; console.log(poke.data.id.toString())} ) 
}, [])

const ListPokemons = ()=>{
    let urls = []
    for (let i = 1; i <= 20;i++) {
        urls.push(`${BASE_URL}/${i}/`);
    }
        axios.all(urls.map((url)=> axios.get(url)))
        .then((resposta) => {
            setPokemons(resposta)}
            )
        .catch((e)=>{
            console.log(e.response)})
    }

    const buttonAdd = add
    const buttonRemove = remove
    
    const context = {
    pokemons,
    pokedex,
    removePokemon,
    addPokemon,
    buttonAdd,
    buttonRemove
    };
    
    return (
    <GlobalContext.Provider value={context}>
    {props.children}
    </GlobalContext.Provider>
    )}

export default GlobalState;
    