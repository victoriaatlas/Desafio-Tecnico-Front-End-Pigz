import orangeLog from "../images/logo-orange-horizontal-branco.png"
import { Link, LinksSection, Span, Aside, Copyright } from "../Styles/ContactFooterContent";

function FooterDetails() {
    return(
        <Aside>
            <hr />
            <LinksSection>
                <Link href="https://beta.pigz.com.br/ajuda/privacidade/termos-de-uso">
                    Nossos termos
                </Link>
                <Link href="https://beta.pigz.com.br/ajuda/privacidade">
                    Privacidade
                </Link>
                <Link href="https://beta.pigz.com.br/ajuda">
                    Ajuda
                </Link>
            </LinksSection>
            <Span>
                <Copyright> 
                    © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
                </Copyright>
                <img src={ orangeLog } alt="" />
            </Span>
        </Aside>
    )
}
export default FooterDetails;