import {Container} from "./styles";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";

import { Link } from "react-router-dom";

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

            <div className="buttonIcons">
                <ButtonText className="heart"  icon={FiHeart} /> 

                <Link to="/profile">
                    <ButtonText icon={FiUser}/>           
                </Link>
            </div>

            <Input className="input"           
            icon={FiSearch}
            placeholder="Busque pelas opções de pratos"
            />

            <Link className="foodOrder" to="/foodOrder">
                <Button icon={Coupon} title="Meu pedido (0)" />
            </Link>

            <button className="logout">
                <img src={Exit} alt="sair" />
            </button>

        </Container>
    )
}