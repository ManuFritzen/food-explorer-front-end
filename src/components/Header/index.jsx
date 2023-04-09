import {
    Container,
    HeaderLogo,
    HeaderLogoImage,
    HeaderLogoText,
    HeaderButtonsIcons,
    HeaderExit,   
} from "./styles";
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
            
            <HeaderLogo>
                <HeaderLogoImage src={Logo} alt="Logo" />
                <HeaderLogoText>food explorer</HeaderLogoText>
            </HeaderLogo>

            <HeaderButtonsIcons>
                <ButtonText className="heart"  icon={FiHeart} /> 

                <Link to="/profile">
                    <ButtonText icon={FiUser}/>           
                </Link>
            </HeaderButtonsIcons>

            <Input className="input"           
            icon={FiSearch}
            placeholder="Busque pelas opções de pratos"
            />

            <Link className="foodOrder" to="/foodOrder">
                <Button icon={Coupon} title="Meu pedido (0)" />
            </Link>

            <HeaderExit src={Exit} alt="sair"/>
            

        </Container>
    )
}