import {
    Container,
    HeaderMenu,
    HeaderLogo,    
    HeaderExit,
    CouponAmount,
    AmountNumber,
    CouponImg,
    MenuMobile,
    MenuTitle,
} from "./styles";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import Coupon from "../../assets/coupon.svg";
import Exit from "../../assets/exit.svg";
import {Button} from "../Button";
import {Input} from "../Input";

export function Header(){ 

    function MenuOpen(){
        const menuHamburguer = document.querySelector(".menuHamburguer");
        const menuMobileDiv = document.querySelector(".menuMobileDiv");
        const logo = document.querySelector(".logo");
        const coupon = document.querySelector(".coupon");
        const menuTitle = document.querySelector(".menuTitle");
        
        menuMobileDiv.style.display = "block";          
        logo.style.display = "none";            
        coupon.style.display = "none";          
        menuTitle.style.display = "block";
        menuHamburguer.style.display = "none";           
        
    }

    function MenuClose(){
        const menuTitle = document.querySelector(".menuTitle");
        const menuHamburguer = document.querySelector(".menuHamburguer");
        const menuMobileDiv = document.querySelector(".menuMobileDiv");
        const logo = document.querySelector(".logo");
        const coupon = document.querySelector(".coupon");
        
        menuMobileDiv.style.display = "none";          
        logo.style.display = "block";            
        coupon.style.display = "block";          
        menuHamburguer.style.display = "block";
        menuTitle.style.display = "none";
        
        window.location.reload();        
    }
    
    

    return(
        <Container>

            <HeaderMenu >
                <FiMenu className="menuHamburguer" size={24} onClick={MenuOpen}/>
                <MenuTitle className="menuTitle" onClick={MenuClose}>X Menu</MenuTitle>
            </HeaderMenu>
            
            <HeaderLogo className="logo">
                <Logo className="logoHeader"/>
            </HeaderLogo>

            <MenuMobile className="menuMobileDiv">
                <Input className="input"           
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"
                />

                <Link className="foodOrder" to="/foodOrder">
                    <Button icon={Coupon} title="Meu pedido (0)" />
                </Link>
                <HeaderExit src={Exit} alt="sair"/>
            </MenuMobile>            

            <Link className="coupon-link" to="/foodOrder">
                <CouponAmount className="coupon">
                    <AmountNumber className="amount-order">0</AmountNumber>
                    
                    <CouponImg src={Coupon} alt="Coupon"/>
                </CouponAmount>
            </Link>
                
            
            

        </Container>
    )
}