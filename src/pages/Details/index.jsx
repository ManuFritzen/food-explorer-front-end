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
  DetailCount,
  DetailOperation 
} from "./styles";

import React from 'react';

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { ButtonBackToPage } from "../../components/ButtonBackToPage";
import {IngredientTag} from "../../components/IngredientTag";
import Coupon from "../../assets/coupon.svg";


import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

export function Details(props){
  const {user} = useAuth();
  const {id} = useParams();
  const [dish, setDish] = useState([]);

  const idDish = id ? Number.parseInt(id, 10): 0;

  
  
  useEffect(() => {
    const fetchDish = async () => {
      const response = await api.get(`/dishes/${idDish}`);
      setDish(response.data);
    }
    fetchDish();
  }, []);
  
  const imageUrl = `${api.defaults.baseURL}/files/dishes/${dish.image}`;
  
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
                    <DetailImage src={imageUrl} alt="" />
                    <DetailInformation>
                      <DetailDescriptionTitle>{dish.name}</DetailDescriptionTitle>
                      <DetailDescription>{dish.description}</DetailDescription>
                      <DetailIngredients>
                      {dish.ingredients && dish.ingredients.map((ingredient) => (
                        <IngredientTag key={String(ingredient.id)} title={ingredient.name} />
                      ))}  
                      </DetailIngredients>
                      <DetailPrice>
                        <DetailCount>
                          <DetailOperation>-</DetailOperation>
                          01
                          <DetailOperation>+</DetailOperation>
                        </DetailCount>
                        <Button className="button" icon={Coupon} title="Pedir - R$ 00,00" />
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
                src={imageUrl}
                alt=""
              />
              <DetailInformation>
                <DetailDescriptionTitle>
                  {dish.name}
                </DetailDescriptionTitle>
                <DetailDescription>
                  {dish.description}
                </DetailDescription>
                <DetailIngredients>
                  {dish.ingredients && dish.ingredients.map((ingredient) => (
                    <IngredientTag key={String(ingredient.id)} title={ingredient.name} />
                  ))}
                </DetailIngredients>
                <Link to={`/dishEdit/${dish.id}`} className="button">
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