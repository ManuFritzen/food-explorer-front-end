import {Container} from "./styles";
import { FiSearch, FiLogOut } from "react-icons/fi";

import Logo from "../../assets/logo.svg";
import Coupon from "../../assets/coupon.svg";
import Exit from "../../assets/exit.svg";


import {ButtonText} from "../ButtonText";
import {Button} from "../Button";
import {Input} from "../Input";

export function Header(){   

    return(
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>food explorer</h1>
            </div>

            <ButtonText title="Meus favoritos" />              

            <Input className="input"           
            icon={FiSearch}
            placeholder="Busque pelas opções de pratos"
            />

            <Button icon={Coupon} title="Meu pedido (0)" />

            <button className="logout">
                <img src={Exit} alt="sair" />
            </button>

        </Container>
    )
}