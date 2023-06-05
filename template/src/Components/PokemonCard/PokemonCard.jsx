import { useNavigate } from "react-router-dom";
import { Div } from './PokemonCardStyle'
import { goToPokedexDetailPage } from "../router/Coordinator";

export const PokemonCard=({addPokemon,pokemon})=>{
    const navigate = useNavigate();

    return(
        <Div>
            <p>{pokemon}</p>
            <button onClick={()=>addPokemon(pokemon)}>adicionar</button>
            <button onClick={() => goToPokedexDetailPage(navigate,pokemon)}>ver detal.</button>
        </Div>
    )
}