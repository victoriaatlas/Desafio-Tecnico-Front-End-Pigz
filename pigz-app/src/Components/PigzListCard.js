import { Button } from "../Styles/buttons.styles";
import { TextWithButtonCard, Text, P, SpanPrice } from "../Styles/TextWithButtonCard.styles"

function PigzListCard() {
    return (
        <TextWithButtonCard>
            <Text>
            <h2>Pigz</h2>
            <span>Tudo o que você precisa</span>
            <P>
                Pigz Marketplace<br/>
                Página exclusiva<br/>
                Pigz Gestão Desktop e Mobile<br/>
                Gestão de entregadores <br/>
                Vias de impressão personalizáveis<br/>
            </P>
            <SpanPrice>R$199/mês</SpanPrice>
            </Text>
            <Button type="Button">
                Vender no Pigz agora
            </Button>
        </TextWithButtonCard>
    )
}

export default PigzListCard;
    