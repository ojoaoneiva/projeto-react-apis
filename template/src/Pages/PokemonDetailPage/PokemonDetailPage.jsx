import axios from "axios";
import { Section, Div, Details, Name, Images, Loading, Erro} from './PokemonDetailPageStyle'
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Components/router/Coordinator";
import { useParams } from "react-router-dom";
import { Header } from '../../Components/Header/Header';
import { useState,useEffect } from "react";
import {BASE_URL_IMAGE} from "../../constants/imageUrl";
import { types, colors, pokemons0 } from "../../Assets/pokemonList";
import remove from "../../Assets/headerButtons/excluir.png"
import add from "../../Assets/headerButtons/caputurar.png"
import { DetailStats } from "./DetailStats";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import vetor from "../../Assets/headerButtons/vector.png"
import logo from "../../Assets/cardBackground/cardBackground.png"
import loading from "../../Assets/alerts/b5f28ae81ce69ccf4f2328c38e0d3e34.gif"

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
    const[isLoading, setIsLoading] = useState(false);
    const[buttonAddorRemove,setButtonAddorRemove]=useState("")
    const navigate = useNavigate();
    const pathParams = useParams();
    const name = pathParams.pokemonName
    const[capitalName,setCapitalName]=useState(name)
    const context = useContext(GlobalContext);
    const {pokedex,removePokemon,addPokemon,pokemons} = context;

    useEffect(() => {
        setIsLoading(true)
        getType()
        getStats()
        getButtonHeader()
        getPokemonsImages()
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

    const removePoke =()=>{
        const pokemonInPokedex = pokedex.find((pokemon)=>pokemon.data.name===name);
        const pokemonInList = pokemons.find((pokemon)=>pokemon.data.name===name);
        if(pokemonInPokedex){
            removePokemon(pokemonInPokedex);
            setButtonAddorRemove({image:add})
        }
        else{
            addPokemon(pokemonInList)
            setButtonAddorRemove({image:remove})
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
            setIsLoading(isLoading+1)
        })}

    const getMoves = () => {
            const newMoves = allmoves.slice(0,4)
            setMoves(newMoves)
        }

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
            console.log(resposta.data.types[0].type.name)
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
            setIsLoading(false)
        }).catch((erro) => { 
            console.log(erro.response)
        })}

    return(
        <>
        <Header/>
        {isLoading ? <Loading><img src={loading}/></Loading> : <p></p>}
        <Section>
            <img className='logo' src={logo}/>
            <div className='z'>
                <button onClick={() => goBack(navigate)}><img src={vetor}/>Todos Pokémons</button>
                <button onClick={()=>removePoke()}><img src={buttonAddorRemove.image}/></button>
            </div>        
            {!isLoading &&
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
                <div><p>Total:</p><p>{total}</p></div>
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
                <h3>Moves:</h3>
            {moves.map((move,indice)=><p key={indice}>{move.move.name}</p>)}
            </div>
            <img className="pokemon" src={imagem} />
            <Div color={color}>
            <img src={logo}/>
            </Div>
            </Details>}
        </Section>
        </>
    )
}