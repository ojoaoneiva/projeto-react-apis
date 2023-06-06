import { Section } from './PokemonDetailPageStyle'
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Components/router/Coordinator";
import { useParams } from "react-router-dom";
import { Header } from '../../Components/Header/Header';

export const PokedexDetailPage =({pokemonName})=>{
    const navigate = useNavigate();
    const pathParams = useParams();

    return(
        <>
        <Header/>
        <Section>
            <p>PokedexDetailPage {pathParams.pokemonName}</p>
            <div className='z'>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button>Adicionar/remover da pokedex</button>
            </div>
            <div className='a'>
                <p>Imagem frontal</p>
            </div>
            <div className='b'>
                <p>Imagem de costas</p>
            </div>
            <div className='c'>
                <p>Stats</p>
                <p>HP: 46</p>
                <p>attack: 39</p>
                <p>defense: 52</p>
                <p>special-attack: 43</p>
                <p>special-defense: 54</p>
                <p>speed: 54</p>
            </div>
            <div className='d'>
                <p>type1</p> 
                <p>type2</p>
            </div>
            <div className='e'>Moves
                <p>move name 1</p>
                <p>move name 2</p>
                <p>move name 3</p>
            </div>
        </Section>
        </>
    )
}