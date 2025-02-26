import styled from "styled-components";
import perfil from "../assets/87510192.jpg";


const About = () => {


    const AboutSection = styled.section`
        display: flex;
        margin-top: 15vh;
        justify-content: center;
        height: 90vh;
    div{
        display: flex;
        align-items: center;
        font-size: 20px;
        
    }

   

    @media (max-width: 1240px){
        div{
            display: block;
            text-align: center;
            
        }
    }
    `


    const Img = styled.img`
        
        border: 4px solid;
        scale: 70%;
        border-radius: 50%;

    
    `
    const Fieldset = styled.fieldset`
        color: #f2f2f2;
        height: 35vh;
        width: 50vw;
        border: 2px solid #4d4c4c;
        background-color: #1e1d1d;
    p{
        margin: 10px;
        text-align: center;
    }
    frase{
        margin-top: 5vh;
        display: flex;
        justify-content: center;
    }
    credit{
        margin-top: 2vh;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1240px){
        width: 80%;
        height: 60%;
        margin-left: 10%;
    }
    `



    return(

        <AboutSection>
            <div>
                <Img src={perfil}/>
                <Fieldset><p>Estudante de Engenharia de Software na FIAP - Faculdade de Informática e Administração Paulista, com amplos conhecimentos gerais em tecnologia e um compromisso contínuo com a aprendizagem. Possuo grande interesse em Engenharia de Dados. Sou flexível e versátil, capaz de me adaptar a diferentes áreas, e tenho uma grande sede por conhecimento.</p><frase>“Eu não sou um programador, sou um solucionador de problemas que usa código."</frase><credit>~Scott Hanselman</credit></Fieldset>
            </div>
        </AboutSection>
            
    );
}


export default About;