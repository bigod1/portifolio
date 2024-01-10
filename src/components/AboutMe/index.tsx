import { StyledHeader_1, StyledParagraph_1 } from "../../styles/typography";
import { Container, DivAboutMe, DivParagraphs } from "./style";

export const AboutMe = () => {
    return (
        <Container>
            <DivAboutMe>
                <StyledHeader_1>Um breve resumo sobre mim</StyledHeader_1>
                <DivParagraphs>
                    <StyledParagraph_1>
                        Eu sempre fui apaixonado por tecnologia, então decidi fazer
                        dessa paixão o meu trabalho. No entanto, não vejo isso apenas
                        como um trabalho, pois poder trabalhar com algo que amo é
                        incrível. Meu grande objetivo é criar algo que realmente será
                        importante para as pessoas!
                    </StyledParagraph_1>
                    <StyledParagraph_1>
                        Sou formado na Kenzie Academy como programador web FullStack e
                        atualmente estou cursando engenharia de software na FIAP, a
                        melhor faculdade de tecnologia do Brasil.
                    </StyledParagraph_1>
                    <StyledParagraph_1>
                        Hoje me sinto totalmente confortável para começar qualquer
                        projeto, mesmo que eu não conheça a linguagem, pois minha
                        experiência mostrou que não existe linguagem que eu não possa
                        aprender!
                    </StyledParagraph_1>
                </DivParagraphs>
            </DivAboutMe>
        </Container>
    );
};
