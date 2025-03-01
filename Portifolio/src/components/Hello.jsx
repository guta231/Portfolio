import styled from "styled-components";


const Hello = () =>{

    const Container = styled.div`
    
        display: flex;
        justify-content: center;
        margin-top: 20vh;
    
    `

    const Msg = styled.div`
        color: #bdd4f7;
        font-size: 3rem;
        display: block;
        font-weight: 700;
        font-family: "Jura", serif;

        border-right: solid 10px #ffffffbe;
        white-space: nowrap;

        

        overflow: hidden;

        animation: mark .8s step-end infinite, write 5s steps(22, end) infinite;


        @media (min-width: 1283px){
            font-size: 4rem;
        }
    @keyframes mark{
        50%{
            border-right-color: transparent;
        }
    }

    @keyframes write{
        0%{
            width: 0;
        }
        40%{
            width: 9.3ch;
        }

        70%{
            width: 9.3ch;
        }

        85%{
            width: 0;
        }

        100%{
            width: 0;
        }
    }
    `



    return(
        <>
            <Container>

                <Msg>Hello World!</Msg>

            </Container>
        </>
    )

}

export default Hello