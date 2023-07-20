import { styled } from "styled-components";

export const Div = styled.div`
background-color: ${(props) => props.color};
width: 400px;
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
    color: #FFFFFF;
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
.detalhes{
width: 74px;
height: 24px;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
border: 0;
background-color: transparent;
color: white;
}
button:last-child{
display: flex;
border-radius: 8px;
border: 0;
position: absolute;
margin-top: 8rem;
margin-left: 13rem;
}
`