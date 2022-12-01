import { Button } from "../Styles/buttons.styles";
import { TextWithButtonCard, Text, Ul, SpanPrice } from "../Styles/TextWithButtonCard.styles"

function PigzListCard() {
    return (
        <TextWithButtonCard>
            <Text>
            <h2>Pigz</h2>
            <span>Tudo o que você precisa</span>
            <Ul>
                <li>Pigz Marketplace</li>
                <li>Página exclusiva</li>
                <li>Pigz Gestão Desktop e Mobile</li>
                <li>Gestão de entregadores</li>
                <li>Vias de impressão personalizáveis</li>
            </Ul>
            <SpanPrice>R$199/mês</SpanPrice>
            </Text>
            <Button type="Button">
                Vender no Pigz agora
            </Button>
        </TextWithButtonCard>
    )
}

export default PigzListCard;
    