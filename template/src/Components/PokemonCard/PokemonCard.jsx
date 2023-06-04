import { Div } from './PokemonCardStyle'

export const PokemonCard=({changeScreen})=>{
    const showDetailPage = () => { changeScreen("DetailPage")}
    return(
        <Div>
            <p>POKE CARD</p>
            <button>adicionar</button>
            <button onClick={showDetailPage}>ver detal.</button>
        </Div>
    )
}