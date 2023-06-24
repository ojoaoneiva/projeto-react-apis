import './App.css';
import { Routess } from './Components/router/Router';
import {GlobalStyle} from './AppStyle'
import GlobalState from "./contexts/GlobalState";

function App() {

  return (
    <>
    <GlobalState>
      <GlobalStyle/>
      <Routess/>      
    </GlobalState>
    </>
  );
}

export default App;
