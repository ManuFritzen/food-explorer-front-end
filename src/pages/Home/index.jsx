//import { useEffect, useState } from "react";
import { Container} from "./styles.js";

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
      
    </Container>
    
  )
}