import { Button } from "../Styles/buttons.styles";
import { TextWithButtonCard, Text, P, SpanPrice } from "../Styles/TextWithButtonCard.styles"

function OnlinePaymentCard() {
    return (
        <TextWithButtonCard>
            <Text>
            <h2>Pagamento On-line</h2>
            <span>Pagamento On-line</span>
            <P>
            Aceite Pix e Cartão de Crédito <br />
            Antecipação Pix automática <br />
            Não dependa de maquininha de cartão <br />
            Segurança para receber pedidos <br />
            Agilidade para entregar <br />
            </P>
            <SpanPrice>2,99% por transação</SpanPrice>
            </Text>
            <Button type="button">
                Saiba mais
            </Button>
        </TextWithButtonCard>
    )
}

export default OnlinePaymentCard;