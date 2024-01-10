import { ButtonsDiv, ProfileDiv, ProfilePhoto, StyledHeader } from "./style"
import FotoPerfil from "../../assets/foto-perfil.jpg"
import { ButtonBlue, ButtonTrasparent } from "../../styles/Buttons"

export const Header = () => {

    const wppLink = () => {
        window.open("https://wa.me/5582988686661")
    }
    
    const githubLink = () => {
        window.open("https://github.com/bigod1")
    }

    const linkedinLink = () => {
        window.open("https://www.linkedin.com/in/luis-alberto-rocha-65169a257/")
    }


    return (
        <StyledHeader>
            <ProfileDiv>
                <ProfilePhoto src={FotoPerfil} alt="" />
                <h3>Luis Alberto Rocha Filho</h3>
            </ProfileDiv>

            <ButtonsDiv>
                <ButtonBlue onClick={wppLink}>Falar no whatsapp</ButtonBlue>
                <ButtonTrasparent onClick={githubLink}>GitHub</ButtonTrasparent>
                <ButtonTrasparent onClick={linkedinLink}>Linkedin</ButtonTrasparent>
            </ButtonsDiv>
        </StyledHeader>
    )
}