import { Button } from "../Styles/buttons.styles";
import { TextWithButtonCard, Text, Ul, SpanPrice } from "../Styles/TextWithButtonCard.styles"

function OnlinePaymentCard() {
    return (
        <TextWithButtonCard>
            <Text>
            <h2>Pagamento On-line</h2>
            <span>Pagamento On-line</span>
            <Ul>
                <li>Aceite Pix e Cartão de Crédito</li>
                <li>Antecipação Pix automática</li>
                <li>Não dependa de maquininha de cartão</li>
                <li>Segurança para receber pedidos</li>
                <li>Agilidade para entregar</li>
            </Ul>
            <SpanPrice>2,99% por transação</SpanPrice>
            </Text>
            <Button type="button">
                Saiba mais
            </Button>
        </TextWithButtonCard>
    )
}

export default OnlinePaymentCard;