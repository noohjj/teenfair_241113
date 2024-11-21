import { styled } from "styled-components"

const Foot = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #0C224E;
    h3{
        font-size: 24px;
        color: white;
    }
`;

const Footer = () => {
    return(
        <Foot>
            <h3>
                COPYRIGHT @ NOOHJJ.ALL RIGHT DESERVE.
            </h3> 
        </Foot>
    )
}

export default Footer;