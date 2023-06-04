import {styled} from "styled-components";

export const Section = styled.section `
   background-color: gray;
   flex-wrap: wrap;
   display: grid;
   grid-template-columns: 3fr 8fr 1fr 8fr 1fr 12fr 2fr; 
   grid-template-rows: 1fr 1fr 1fr 3fr 1fr 5fr;
   height: 100vh;

   div{
      margin: 10px;
      display: flex;
      background-color: white;
   }
   .z{
      background-color: transparent;
      position: absolute;
      top: 10px;
      width: 100%;
      justify-content: space-between;
   }
   .a{
      grid-column: 2/3;
      grid-row: 2/5;
      align-items: center;
      justify-content: center;
   }
   .b{
      grid-column: 2/3;
      grid-row: 6/7;
      align-items: center;
      justify-content: center;
   }
   .c{
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
      grid-column: 6/7;
      grid-row: 2/3;
      p{padding-left: 15%;}
   }
   .e{
      grid-column: 6/7;
      grid-row: 4/7;
      flex-direction: column;
   }
`