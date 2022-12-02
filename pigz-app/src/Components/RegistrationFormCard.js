import React from 'react';
import { H1, Label, } from "../Styles/RegistrationContent.styles";
import { Form, Input, SectionText, Div, Span1, Span2  } from "../Styles/ResgistrationForms.styles"

function RegistrationFormCard() {
    return (
        <main className='form-container'>
            <SectionText>
                <H1>Quero vender no Pigz</H1>
                <Span1>Dê o primeiro passo para aumentar suas vendas</Span1>
            </SectionText>
            <Form>
                <Div>
                    <Label htmlFor="name">
                        Nome
                        <Input
                            type="text"
                            id="name"
                            data-testid="common_register__input-name"
                            name="name"
                            placeholder=" Leonercio Goesfeeld"
                        />
                    </Label>
                    <Label htmlFor="email">
                        E-mail
                        <Input
                            type="text"
                            id="email"
                            data-testid="common_register__input-email"
                            name="email"
                            placeholder=" leonercio.goesfeeld@exemple.com"
                        />
                    </Label>
                    <Label htmlFor="name-phone">
                        Telefone
                        <Input
                            type="tel"
                            id="phone"
                            data-testid="common_register__input-number"
                            name="number-phone"
                            placeholder=" (XX) 00000-0000"
                        />
                    </Label>
                </Div>
                <Span2>
                    Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
                </Span2>
            </Form>
        </main>
    )
}

export default RegistrationFormCard;