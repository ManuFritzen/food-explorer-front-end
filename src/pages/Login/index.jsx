import {
    Container,
    LoginForm,
    LoginTitle,
    LoginLabel,
} from "./styles";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import {Logo} from "../../components/Logo"
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";




export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    function handleLogin(){
        login({email, password})
    }

    return(
        <Container>
            <Logo className="logoLogin"/>

            <LoginForm>
                <LoginTitle>Faça login</LoginTitle>
                <LoginLabel>Email</LoginLabel>
                <Input
                className="login"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e=> setEmail(e.target.value)}
                />
                <LoginLabel>Senha</LoginLabel>
                <Input
                className="login"
                placeholder="No mínimo 6 caracteres"
                onChange={e=> setPassword(e.target.value)}
                />

                <Button title="Entrar" className="button" onClick={handleLogin}/>

                <Link to="/register">
                    <ButtonText title="Criar uma conta" className="buttonText"/>
                </Link>


            </LoginForm>
        </Container>
    )
}