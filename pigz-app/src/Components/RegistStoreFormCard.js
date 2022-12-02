import { LabelSelect, Select } from "../Styles/RegistrationContent.styles"
import { Form, Input, H1, Label, Div } from "../Styles/StoreForm.styles"

function ResgistStoreFormCard() {
    return(
        <main>
            <H1>Me conta um pouco sobre a sua loja</H1>
            <Form>
                <Div>
                    <Label>
                        Nome da loja
                        <Input
                        type="text"
                        name="address-input"
                        placeholder="  Restaurante Président"
                        />
                    </Label>
                    <Label>
                        CNPJ da loja
                        <Input
                        type="text"
                        name="address-input"
                        placeholder="  12.3234.234/000002-90"
                        />
                    </Label>
                    <LabelSelect>
                        Tipo de loja
                        <Select >
                            <option>Selecione</option>
                        </Select>
                    </LabelSelect>
                </Div>
            </Form>
        </main>
    )
}

export default ResgistStoreFormCard;