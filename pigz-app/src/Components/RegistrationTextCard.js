import { TextContent, MainH1, P, TextAndLogo, Img } from "../Styles/RegistrationContent.styles"
import hamburguer from "../images/burguer_2.png"

function RegistrationTextCard() {
    return (
        <TextContent>
            <TextAndLogo>
                <MainH1>
                    <h1>Pigz: tudo que você precisa pra vender ainda mais!</h1>
                </MainH1>
                <Img src={hamburguer} alt='' />
            </TextAndLogo>
            <P>
                Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </P>
        </TextContent>
    )
}

export default RegistrationTextCard;