import FeaturesCards from "../Components/FeaturesCards";
import FeaturesTextCards from "../Components/FeaturesTextCard";
import { DivMain } from '../Styles/FeaturesContent.styles'

function FeaturesContent() {
    return (
        <DivMain>
            <h1>Você tem um novo Pigzdido!</h1>
            <FeaturesCards />
            <FeaturesTextCards />
        </DivMain>
    )
}

export default FeaturesContent;