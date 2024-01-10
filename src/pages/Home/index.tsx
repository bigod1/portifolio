import { AboutMe } from "../../components/AboutMe"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Projects } from "../../components/Projects"
import { Skills } from "../../components/Skills"


export const Home = () => {
    return(
        <>
            <Header />

            <AboutMe />
            <Skills />

            <Projects />
            
            <Footer />
        </>
    )
}