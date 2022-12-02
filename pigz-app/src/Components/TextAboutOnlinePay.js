import handWithCard from "../images/mobile.png"
import { DivText, Img, P, H1 } from "../Styles/SupportContent"

function TextAboutOnlinePay() {
    return (
        <main>
            <H1>Pagamento on-line</H1>
            <DivText>
                <P>
                    Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.
                </P>
                <Img src={handWithCard} alt="" />
            </DivText>
        </main>
    )
}

export default TextAboutOnlinePay;