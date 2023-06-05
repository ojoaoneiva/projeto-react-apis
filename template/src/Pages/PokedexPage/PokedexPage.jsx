import { useNavigate } from "react-router-dom";
import { Section } from './PokedexPageStyle'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexListPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import { pokemons } from "../../Assets/pokemonList";

export const PokedexPage =({pokedex,pokemon})=>{
    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <Section>
            <button onClick={() => goToPokedexListPage(navigate)}>Voltar para lista de pokemons</button>
            Pokedex
            {pokedex.map((pokemon,indice)=>{return <PokemonCard key={indice} pokemon={pokemon} id={pokemon.id}/>})}
        </Section>
        </>
    )
}