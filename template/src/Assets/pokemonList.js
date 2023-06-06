import img1 from "./imgs/1.png"
import img2 from "./imgs/2.png"
import img3 from "./imgs/3.png"
import img4 from "./imgs/4.png"
import water from "./tipos/water.png"
import fire from "./tipos/fire.png"
import grass from "./tipos/grass.png"
import normal from "./tipos/normal.png"
import poison from "./tipos/poison.png"
import flying from "./tipos/flying.png"

export const pokemons = [
    {id:"#01",
    name: "Bulbasaur",
    type: grass,
    power: poison,
    color: "#729F92",
    img: img1},
    {id:"#06",
    name: "Charizard",
    type: fire,
    power: flying,
    color: "#EAAB7D",
    img: img2},
    {id:"#07",
    name: "Squirtle",
    type: water,
    color: "#71C3FF",
    img: img3},
    {id:4,
    name: "pikachu4",
    type: normal,
    color: "#BF9762",
    img: img4},
]