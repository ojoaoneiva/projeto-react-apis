import { useNavigate } from "react-router-dom";
import { Div } from './PokemonCardStyle'
import { goToPokedexDetailPage } from "../router/Coordinator";
import axios from "axios";
import { useState,useEffect } from "react";
import { types } from "../../Assets/pokemonList";
import { PokedexDetailPage } from "../../Pages/PokemonDetailPage/PokemonDetailPage";

export const PokemonCard=({addOrRemovePokemon,pokemon,pokemonName,button, indice})=>{
    const navigate = useNavigate();
    const[imagem,setImagem]=useState("")
    const[color,setColor]=useState("")
    const[type,setType]=useState("")
    const[typeIcon,setTypeIcon]=useState("")
    const[powerIcon,setPowerIcon]=useState("")
    indice += 1;

    const getPokemonInfo = () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${indice}/`)
        .then((resposta) => { 
            console.log(resposta.data.types[0].type.name)
            setType(resposta.data.types[0].type.name)
            typesIcon()
            const power1 = resposta.data.types[1].type.name
            const power2 = types[power1]
            setPowerIcon(power2)
            setImagem(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${indice}.png`)
        }).catch((erro) => {
            console.log(erro.response)
        })}

    useEffect(() => { 
        getPokemonInfo()
        typesIcon()
    }, [])

    const typesIcon =()=>{
        if (type==="bug") {setTypeIcon(types.bug);setColor("#729F92")}
        if (type==="dark") {setTypeIcon(types.dark)}
        if (type==="dragon") {setTypeIcon(types.dragon)}
        if (type==="eletric") {setTypeIcon(types.eletric)}
        if (type==="fairy") {setTypeIcon(types.fairy)}
        if (type==="fighting") {setTypeIcon(types.fighting)}
        if (type==="fire") {setTypeIcon(types.fire);setColor("#EAAB7D")}
        if (type==="flying") {setTypeIcon(types.flying)}
        if (type==="ghost") {setTypeIcon(types.ghost)}
        if (type==="grass") {setTypeIcon(types.grass);setColor("#729F92")}
        if (type==="ground") {setTypeIcon(types.ground)}
        if (type==="ice") {setTypeIcon(types.ice)}
        if (type==="normal") {setTypeIcon(types.normal);setColor("#BF9762")}
        if (type==="poison") {setTypeIcon(types.poison)}
        if (type==="pyschic") {setTypeIcon(types.pyschic)}
        if (type==="rock") {setTypeIcon(types.rock)}
        if (type==="steel") {setTypeIcon(types.steel)}
        if (type==="water") {setTypeIcon(types.water);setColor("#71C3FF")}
    }

    return(
        <Div color={color} colorbutton={button.color}>
            <img className="pokemon" src={imagem} />
            <div className="name">
                <h3>{pokemon.id}</h3>
                <h1>{pokemon.name}</h1>
            </div>
            <div className="features">
            <img src={powerIcon} />
            <img src={typeIcon} />               
            </div>
            <button className="detalhes" onClick={() => goToPokedexDetailPage(navigate,pokemonName)}>Detalhes</button>
            <button onClick={()=>addOrRemovePokemon(pokemon)} >{button.text}</button>
        </Div>
    )
}