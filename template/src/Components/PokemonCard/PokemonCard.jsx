import { useNavigate } from "react-router-dom";
import { Div } from './PokemonCardStyle'
import { goToPokedexDetailPage } from "../router/Coordinator";
import { useState, useEffect } from "react";
import { types, colors } from "../../Assets/pokemonList";

export const PokemonCard = ({ addOrRemovePokemon, pokemon, button, imagem, type, pokemons, pokedex }) => {
    const navigate = useNavigate();
    const [color, setColor] = useState("")
    const [typeIcon, setTypeIcon] = useState("")
    const [powerIcon, setPowerIcon] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState(0)

    useEffect(() => {
        typesIcon()
    }, [pokemons, pokedex])

    const typesIcon = () => {
        setTypeIcon(types[type])
        setColor(colors[type])
        if (pokemon.data.types.length > 1) {
            setPowerIcon(types[pokemon.data.types[1].type.name])
        }
        setName(pokemon.data.name[0].toUpperCase()
            + pokemon.data.name.slice(1, pokemon.data.name.length))
        setId(`#0${pokemon.data.id}`)
    }

    return (
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
            <button className="detalhes"
                onClick={() => goToPokedexDetailPage(navigate, pokemon.data.name)}>Detalhes</button>
            <button onClick={() => addOrRemovePokemon(pokemon)} ><img src={button} /></button>
        </Div>
    )
}