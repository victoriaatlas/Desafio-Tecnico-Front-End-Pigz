import contactUs from "../images/icone-fale-conosco.png"
import LinkedIn from "../images/linkedin-with-circle.png"
import Insta from "../images/instagram-with-circle.png"
import Face from "../images/facebook-with-circle.png"
import YouTube from "../images/youtube-with-circle.png"
import { Section, Header, SectionLogos, Img, H3, H3A } from "../Styles/ContactFooterContent";

function ContactUs() {
    return (
        <Section>
            <Header>
                <Img src={contactUs} alt="" />
                <H3>Fale conosco</H3>
            </Header>
            <main>
                <span>falecom@pigz.com.br</span>
                <span>(95) 3198-3939</span>
                <H3A>Pigz nas redes</H3A>
                <SectionLogos>
                    <Img src={LinkedIn} alt='' />
                    <Img src={Insta} alt='' />
                    <Img src={Face} alt='' />
                    <Img src={YouTube} alt='' />
                </SectionLogos>
            </main>
        </Section>
    )
}
export default ContactUs;