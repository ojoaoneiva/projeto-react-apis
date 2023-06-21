import {styled} from "styled-components";

export const Style = styled.div `
gap: 10px;
display: flex;
font-weight: 500;
align-items: center;
border-top: 1px solid #E7E7E7;
p:first-child{
    color: gray;
    display: flex;
}
.bar{
    background-color: ${(props) => props.colorBar};
    width: ${(props) => props.size}px;
    height: 10px;
    border: 0.05px solid gray;
    border-radius: 3px;
    grid-column: 3/4;
}
`