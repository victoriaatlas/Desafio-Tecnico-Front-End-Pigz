import technologies from "../images/Grupo de máscara 2418.png"
import { DivText, Img, P, H1 } from "../Styles/SupportContent"

function TextAboutDelivery() {
    return (
        <main>
            <H1>Gestão de entregadores</H1>
            <DivText>
                <P>
                    A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.
                </P>
                <Img src={technologies} alt='' />
            </DivText>
        </main>
    )
}

export default TextAboutDelivery;