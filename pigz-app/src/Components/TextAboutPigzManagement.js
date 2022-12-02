import aGuyOnAMotorcycle from "../images/Grupo de máscara 2420.png"
import { DivText, Img, P, H1 } from "../Styles/SupportContent"

function TextAboutPigzManagement() {
    return (
        <main>
            <H1>Pigz Gestão</H1>
            <DivText>
                <P>
                    Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.
                </P>
                <Img src={aGuyOnAMotorcycle} alt="" />
            </DivText>
        </main>
    )
}

export default TextAboutPigzManagement;