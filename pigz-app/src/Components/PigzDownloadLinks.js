import pigzLogo from "../images/pigz-logotipo-colorido@2x.png"
import storeLogo from "../images/selo-app-store.png"
import playLogo from "../images/selo-google-play.png"

function PigzDownloadLinks() {
    return(
        <section>
            <img src={pigzLogo} />
            <span>Tudo que você precisa.</span>
            <span>Baixe o APP</span>
            <img src={storeLogo}/>
            <img src={playLogo}/>
        </section>
    )
}

export default PigzDownloadLinks;