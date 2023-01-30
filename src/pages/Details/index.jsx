import { Container, Content } from "./styles";

import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import {IngredientTag} from "../../components/IngredientTag";
import SaladaRavanello from "../../assets/saladaRavanello.png";
import Coupon from "../../assets/coupon.svg";


import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Details(){
    return(
        <Container>
            <Header/>
            <main>
        <div>
          <Link to="/">
            <button className="backToPage">
              <IoIosArrowBack />
              Voltar
            </button>
          </Link>
        </div>

        <Content>
          <img
            className="plate"
            src={SaladaRavanello}
            alt=""
          />

        <div className="information">
          <div className="description">
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          </div>

          <div className="ingredients">
            <IngredientTag title="pepino" />           
          </div>

            <div className="price">
              <strong>R$ 25,97</strong>
              <div className="count"><span>-</span> 01 <span>+</span></div>
              <Button icon={Coupon} title="incluir"/>
            </div>
            </div>
        </Content>
         
      </main>
            <Footer/>
        </Container>
    )
}