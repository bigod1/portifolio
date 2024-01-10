import { StyledHeader_2 } from "../../styles/typography"
import { Container, ImgSkills, ListItem, StyledUl } from "./style"
import HtmlIcon from "../../assets/html-icon.png"
import CssIcon from "../../assets/css-icon.png"
import JsIcon from "../../assets/js-icon.png"
import NodeIcon from "../../assets/node-icon.png"
import PythonIcon from "../../assets/python-icon.png"
import ReactIcon from "../../assets/react-icon.png"
import TypescriptIcon from "../../assets/typescript-icon.png"

export const Skills = () => {
    return (
        <Container>
            <StyledHeader_2>Principais ferramentas:</StyledHeader_2>
            <StyledUl>
                <ListItem>
                    <ImgSkills src={HtmlIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={CssIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={JsIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={NodeIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={PythonIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={ReactIcon} alt="" />
                </ListItem>
                <ListItem>
                    <ImgSkills src={TypescriptIcon} alt="" />
                </ListItem>
            </StyledUl>
        </Container>
    )
}