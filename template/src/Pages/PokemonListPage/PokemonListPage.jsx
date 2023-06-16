import { useNavigate } from "react-router-dom";
import { Section } from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import buttonPokedex from "../../Assets/botões/pokedex.png"
import { useState,useEffect } from "react";
import axios from "axios";

export const PokedexListPage =({addPokemon})=>{
    const navigate = useNavigate();
    const[pokemons,setPokemons]=useState([])

useEffect(()=>{
        ListPokemons()
    }, [])

    const ListPokemons = ()=>{
        let urls = []
        for (let i = 1; i <= 20;i++) {
            urls.push(`https://pokeapi.co/api/v2/pokemon-form/${i}/`);
        }
            axios.all(urls.map((url)=> axios.get(url)))
            .then((resposta) => {
                setPokemons(resposta)})
            .catch((e)=>{
                console.log(e.response)})
        }

    const buttonRemove = {text:"Capturar!", color: "white"}

    return(
        <>
        <Header/>
        <Section>
            <button onClick={() => goToPokedexPage(navigate)}><img src={buttonPokedex}/></button>
            {pokemons.map((pokemon,indice)=>{
            return <PokemonCard 
            key={indice}
            pokemon={pokemon}
            type={pokemon.data.types[0].type.name}
            addOrRemovePokemon={addPokemon}
            button={buttonRemove} 
            imagem={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${indice+1}.png`}
            />}
            )}
        </Section>
        </>
    )
}