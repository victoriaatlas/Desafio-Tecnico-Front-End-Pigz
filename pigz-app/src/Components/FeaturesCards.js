import marketplaceLogo from "../images/storefront_black_24dp.svg"
import appLogo from "../images/smartphone_black_24dp.svg"
import managementLogo from "../images/Grupo 3545.svg"
import paymentLogo from "../images/print_black_24dp.svg"

function FeaturesCards() {
    return(
        <section>
                <div>
                    <img src={marketplaceLogo} alt="" />
                    <h3>Marketplace</h3>
                    <spam>Pra sua loja vender mais</spam>
                </div>
                <div>
                    <img src={appLogo} alt="" />
                    <h3>É fácil e rápido</h3>
                    <spam>Fazer um pedido no Pigz</spam>
                </div>
                <div>
                    <img src={managementLogo} alt="" />
                    <h3>Pigz Gestão</h3>
                    <spam>Você no controle, sempre</spam>
                </div>
                <div>
                    <img src={paymentLogo} alt="" />
                    <h3>Vias de impressão</h3>
                    <spam>Personalizáveis</spam>
                </div>
            </section>
    )
}

export default FeaturesCards;