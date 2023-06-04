import { 
  Container, 
  Content,
  DetailMain,
  DetailImage,
  DetailInformation,
  DetailDescriptionTitle,
  DetailDescription,
  DetailIngredients,
  DetailPrice,
  Price,
  DetailCount,
  DetailOperation 
} from "./styles";

import { Link } from "react-router-dom";

import { ButtonBackToPage } from "../../components/ButtonBackToPage";
import {IngredientTag} from "../../components/IngredientTag";
import SaladaRavanello from "../../assets/saladaRavanello.png";
import Coupon from "../../assets/coupon.svg";


import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";

export function Details(){
  const {user} = useAuth();
    return(
      <Container>
          <Header/>
        {
          user.id !== 1 ?
          <>
          <DetailMain>
            <Link to="/">
              <ButtonBackToPage/>
            </Link>
            <Content>
              <DetailImage
                src={SaladaRavanello}
                alt=""
              />
              <DetailInformation>
                <DetailDescriptionTitle>
                  Salada Ravanello
                </DetailDescriptionTitle>
                <DetailDescription>
                  Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                </DetailDescription>
                <DetailIngredients>
                  <IngredientTag title="pepino" />           
                </DetailIngredients>
                <DetailPrice>
                  <Price>R$ 25,97</Price>
                  <DetailCount>
                    <DetailOperation>
                      -
                    </DetailOperation> 
                    01 
                    <DetailOperation>
                      +
                    </DetailOperation>
                  </DetailCount>
                  <Button icon={Coupon} title="incluir"/>
                </DetailPrice>
              </DetailInformation>
            </Content>         
          </DetailMain>
          </>
          :
          <>
          <DetailMain>
            <Link to="/">
              <ButtonBackToPage/>
            </Link>
            <Content>
              <DetailImage
                src={SaladaRavanello}
                alt=""
              />
              <DetailInformation>
                <DetailDescriptionTitle>
                  Salada Ravanello
                </DetailDescriptionTitle>
                <DetailDescription>
                  Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                </DetailDescription>
                <DetailIngredients>
                  <IngredientTag title="pepino" />
                  <IngredientTag title="tomate" />
                  <IngredientTag title="pepino" />
                  <IngredientTag title="tomate" />
                  <IngredientTag title="pepino" />
                  <IngredientTag title="tomate" />          
                </DetailIngredients>
                <Link to="/dishEdit" className="button">
                  <Button title="Editar prato" className="button"/>
                </Link>
              </DetailInformation>           
            </Content>         
          </DetailMain>
          </>
        }
        <Footer/>
      </Container>
    )
}