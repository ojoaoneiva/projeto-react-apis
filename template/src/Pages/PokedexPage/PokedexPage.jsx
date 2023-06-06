import { useNavigate } from "react-router-dom";
import { Section, H1 } from './PokedexPageStyle'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexListPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import { pokemons } from "../../Assets/pokemonList";

export const PokedexPage =({removePokemon,pokedex,pokemon})=>{
    const navigate = useNavigate();
    const buttonAdd = {text:"Excluir", color: "red"}

    return(
        <>
        <Header/>
        <Section>
            <button onClick={() => goToPokedexListPage(navigate)}>Todos Pokémons</button>
            <H1>Meus pokémons</H1>
            {pokedex.map((pokemon,indice)=>{return <PokemonCard key={indice} pokemon={pokemon} pokemonName={pokemon.name} addOrRemovePokemon={removePokemon} button={buttonAdd}/>})}
        </Section>
        </>
    )
}