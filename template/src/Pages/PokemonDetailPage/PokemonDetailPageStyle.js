import {styled} from "styled-components";

export const Loading = styled.div `
background-color: #5E5E5E;
width: 100vw;
height: 100%;
display: flex;
justify-content: center;
position: absolute;
padding-top: 100px;
img{
   width: 500px;
   height: fit-content;
}
`

export const Section = styled.section `
background-color: #5E5E5E;
height: 100%;
display: flex;
justify-content: center;
.logo{
   position: absolute;
   top: 90px;
   left: 17vw;
   justify-content: center;
   overflow: hidden;
   opacity: 30%;
}
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
      display: flex;
      align-items: center;
      gap: 10px;
   }
   button:nth-child(2){
      position: absolute;
      top: 10px;
      right: 0;
      margin: 10px;
      border: 0;
      scale: 0.7;
   }
`
export const Details = styled.div `
   flex-wrap: wrap;
   display: grid;
   grid-template-columns: 1.5fr 8fr 1fr 8fr 2fr 7fr 8fr; 
   grid-template-rows: 1px 1fr 1fr 3fr 1fr 5fr;
   margin-top: 180px;
   height: 700px;
   min-width: 90vw;
   h1:first-child{
      grid-column: 2/3;
      margin-top: -600px;
      color: white;
      font-size: 40px;
   }
   div{
      display: flex;
   }
   .z{
      background-color: transparent;
      position: absolute;
      top: 10px;
      width: 100%;
      justify-content: space-between;
   }
   
   .baseStats{
      background-color: white;
      z-index: 10;
      border-radius: 10px;
      padding: 10%;
      gap: 5px;
      grid-column: 4/5;
      grid-row: 2/7;
      flex-direction: column;
      align-items: stretch;
      font-weight: 500;
      h3:first-child{
         margin-bottom: 20px;
      }
      p:first-child{
         color: gray;
      }
      div{
         gap:10px;
      }
   }
   .Moves{
      background-color: white;
      z-index: 10;
      border-radius: 10px;
      padding: 10% 10% 50px 10%;
      gap: 10px;
      grid-column: 6/7;
      grid-row: 4/7;
      flex-direction: column;
      p{
         background-color: #ECECEC;
         width: fit-content;
         border: 1px dashed rgba(0, 0, 0, 0.14);
         border-radius: 12px;
         padding: 5px;
      }
   }
   .pokemon{
   z-index: 10;
   grid-column: 7/8;
   /* grid-row: 6/7; */
   position: relative;
   bottom: 40rem;
    /* position: relative;
    bottom: 30rem;
    left: 55rem; */
    /* margin-top: -30rem; */
    /* margin-left: 65rem; */
    /* margin-right: -80rem; */
    width: 13rem;
}
`
export const Images = styled.div `
   grid-column: 2/3;
   grid-row: 2/7;
   display: flex;
   flex-direction: column;
   gap: 20px;
.a{
      background-color: white;
      z-index: 10;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-grow: 1;
      img{
         width: 80%;
      }
   }
   .b{
      background-color: white;
      z-index: 10;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-grow: 1;
      img{
         width: 80%;
      }
   }
`

export const Name = styled.div `
      z-index: 10;
      grid-column: 6/7;
      grid-row: 2/3;
      display: flex;
      gap:10px;
      flex-direction: column;
      p{padding-left: 15%;}
   h1{
    font-size: 2.2rem;
}
.name{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   }
   .features{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    img{ height: 1.8rem; } 
   }
`

export const Div = styled.div `
background-color: ${(props) => props.color};
z-index: 5;
grid-column: 1/8;
grid-row: 1/8;
margin: -2% 2%;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: end;
flex-wrap: wrap;
img{
   overflow: hidden;
}

`