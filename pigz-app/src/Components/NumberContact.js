import zipzop from "../images/Icon awesome-whatsapp.png"
import { Div } from "../Styles/NumberContact.style"

function NumberContact() {
    return(
        <Div>
            <span>Fale com a Pigz</span>
            <span> <img src={ zipzop }alt="" /> 95 3224-2603</span>
        </Div>
    )
}
export default NumberContact;