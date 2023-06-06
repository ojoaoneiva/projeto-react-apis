import { useNavigate } from "react-router-dom";
import { Section, H1} from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import { pokemons } from "../../Assets/pokemonList";
import buttonPokedex from "../../Assets/botões/pokedex.png"

export const PokedexListPage =({addPokemon,pokemon})=>{
    const navigate = useNavigate();
    const buttonRemove = {text:"Capturar!", color: "white"}

    return(
        <>
        <Header/>
        <Section>
                <button onClick={() => goToPokedexPage(navigate)}><img src={buttonPokedex}/></button>
            <H1>PokedexListPage</H1>
            {pokemons.map((pokemon,indice)=>{return <PokemonCard key={indice} pokemon={pokemon} pokemonName={pokemon.name} addOrRemovePokemon={addPokemon} button={buttonRemove}/>})}
        </Section>
        </>
    )
}