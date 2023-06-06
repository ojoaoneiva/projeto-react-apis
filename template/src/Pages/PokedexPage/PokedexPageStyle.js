import {styled} from "styled-components";

export const Section = styled.section `
   background-color: gray;
   flex-wrap: wrap;
   display: flex;
   justify-content: center;
   height: 100vh;
   padding-top: 150px;
   
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
`
export const H1 = styled.h1 `
      position: absolute;
      top:150px;
      left: 100px;
      color: white;
      font-size: 3rem;
`