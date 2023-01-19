//import { useEffect, useState } from "react";
import { Container} from "./styles.js";

import Imagem from "../../assets/pngegg 1.png";


import {Header} from "../../components/Header";
import {Options} from "../../components/Options";
import {DishCard} from "../../components/DishCard";
import {Footer} from "../../components/Footer";




export function Home(){  

  
  return(
    <Container>
      <Header />

      <div className="content">

        <section className="banner">
          <img src={Imagem} alt="Imagem banner" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
          </div>

        </section>

        <Options title="Pratos principais" >
        <DishCard/> 
       
        </Options> 

        <Options title="Sobremesas" >
        <DishCard/> 
       
        </Options>

        <Options title="Bebidas" >
        <DishCard/> 
       
        </Options>
       


      </div>

      <Footer/>

    
    
   

   
    </Container>
    
  )
}