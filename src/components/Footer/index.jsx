import {
    Container,
    LogoFooter,
    LogoImageFooter,
    LogoTextFooter,
    FooterText,
} from "./styles";
import Logo from "../../assets/logoGray.svg";

export function Footer(){
    return(
        <Container>
            <LogoFooter className="logo">
                <LogoImageFooter src={Logo} alt="Logo" />
                <LogoTextFooter>food explorer</LogoTextFooter>
            </LogoFooter>

            <FooterText>© 2022 - Todos os direitos reservados.</FooterText>

        </Container>
    )
}