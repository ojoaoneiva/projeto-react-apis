import { useNavigate } from "react-router-dom";
import { Section, H1 } from './PokedexPageStyle'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';
import { goToPokedexListPage } from "../../Components/router/Coordinator";
import { Header } from '../../Components/Header/Header';
import {BASE_URL_IMAGE} from "../../constants/imageUrl";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const PokedexPage =()=>{
    const navigate = useNavigate();
    const context = useContext(GlobalContext);
    const {removePokemon,pokedex,buttonRemove} = context;

    return(
        <>
        <Header/>
        <Section>
            <button onClick={() => goToPokedexListPage(navigate)}>Todos Pokémons</button>
            <H1>Meus pokémons</H1>
            {pokedex
            .sort((a,b)=>{return a.data.id > b.data.id ? 1 : -1})
            .map((pokemon,indice)=>{
                return <PokemonCard 
                key={indice}
                pokemon={pokemon}
                pokedex={pokedex}
                type={pokemon.data.types[0].type.name}
                addOrRemovePokemon={removePokemon}
                imagem={`${BASE_URL_IMAGE}/other/official-artwork/${pokemon.data.id}.png`}
                button={buttonRemove}/>})}
        </Section>
        </>
    )
}