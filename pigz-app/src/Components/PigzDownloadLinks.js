import pigzLogo from "../images/pigz-logotipo-colorido.png";
import storeLogo from "../images/selo-app-store.png";
import playLogo from "../images/selo-google-play.png";
import { Section, SectionLogos, Img, H3 } from "../Styles/ContactFooterContent";

function PigzDownloadLinks() {
    return(
        <Section>
            <img src={pigzLogo} alt="" />
            <span>Tudo que você precisa.</span>
            <H3>Baixe o APP</H3>
            <SectionLogos>
            <Img src={storeLogo} alt=""/>
            <Img src={playLogo} alt=""/>
            </SectionLogos>
        </Section>
    )
}

export default PigzDownloadLinks;