//import { useEffect, useState } from "react";
import { 
  Container,
  HomeSection,
  HomeImgMacarrons,
  HomeBannerText,
  HomeTitle,
  HomeText,
} from "./styles.js";

import Imagem from "../../assets/pngegg 1.png";
import Espsguete from "../../assets/spaguetiGambe.png"


import {Header} from "../../components/Header";
import {Options} from "../../components/Options";
import {DishCard} from "../../components/DishCard";
import {Footer} from "../../components/Footer";
import { Carousel } from "../../components/Caroussel/index.jsx";


export function Home(){  

  // "mocando" / fingindo que vem do backend
  const listaPratos = [
    {
      image: Espsguete,
      title: "Spaguetti Gambe",
      price: 89.70     
    },
    {
      image: Espsguete,
      alt: "Massa com ovo",
      title: "Spaguetti Carbonara",
      text: "massa com ovo",
      price: 69.90
    },
    {
      image: {Espsguete},
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },
    {
      title: "Spaguetti Carbonara",
      price: 69.90
    },

  ];
  
  return(
    <Container>
      <Header />

      <HomeSection >
          <HomeImgMacarrons src={Imagem} alt="Imagem banner" />
          <HomeBannerText>
            <HomeTitle>
              Sabores inigualáveis
            </HomeTitle>
            <HomeText>
              Sinta o cuidado do preparo com ingredientes selecionados
            </HomeText>
          </HomeBannerText>
      </HomeSection>
        <Options title="Refeições" >
          <Carousel>                       
              {listaPratos.map(prato => (<DishCard
                image={prato.image}
                title={prato.title}
                text={prato.text}
                price={prato.price}
              />))}                         
          </Carousel>       
        </Options> 
        <Options title="Sobremesas" >
          <Carousel>                       
              {listaPratos.map(prato => (<DishCard
                title={prato.title}
                price={prato.price}
              />))}                         
          </Carousel>        
        </Options>

        <Options title="Bebidas" >
          <Carousel>                       
              {listaPratos.map(prato => (<DishCard
                title={prato.title}
                price={prato.price}
              />))}                         
          </Carousel>       
        </Options>

        <Footer/>
      
    </Container>
    
  )
}