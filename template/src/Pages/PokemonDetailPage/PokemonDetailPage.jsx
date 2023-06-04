import { Section } from './PokemonDetailPageStyle'
export const PokedexDetailPage =({changeScreen})=>{
    const showPokedex = () => { changeScreen("Pokedex")}
    return(
        <Section>
            <p>PokedexDetailPage</p>
            <div className='z'>
                <button onClick={showPokedex}>Voltar</button>
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
    )
}