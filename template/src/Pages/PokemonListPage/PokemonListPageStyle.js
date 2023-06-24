import {styled} from "styled-components";

export const Section = styled.section `
   background-color: gray;
   flex-wrap: wrap;
   display: flex;
   justify-content: center;
   height: fit-content;
   padding-top: 100px;
   div:hover{
    scale: 1.03;
}
   button:first-child{
      position: absolute;
      top: 10px;
      right: 0;
      margin: 10px;
      border: 0;
      scale: 0.7;
   }
`
export const H1 = styled.h1 `
      position: absolute;
      top:150px;
      left: 100px;
      color: white;
`