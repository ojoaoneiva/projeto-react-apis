import { useNavigate } from "react-router-dom";
import { Section, H1} from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
// import { pokemons } from "../../Assets/pokemonList";
import buttonPokedex from "../../Assets/botões/pokedex.png"
import { useState,useEffect } from "react";
import axios from "axios";
import useRequestData from "../../hooks/useResquestData"

export const PokedexListPage =({addPokemon,pokemon})=>{
    const navigate = useNavigate();
    const [pokemons, isLoading, error] = useRequestData (`https://pokeapi.co/api/v2/pokemon/`, [] )
    // const[pokemons,setPokemons]=useState([])
    

    // const getPokemons = () => {
    //     axios.get( `https://pokeapi.co/api/v2/pokemon/`)
    //     .then((resposta) => { 
    //         setPokemons(resposta.data.results)
    //     }).catch((erro) => { 
    //         console.log(erro.response)
    //     })}
    
    // useEffect(() => { 
    //     getPokemons()
    // }, [])

    const buttonRemove = {text:"Capturar!", color: "white"}

    return(
        <>
        <Header/>
        <Section>
                <button onClick={() => goToPokedexPage(navigate)}><img src={buttonPokedex}/></button>
            <H1>PokedexListPage</H1>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu algum erro</p>}
            {!isLoading && pokemons.map((pokemon,indice)=>{return <PokemonCard key={indice} indice={indice} pokemon={pokemon} pokemonName={pokemon.name} addOrRemovePokemon={addPokemon} button={buttonRemove}/>})}
        </Section>
        </>
    )
}