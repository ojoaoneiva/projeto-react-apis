import { useNavigate } from "react-router-dom";
import { Div } from './PokemonCardStyle'
import { goToPokedexDetailPage } from "../router/Coordinator";

export const PokemonCard=({addOrRemovePokemon,pokemon,pokemonName,button})=>{
    const navigate = useNavigate();

    return(
        <Div color={pokemon.color} colorbutton={button.color}>
            <img className="pokemon" src={pokemon.img} />
            <div className="name">
                <h3>{pokemon.id}</h3>
                <h1>{pokemon.name}</h1>
            </div>
            <div className="features">
                <img src={pokemon.type} />
                <img src={pokemon.power} />                
            </div>
            <button className="detalhes" onClick={() => goToPokedexDetailPage(navigate,pokemonName)}>Detalhes</button>
            <button onClick={()=>addOrRemovePokemon(pokemon)} >{button.text}</button>
        </Div>
    )
}