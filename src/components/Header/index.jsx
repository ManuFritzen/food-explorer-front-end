import {
    Container,
    HeaderMenu,
    HeaderLogo,
    HeaderExit,    
    HeaderExitImage,
    CouponAmount,
    AmountNumber,
    CouponImg,
    MenuMobile,
    MenuTitle,
} from "./styles";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import  Logo  from "../../assets/logo.png";
import LogoAdmin from "../../assets/logoAdmin.png"
import Coupon from "../../assets/coupon.svg";
import Exit from "../../assets/exit.svg";
import {Button} from "../Button";
import {Input} from "../Input";
import { useAuth } from "../../hooks/auth";

export function Header(){ 
    const {user, signOut} = useAuth();
    
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
            {
            user.id !== 1 ?
                <> 
                    <HeaderMenu >
                        <FiMenu className="menuHamburguer" size={24} onClick={MenuOpen}/>
                        <MenuTitle className="menuTitle" onClick={MenuClose}>X Menu</MenuTitle>
                    </HeaderMenu>

                    <Link to="/">
                        <HeaderLogo src={Logo} className="logo"/>
                    </Link>

                    <MenuMobile className="menuMobileDiv">
                        <Input className="inputHeader"           
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />

                        <Link className="foodOrder" to="/foodOrder">
                            <Button icon={Coupon} title="Meu pedido (0)" />
                        </Link>
                        <HeaderExit onClick={signOut}>
                            <HeaderExitImage src={Exit} alt="sair"/>
                        </HeaderExit>
                    </MenuMobile>            

                    <Link className="coupon-link" to="/foodOrder">
                        <CouponAmount className="coupon">
                            <AmountNumber className="amount-order">0</AmountNumber>

                            <CouponImg src={Coupon} alt="Coupon"/>
                        </CouponAmount>
                    </Link>
                </>

                :
                <> 
                    <HeaderMenu >
                        <FiMenu className="menuHamburguer" size={24} onClick={MenuOpen}/>
                        <MenuTitle className="menuTitle" onClick={MenuClose}>X Menu</MenuTitle>
                    </HeaderMenu>

                    <Link to="/">
                        <HeaderLogo src={LogoAdmin} className="logo"/>
                    </Link>

                    <MenuMobile className="menuMobileDiv">
                        <Input className="inputHeader"           
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />

                        <Link className="foodOrder" to="/dishNew">
                            <Button  title="Novo prato" />
                        </Link>
                        <HeaderExit onClick={signOut}>
                            <HeaderExitImage src={Exit} alt="sair"/>
                        </HeaderExit>
                    </MenuMobile>            

                    <Link className="coupon-link" to="/foodOrder">
                        <CouponAmount className="coupon">

                        </CouponAmount>
                    </Link>
                </>           
            }
        </Container>
    )
}