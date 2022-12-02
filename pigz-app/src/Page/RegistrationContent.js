import React, { useState, useEffect } from 'react';
import RegistrationTextCard from "../Components/RegistrationTextCard";
import RegistrationFormCard from "../Components/RegistrationFormCard";
import ResgistCEPFormCard from "../Components/ResgistCEPFormCard";
import ResgistStoreFormCard from "../Components/RegistStoreFormCard";
import PigzLogo from '../Components/PigzLogo'
import { RegistrationDiv } from "../Styles/RegistrationContent.styles";
import { FormButton } from "../Styles/buttons.styles"
import { GlobalForm } from "../Styles/RegistrationContent.styles"



function RegistrationContent() {
    const [buttonText, setButtonText] = useState('Continuar');
    const [indexForms, setIndexForms] = useState(1);
    const [forms, setForms] = useState([]);

    const components = [
        (<RegistrationFormCard />),
        (<ResgistCEPFormCard />),
        (<ResgistStoreFormCard />),
    ];

    const textButton = [
        "Continuar",
        "Próximo",
        "Concluir",
    ];

    const handleClick = (index) => {
        setIndexForms(index)
        if (index > 2) {
            setIndexForms(0)
        }
        setButtonText(textButton[indexForms]);
        const finderIndex = components.filter((c, index) => index === indexForms && c )
     
        return setForms(finderIndex);
    };

    return(
        <RegistrationDiv>
            <RegistrationTextCard />
            <GlobalForm>
                <section>
                    {forms}
                </section>
                <FormButton
                    type="button"
                    onClick={() => handleClick(indexForms + 1) }>
                    {buttonText}
                </FormButton>
            </GlobalForm>
            <PigzLogo />
        </RegistrationDiv>
    )
}

export default RegistrationContent;