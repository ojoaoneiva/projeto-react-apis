import {styled} from "styled-components";

export const Section = styled.section `
   background-color: gray;
   flex-wrap: wrap;
   display: grid;
   grid-template-columns: 3fr 8fr 1fr 8fr 1fr 12fr 2fr; 
   grid-template-rows: 1fr 1fr 1fr 3fr 1fr 5fr;
   height: 100vh;
   button:first-child{
      position: absolute;
      top: 2rem;
      left: 2rem;
      margin: 10px;
      text-decoration: underline;
      border: 0;
      background-color: transparent;
      font-size: 1.3rem;
      font-weight: 800;
      color: #212121;
   }
   button:nth-child(2){
      position: absolute;
      top: 10px;
      right: 0;
      margin: 10px;
      border: 0;
      scale: 0.7;
   }
   
   div{
      margin: 10px;
      display: flex;
   }
   .z{
      background-color: transparent;
      position: absolute;
      top: 10px;
      width: 100%;
      justify-content: space-between;
   }
   .a{
      background-color: white;
      z-index: 10;
      grid-column: 2/3;
      grid-row: 2/5;
      align-items: center;
      justify-content: center;
   }
   .b{
      background-color: white;
      z-index: 10;
      grid-column: 2/3;
      grid-row: 6/7;
      align-items: center;
      justify-content: center;
   }
   .c{
      background-color: white;
      z-index: 10;
      padding: 10%;
      grid-column: 4/5;
      grid-row: 2/7;
      flex-direction: column;
      align-items: flex-start;
      :first-child{
         align-self: center;
      }
   }
   .d{
      background-color: white;
      z-index: 10;
      grid-column: 6/7;
      grid-row: 2/3;
      p{padding-left: 15%;}
   }
   .e{
      background-color: white;
      z-index: 10;
      grid-column: 6/7;
      grid-row: 4/7;
      flex-direction: column;
   }
`
export const Div = styled.div `
background-color: ${(props) => props.color};
z-index: 5;
position: absolute;
grid-template-columns: 2/5;
grid-template-rows: 1/4;
height: 210px;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 20px;
margin: 30px 10px;
flex-wrap: wrap;
.name{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
h1{
    font-size: 2.2rem;
    position: absolute;
    margin-top: 0.7rem;
}
.pokemon{
    position: absolute;
    margin-top: -5rem;
    margin-left: 11rem;
    width: 11rem;
}
.features{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    img{ height: 1.8rem; } 
}
`