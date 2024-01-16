import { ButtonBlue } from "../../styles/Buttons";
import { StyledHeader_2, StyledHeader_3, StyledParagraph_1, StyledParagraph_2 } from "../../styles/typography";
import { CardButton, Container, DivButtons, DivProjects, DivTalkeWithMe, DivTecnologies, ListItem, SpanTecnologies, StyledList } from "./style";
import GitHubIcon from "../../assets/github-icon.png"

export const Projects = () => {
    const linkedinProfile = () => {
        window.open(
            "https://www.linkedin.com/in/luis-alberto-rocha-65169a257/"
        );
    };

    const projetoFullstack = () => {
        window.open(
            "https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-bigod1"
        )
    }

    const projetoPython = () => {
        window.open(
            "https://github.com/bigod1/m5-projeto-final-kanvas"
        )
    }

    const kImoveis = () => {
        window.open(
            "https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-bigod1"
        )
    }

    return (
        <Container>
            <DivTalkeWithMe>
                <StyledHeader_2>Vamos trocar uma idea?</StyledHeader_2>
                <StyledParagraph_1>
                    No meu LinkedIn sempre estou fazendo atualizações sobre
                    novos projetos e oque estou fazendo no momento, espero seu
                    contato!
                </StyledParagraph_1>
                <ButtonBlue onClick={linkedinProfile}>
                    Acessar perfil no LinkedIn
                </ButtonBlue>
            </DivTalkeWithMe>

            <DivProjects>
                <StyledHeader_2>Alguns projetos que desenvolvi</StyledHeader_2>
                <StyledList>
                    <ListItem>
                        <StyledHeader_3>Aplicação fullstack</StyledHeader_3>
                        <DivTecnologies>
                            <p>Linguagens:</p>
                            <SpanTecnologies>HTML</SpanTecnologies>
                            <SpanTecnologies>CSS</SpanTecnologies>
                            <SpanTecnologies>Typescript</SpanTecnologies>
                        </DivTecnologies>

                        <StyledParagraph_2>Essa é uma simples aplicação web simples com criação de contas, login, autenticação por JWT.</StyledParagraph_2>

                        <DivButtons>
                            <CardButton onClick={projetoFullstack}>
                                <img src={GitHubIcon} alt="" />
                                <p>GitHub Code</p>
                            </CardButton>
                        </DivButtons>
                    </ListItem>

                    <ListItem>
                        <StyledHeader_3>Projeto Backend em python</StyledHeader_3>
                        <DivTecnologies>
                            <p>Linguagens:</p>
                            <SpanTecnologies>Python</SpanTecnologies>
                        </DivTecnologies>

                        <StyledParagraph_2>Nesse projeto utilizei python e django para criar um baco de dados com varias ligações entre suas tabelas.</StyledParagraph_2>

                        <CardButton onClick={projetoPython}>
                            <img src={GitHubIcon} alt="" />
                            <p>GitHub Code</p>
                        </CardButton>
                    </ListItem>

                    <ListItem>
                        <StyledHeader_3>Projeto backend imobiliaria</StyledHeader_3>
                        <DivTecnologies>
                            <p>Linguagens:</p>
                            <SpanTecnologies>Typescript</SpanTecnologies>
                        </DivTecnologies>

                        <StyledParagraph_2>Para esse projeto utilizei typescript para criar um banco de dados para uma imobiliaria, onde as pessoas podem cadastrar imoveis, planejar horario de visitas e muito mais.</StyledParagraph_2>

                        <CardButton onClick={kImoveis}>
                            <img src={GitHubIcon} alt="" />
                            <p>GitHub Code</p>
                        </CardButton>
                    </ListItem>
                    
                </StyledList>
            </DivProjects>
        </Container>
    );
};
