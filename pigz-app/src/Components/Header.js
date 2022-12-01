import logo from "../images/Pigz-Gestão-Logo.svg"
import { HeaderDiv } from "../Styles/global.styles";
import { ButtonHeader } from "../Styles/buttons.styles"

function Header() {
    return (
        <HeaderDiv>
            <img src={logo} alt="logo-pigz"/>
            < ButtonHeader type="button">
                Já sou paceiro
            </ ButtonHeader>
        </HeaderDiv>
    )
}

export default Header;