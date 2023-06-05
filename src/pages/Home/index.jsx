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


import {Header} from "../../components/Header";
import {Options} from "../../components/Options";
import {DishCard} from "../../components/DishCard";
import {Footer} from "../../components/Footer";
import { Carousel } from "../../components/Caroussel/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";

export function Home(){  

  const [listDishes, setListDishes] = useState([]);

  
  useEffect(() => {
    const fetchDishData = async () => {
      const response = await api.get('/dishes');
      setListDishes(response.data);
    }
    fetchDishData();
    console.log(listDishes);
  }, []);

  
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
              {listDishes.filter(dish => dish.category == "refeição").map(dish => (<DishCard
                id={dish.id}
                image={dish.image}
                title={dish.name}
                price={dish.price}
              />))}                         
          </Carousel>       
        </Options> 
        <Options title="Sobremesas" >
          <Carousel>                       
          {listDishes.filter(dish => dish.category == "sobremesa").map(dish => (<DishCard
                id={dish.id}
                image={dish.image}
                title={dish.name}
                price={dish.price}
              />))}    
          </Carousel>        
        </Options>

        <Options title="Bebidas" >
          <Carousel>                       
          {listDishes.filter(dish => dish.category == "bebida").map(dish => (<DishCard
                id={dish.id}
                image={dish.image}
                title={dish.name}
                price={dish.price}
              />))}    
          </Carousel>       
        </Options>

        <Footer/>
      
    </Container>
    
  )
}