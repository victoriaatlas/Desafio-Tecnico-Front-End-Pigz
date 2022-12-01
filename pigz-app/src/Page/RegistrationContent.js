import RegistrationTextCard from "../Components/RegistrationTextCard";
import RegistrationFormCard from "../Components/RegistrationFormCard";
import PigzLogo from '../Components/PigzLogo'
import { RegistrationDiv } from "../Styles/RegistrationContent.styles";


function RegistrationContent() {
    return(
        <RegistrationDiv>
            <RegistrationTextCard />
            <RegistrationFormCard />
            <PigzLogo />
        </RegistrationDiv>
    )
}

export default RegistrationContent;