import styled from "styled-components";
import perfil from "../assets/87510192_sem_fundo.png";


const About = () => {


    const AboutSection = styled.section`
        display: flex;
        
        justify-content: center;
        height: 70vh;
    .perfil{
        display: flex;
        align-items: center;
        font-size: 20px;
        text-align: center;
        
    }
    

   

    @media (max-width: 1283px){
        .perfil{
            display: block;
            font-size: 17px;
            
        }

    }
    `


    const Img = styled.img`
        
        border-bottom: 3px solid #1871e6;
        scale: 100%;
        border-radius: 10%;
        transform: scaleX(-1);
        
    
    `
    const Fieldset = styled.fieldset`
        color: #f2f2f2;
        height: 35vh;
        width: 50vw;
        scale: 90%;
        border: 2px solid #4d4c4c;
        background-color: #1e1d1d;
    p{
        margin: 10px;
        text-align: center;
        font-family: "Jura", serif;
    }
    frase{
        margin-top: 5vh;
        display: flex;
        justify-content: center;
        font-family: "Cormorant Garamond", serif;
    }
    credit{
        margin-top: 2vh;
        display: flex;
        justify-content: center;
        font-family: "Cormorant Garamond", serif;
    }

    @media (max-width: 1283px){
        width: 80%;
        height: 60%;
        margin-left: 10%;
    }
    `



    return(

        <AboutSection>
            
            <div className="perfil">
                <Img src={perfil}/>
                <Fieldset><p>Estudante de Engenharia de Software na FIAP - Faculdade de Informática e Administração Paulista, com amplos conhecimentos gerais em tecnologia e um compromisso contínuo com a aprendizagem. Possuo grande interesse em Engenharia de Dados. Sou flexível e versátil, capaz de me adaptar a diferentes áreas, e tenho uma grande sede por conhecimento.</p><frase>“Eu não sou um programador, sou um solucionador de problemas que usa código."</frase><credit>~Scott Hanselman</credit></Fieldset>
            </div>
        </AboutSection>
            
    );
}


export default About;