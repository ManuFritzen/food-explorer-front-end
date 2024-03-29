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
    MenuMobileOpen,
    MenuMobileOpenContent,
    MenuMobileOpenButton,
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
        const menuMobileOpen = document.querySelector(".menuMobileOpen");    
        
        menuMobileOpen.style.display = "block";       
        menuHamburguer.style.display = "none";           
        
    }

    function MenuClose(){
        const menuHamburguer = document.querySelector(".menuHamburguer");
        const menuMobileOpen = document.querySelector(".menuMobileOpen");    
        
        menuMobileOpen.style.display = "none";       
        menuHamburguer.style.display = "block";        
    }
    
    

    return(
        <Container>
            {
            user.id !== 1 ?
                <> 
                    <HeaderMenu >
                        <FiMenu className="menuHamburguer" size={24} onClick={MenuOpen}/>
                    </HeaderMenu>

                    <Link to="/">
                        <HeaderLogo src={Logo} className="logo"/>
                    </Link>

                    <MenuMobile className="menuMobileDiv">
                        <Input className="inputHeader"           
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />

                        <Link className="foodOrder" to="/">
                            <Button icon={Coupon} title="Meu pedido (0)" />
                        </Link>
                        <HeaderExit onClick={signOut}>
                            <HeaderExitImage src={Exit} alt="sair"/>
                        </HeaderExit>
                    </MenuMobile>            

                    <Link className="coupon-link" to="/">
                        <CouponAmount className="coupon">
                            <AmountNumber className="amount-order">0</AmountNumber>

                            <CouponImg src={Coupon} alt="Coupon"/>
                        </CouponAmount>
                    </Link>
                    <MenuMobileOpen className="menuMobileOpen">
                        <MenuTitle className="menuTitle" onClick={MenuClose}>X Menu</MenuTitle>
                        <MenuMobileOpenContent>
                            <Input className="inputHeader inputMobile"           
                            icon={FiSearch}
                            placeholder="Busque por pratos ou ingredientes"
                            />                            
                            <MenuMobileOpenButton onClick={signOut} className="button" >
                                Sair
                            </MenuMobileOpenButton>
                        </MenuMobileOpenContent>
                    </MenuMobileOpen>
                </>

                :
                <> 
                    <HeaderMenu >
                        <FiMenu className="menuHamburguer" size={24} onClick={MenuOpen}/>
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
                    <MenuMobileOpen className="menuMobileOpen">
                        <MenuTitle className="menuTitle" onClick={MenuClose}>X Menu</MenuTitle>
                        <MenuMobileOpenContent>
                            <Input className="inputHeader inputMobile"           
                            icon={FiSearch}
                            placeholder="Busque por pratos ou ingredientes"
                            />
                            <Link to="/dishNew">
                                <MenuMobileOpenButton onClick={MenuClose} className="button">
                                    Novo prato
                                </MenuMobileOpenButton>
                            </Link>
                                <MenuMobileOpenButton onClick={signOut} >
                                    Sair
                                </MenuMobileOpenButton>
                        </MenuMobileOpenContent>
                    </MenuMobileOpen>
                </>           
            }
        </Container>
    )
}