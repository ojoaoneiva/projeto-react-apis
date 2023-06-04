import { Section } from './PokedexPageStyle'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';

export const PokedexPage =({changeScreen})=>{
    const showListPage = () => { changeScreen("ListPage")}

    return(
        <Section>
            <button onClick={showListPage}>Voltar para lista de pokemons</button>
            Pokedex
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
        </Section>
    )
}