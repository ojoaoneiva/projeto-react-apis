import { useNavigate } from "react-router-dom";
import { Section } from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import { pokemons } from "../../Assets/pokemonList";

export const PokedexListPage =({addPokemon,pokemon})=>{
    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <Section>
                <button onClick={() => goToPokedexPage(navigate)}>ver minha POKEDEX</button>
            PokedexListPage
            {pokemons.map((pokemon,indice)=>{return <PokemonCard key={indice} pokemon={pokemon.name} id={pokemon.id} addPokemon={addPokemon}/>})}
        </Section>
        </>
    )
}