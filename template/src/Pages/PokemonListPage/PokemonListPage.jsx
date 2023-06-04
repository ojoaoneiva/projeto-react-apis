import { Section } from './PokemonListPageStyle'
import {PokemonCard} from '../../Components/PokemonCard/PokemonCard';

export const PokedexListPage =({changeScreen})=>{
    const showPokedex = () => { changeScreen("Pokedex")}

    return(
        <Section>
                <button onClick={showPokedex}>ver minha POKEDEX</button>
            PokedexListPage
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
            <PokemonCard changeScreen={changeScreen}/>
        </Section>
    )
}