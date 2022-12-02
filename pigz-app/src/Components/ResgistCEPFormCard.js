import { LabelSelect } from "../Styles/RegistrationContent.styles"
import { Form,
    InputNumber,
    InputComplement,
    Input,
    SelectState,
    SelectCity, 
    Section,
    H1,
    Label
} from "../Styles/CEPForm.styles"

function ResgistCEPFormCard() {
 return(
    <main>
        <H1>Onde fica a sua loja?</H1>
        <Form>
             <Label htmlFor="cep-input">
                 CEP
                 <Input
                     type="text"
                     name="cep-input"
                     placeholder=" 00000-00"
                 />
             </Label>
             <Section>
                <LabelSelect>
                    Estado
                    <SelectState>
                        <option>UF</option>
                        <option>Roraima</option>
                    </SelectState>
                </LabelSelect>
                <LabelSelect>
                    Cidade
                    <SelectCity>
                        <option>Selecione</option>
                        <option>Boa Vista</option>
                    </SelectCity>
                </LabelSelect>
             </Section>
             <Label htmlFor="adress">
                 Endereço
                 <Input
                     type="text"
                     name="address-input"
                     placeholder=" Avenida Brasil"
                 />
             </Label>
             <Section >
                <Label htmlFor="number-address-input">
                    Número
                    <InputNumber
                        type="number"
                        name="number-address-input"
                        placeholder=" 123"
                    />
                </Label>
                <Label htmlFor="complement-adress-input">
                    Complemento
                    <InputComplement
                        type="text"
                        name="complement-address-input"
                        placeholder=" Sala 1"
                    />
                </Label>
             </Section>
        </Form>
    </main>
 )
}

export default ResgistCEPFormCard;