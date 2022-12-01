import { Main } from "../Styles/ContactFooterContent";
import PigzDownloadLinks from "../Components/PigzDownloadLinks";
import AboutApp from "../Components/AboutPigz";
import ContactUs from "../Components/ContactUs";
import FooterDetails from "../Components/FooterDetails";


function ContactFooterContent() {
    return (
        <Main>
           <PigzDownloadLinks />
           <AboutApp />
           <ContactUs />
           <FooterDetails />
        </Main>
    )
}

export default ContactFooterContent;