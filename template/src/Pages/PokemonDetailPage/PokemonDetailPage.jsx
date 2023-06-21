import axios from "axios";
import { Section, Div, Details, Name, Images} from './PokemonDetailPageStyle'
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Components/router/Coordinator";
import { useParams } from "react-router-dom";
import { Header } from '../../Components/Header/Header';
import { useState,useEffect } from "react";
import {BASE_URL_IMAGE} from "../../constants/imageUrl";
import { types, colors, pokemons0 } from "../../Assets/pokemonList";
import remove from "../../Assets/headerButtons/excluir.png"
import add from "../../Assets/headerButtons/pokedex.png"
import { DetailStats } from "./DetailStats";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


export const PokedexDetailPage =({pokemonName})=>{
    const[imagemFront,setImagemFront]=useState("")
    const[imagemBack,setImagemBack]=useState("")
    const[imagem,setImagem]=useState("")
    const[typeIcon,setTypeIcon]=useState("")
    const[color,setColor]=useState("")
    const[powerIcon,setPowerIcon]=useState("")
    const[stats,setStats]=useState([])
    const[allmoves,setallMoves]=useState([])
    const[moves,setMoves]=useState([])
    const[total,setTotal]=useState(0)
    const[id,setId]=useState(0)
    const[buttonAddorRemove,setButtonAddorRemove]=useState("")
    const navigate = useNavigate();
    const pathParams = useParams();
    const name = pathParams.pokemonName
    const[capitalName,setCapitalName]=useState(name)
    const context = useContext(GlobalContext);
    const {pokedex,removePokemon,addPokemon,} = context;

    useEffect(() => { 
        getType()
        getPokemonsImages()
        getMoves()
        getStats()
        getButtonHeader()
    }, [])

    useEffect(() => { 
        getTotal()
    }, [stats])

    useEffect(() => { 
        getMoves()
    }, [allmoves])

    const getButtonHeader =()=>{
        const pokemonInPokedex = pokedex.find((pokemon)=>pokemon.data.name===name);
        if(pokemonInPokedex){
            setButtonAddorRemove({image:remove})
        }
        else{
            setButtonAddorRemove({image:add})
        }
    }

    const getStats = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((resposta) => {
            setStats(resposta.data.stats)
            setallMoves(resposta.data.moves)
            if(resposta.data.id<10){
                setId(`#0${resposta.data.id}`)
            }
            else{
                setId(`#${resposta.data.id}`)
            }
        }).catch((erro) => { 
            console.log(erro.response)
        })}

    const getMoves = () => {
            const newMoves = allmoves.slice(0,4)
            setMoves(newMoves)}

    const getTotal =()=>{
        let sum = 0
        for (let i of stats){
            sum +=i.base_stat
            setTotal(sum)
        }
    }

    const getType = () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${name}/`)
        .then((resposta) => {
            setCapitalName(resposta.data.name[0].toUpperCase()
            +resposta.data.name.slice(1,resposta.data.name.length))
            setColor(colors[resposta.data.types[0].type.name])
            setTypeIcon(types[resposta.data.types[0].type.name])
            setPowerIcon(types[resposta.data.types[1].type.name])
        }).catch((erro) => { 
            console.log(erro.response)
        })}

    const getPokemonsImages = () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${name}/`)
        .then((resposta) => {
            const id = resposta.data.id
            setImagemFront(`${BASE_URL_IMAGE}/${id}.png`)
            setImagemBack(`${BASE_URL_IMAGE}/back/${id}.png`)
            setImagem(`${BASE_URL_IMAGE}/other/official-artwork/${id}.png`)
        }).catch((erro) => { 
            console.log(erro.response)
        })}

    return(
        <>
        <Header/>
        <Section>
            <div className='z'>
                <button onClick={() => goBack(navigate)}>Todos Pokémons</button>
                <button><img src={buttonAddorRemove.image}/></button>
            </div>        
            <Details>
            <h1>Detalhes</h1>
            <Images>
            <div className='a' >
                <img src={imagemFront} alt="a" />
            </div>
            <div className='b'>
                <img src={imagemBack} alt="a" />
            </div>
            </Images>
            <div className='baseStats'>
                <h3>Base stats</h3>
                {stats.map((stat,indice)=>
                <DetailStats key={indice} stat={stat.stat.name} number={stat.base_stat}/>)}
                <p>Total: {total}</p>
            </div>
            <Name>
            <div className="name">
                <h3>{id}</h3>
                <h1>{capitalName}</h1>
            </div>    
            <div className="features">
                <img src={powerIcon} />
                <img src={typeIcon} />
            </div>
            </Name>
            <div className='Moves'>
                <h3>Moves</h3>
            {moves.map((move,indice)=><p key={indice}>{move.move.name}</p>)}
            </div>
            <img className="pokemon" src={imagem} />
            <Div color={color}>
            </Div>
            </Details>
        </Section>
        </>
    )
}