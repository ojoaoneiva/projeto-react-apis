import './App.css';
import {Header} from './Components/Header/Header';
import {PokedexPage} from './Pages/PokedexPage/PokedexPage';
import {PokedexListPage} from './Pages/PokemonListPage/PokemonListPage';
import {PokedexDetailPage} from './Pages/PokemonDetailPage/PokemonDetailPage';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState("ListPage");

  const changeScreen = (newScreen) => { setScreen(newScreen)}

const renderScreen = () => {
switch (screen) {

case "ListPage":
return ( <PokedexListPage changeScreen={changeScreen}/> );
case "Pokedex":  
return (<PokedexPage changeScreen={changeScreen}/>);
case "DetailPage":  
return (<PokedexDetailPage changeScreen={changeScreen}/>);
default:
return <p>Tela inválida</p>}}

  return (
    <div className="App">
      <Header/>
      {renderScreen()}
    </div>
  );
}

export default App;
