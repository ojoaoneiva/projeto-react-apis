import axios from "axios";
import { Section, Div } from './PokemonDetailPageStyle'
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Components/router/Coordinator";
import { useParams } from "react-router-dom";
import { Header } from '../../Components/Header/Header';
import { useState,useEffect } from "react";
import { types } from "../../Assets/pokemonList";
import buttonRemove from "../../Assets/botões/excluir.png"


export const PokedexDetailPage =({pokemonName,id})=>{
    const[imagemFront,setImagemFront]=useState("")
    const[imagemBack,setImagemBack]=useState("")
    const[imagem,setImagem]=useState("")
    const[type,setType]=useState("")
    const[typeIcon,setTypeIcon]=useState("")
    const[color,setColor]=useState("#729F92")
    const[powerIcon,setPowerIcon]=useState("")
    const navigate = useNavigate();
    const pathParams = useParams();
    const name = pathParams.pokemonName
    
    const getPokemons = () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${name}/`)
        .then((resposta) => {
            console.log(resposta.data.sprites)
            const id = resposta.data.id
            getPokemonInfo()
            setImagemFront(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
            setImagemBack(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`)
            setImagem(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
        }).catch((erro) => { 
            console.log(erro.response)
        })}

    const getPokemonInfo = () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${name}/`)
        .then((resposta) => { 
            console.log(resposta.data.types[0].type.name)
            setType(resposta.data.types[0].type.name)
            typesIcon()
            const power1 = resposta.data.types[1].type.name
            const power2 = types[power1]
            setPowerIcon(power2)
        }).catch((erro) => {
            console.log(erro.response)
        })}
    
    useEffect(() => { 
        getPokemons()
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
        <>
        <Header/>
        <Section>
            <p>PokedexDetailPage {pathParams.pokemonName}</p>
            <div className='z'>
                <button onClick={() => goBack(navigate)}>Todos Pokémons</button>
                <button><img src={buttonRemove}/></button>
            </div>
            <div className='a' >
                <img src={imagemFront} alt="a" />
            </div>
            <div className='b'>
            <img src={imagemBack} alt="a" />
            </div>
            <div className='c' color={color}>
                <p>Stats</p>
                <p>HP: 46</p>
                <p>attack: 39</p>
                <p>defense: 52</p>
                <p>special-attack: 43</p>
                <p>special-defense: 54</p>
                <p>speed: 54</p>
            </div>
            <div className='d'>
                <p>type1</p> 
                <p>type2</p>
            </div>
            <div className='e'>Moves
                <p>move name 1</p>
                <p>move name 2</p>
                <p>move name 3</p>
            </div>
            <Div color={color}> 
            <img className="pokemon" src={imagem} />
            <div className="name">
                <h3>{id}</h3>
                <h1>{name}</h1>
            </div>
            <div className="features">
            <img src={powerIcon} />
            <img src={typeIcon} />               
            </div>
            </Div>
        </Section>
        </>
    )
}