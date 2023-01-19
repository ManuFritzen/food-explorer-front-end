import {Container} from "./styles";
import Logo from "../../assets/logoGray.svg";

export function Footer(){
    return(
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>food explorer</h1>
            </div>

            <h2>© 2022 - Todos os direitos reservados.</h2>

        </Container>
    )
}