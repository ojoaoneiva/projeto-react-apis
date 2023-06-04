import { HeaderStyle } from './HeaderStyled'
import logo from '../../Assets/image1.png'

export const Header =()=>{
    return(
        <HeaderStyle>
            <img src={logo}/>
        </HeaderStyle>
    )
}