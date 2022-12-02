import { TextContent, H1Box, H1Text, P, TextAndLogo, Img } from "../Styles/RegistrationContent.styles"
import hamburguer from "../images/burguer_2.png"

function RegistrationTextCard() {
    return (
        <TextContent>
            <TextAndLogo>
                <H1Box>
                    <H1Text>
                        Pigz: tudo que <br />
                        você precisa  <br />
                        pra vender  <br />
                        ainda mais!
                    </H1Text>
                </H1Box>
                <Img src={ hamburguer } alt='logo' />
            </TextAndLogo>
            <P>
                Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </P>
        </TextContent>
    )
}

export default RegistrationTextCard;