import logo from "../images/Pigz-Gestão-Logo.svg"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo-pigz"/>
            <button type="button">
                Já sou paceiro
            </button>
        </header>
    )
}

export default Header;