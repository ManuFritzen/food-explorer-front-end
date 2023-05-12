import { 
    Container,
    LogoImage,
    LogoTitle, 
} from "./styles";
import LogoImg from "../../assets/logo.svg";

export function Logo({...rest}){
    return(
        <Container> 
            <LogoImage src={LogoImg} alt="Logo" />
            <LogoTitle>food explorer</LogoTitle>
        </Container>
    )
}