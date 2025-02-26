import styled from "styled-components";
import {Link} from "react-router-dom";
import "./Fonts.css";

const Navbar = () => {


    const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #0d1117; 
    color: #f2f2f2;
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    ul {
        display: flex;
        list-style: none;
        gap: 10vw;
    }

    .link {
        color: #f2f2f2;
        text-decoration: none;
        font-size: 20px;
        font-family: "Inter", serif;
    }

    .link:hover {
        color: #c9c6c6;
    }
`;


    return(
        <Nav>
            
            <div>
            
                <ul>
                    
                    <li><Link className="link" to="/projects">Projects</Link></li>
                    <li><Link className="link" to="/contacts">Contacts</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>
            </div>
        </Nav>
    )
}

export default Navbar;