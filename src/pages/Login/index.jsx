import {Container} from "./styles";
import Logo from "../../assets/logo.svg";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";



export function Login(){
    return(
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>food explorer</h1>
            </div>

            <form>
                <h1>Faça login</h1>
                <h2>Email</h2>
                <Input
                className="input"           
                placeholder="Exemplo: exemplo@exemplo.com.br"
                />
                <h2>Senha</h2>
                <Input
                className="input"           
                placeholder="No mínimo 6 caracteres"
                />

                <Button title="Entrar" className="button"/>

                <ButtonText title="Criar uma conta" className="buttonText"/>


            </form>
        </Container>
    )
}