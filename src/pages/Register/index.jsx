import {
    Container,
    LoginForm,
    LoginTitle,
    LoginLabel,
} from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {Logo} from "../../components/Logo";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";



export function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleRegister(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password}).then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        }).catch( error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        })
    }

    return(
        <Container>
        <Logo className="logoRegister"/>

        <LoginForm>
            <LoginTitle>Crie sua conta</LoginTitle>
            <LoginLabel>Seu nome</LoginLabel>
            <Input
            placeholder="Exemplo: Maria da Silva"
            onChange = {e => setName(e.target.value)}
            />
            <LoginLabel>Email</LoginLabel>
            <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange = {e => setEmail(e.target.value)}
            />
            <LoginLabel>Senha</LoginLabel>
            <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange = {e => setPassword(e.target.value)}
            />

            <Button title="Criar conta" className="button" onClick={handleRegister}/>

            <Link to="/">
                <ButtonText title="Já tenho uma conta" className="buttonText"/>
            </Link>


        </LoginForm>
    </Container>
    )
}