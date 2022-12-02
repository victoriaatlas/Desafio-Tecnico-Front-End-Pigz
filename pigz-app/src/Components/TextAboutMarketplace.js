import { DivText, Img, P, H1 } from "../Styles/SupportContent"
import smatphones from "../images/Grupo de máscara 2417.png"

function TextAboutMarketplace() {
  return (
    <main>
      <H1>Pigz Marketplace</H1>
      <DivText>
        <P>
          Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.
        </P>
        <Img src={smatphones} alt='' />
      </DivText>
    </main>
  );
}

export default TextAboutMarketplace;
