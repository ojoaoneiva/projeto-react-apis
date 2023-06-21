import { useNavigate } from "react-router-dom";
import { Section } from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import buttonPokedex from "../../Assets/headerButtons/pokedex.png"
import {BASE_URL_IMAGE} from "../../constants/imageUrl";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const PokedexListPage =()=>{
    const navigate = useNavigate();
    const context = useContext(GlobalContext);
    const {addPokemon,pokemons, buttonAdd} = context;

    return(
        <>
        <Header/>
        <Section>
            <button onClick={() => goToPokedexPage(navigate)}><img src={buttonPokedex}/></button>
            {pokemons
            .sort((a,b)=>{return a.data.id > b.data.id ? 1 : -1})
            .map((pokemon,indice)=>{
            return <PokemonCard 
            key={indice}
            pokemon={pokemon}
            pokemons={pokemons}
            type={pokemon.data.types[0].type.name}
            addOrRemovePokemon={addPokemon}
            button={buttonAdd} 
            imagem={`${BASE_URL_IMAGE}/other/official-artwork/${pokemon.data.id}.png`}
            />}
            )}
        </Section>
        </>
    )
}