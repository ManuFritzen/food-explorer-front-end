import { Container, Form, InputWrapper, ImgPlate, InputItem } from "./styles";
import Logo from "../../assets/logo.svg"
import Coupon from "../../assets/coupon.svg"
import { Button } from "../../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Ingredients } from "../../components/Ingredients";
import { Textarea } from "../../components/Textarea";
//import { useNavigate, useParams } from "react-router-dom";
//import { useState, useEffect } from "react";


export function DishNew() {
   

    return (
        <Container>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>food explorer</h1>
                </div>

                <div className="buttons">
                    <span>Administrador</span>
                    <Button icon={Coupon} title="Meu pedido (0)" />
                </div>
            </header>

            <main>
                <button className="button-back" >
                    <IoIosArrowBack />
                    voltar
                </button>
                <h2>Editar Prato</h2>
                <Form>
                    <InputWrapper>
                        <div>
                            <span>Selecione imagem</span>
                            <ImgPlate>
                                <label htmlFor="file-img">Imagem do prato</label>

                                <Input
                                    id="file-img"
                                    type="file"
                                    placeholder="Selecione imagem"
                                    icon={MdOutlineFileUpload}
                                   
                                />
                            </ImgPlate>
                        </div>

                        <div className="flex">
                            <label htmlFor="event-name">Nome</label>
                            <Input
                                id="event-name"
                                type="text"
                                placeholder="Ex.: Salada Caesar"
                               
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="flex">
                            <label htmlFor="plate-ingredientes">Ingredientes</label>

                            <InputItem>                               
                                    <Ingredients name="alface"
                                    
                                        
                                    />
                                
                                <Ingredients name="alface"
                                                           
                                />
                            </InputItem>
                        </div>

                        <div>
                            <label htmlFor="plate-price">Preço</label>
                            <Input
                                type="text"
                                id="plate-price"
                                placeholder="R$ 00,00"
                               
                            />
                        </div>
                    </InputWrapper>

                    <InputWrapper>
                        <div className="textarea">
                            <label htmlFor="text-area">Descrição</label>
                            <Textarea
                                id="text-area"
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                               
                            />
                        </div>
                    </InputWrapper>

                    <div className="buttons">
                        <Button
                            className="button-remove"
                            title="Remover prato"
                           
                        />

                        <button type="button">
                            Adicionar pedido
                        </button>
                    </div>
                </Form>
            </main>

            <Footer />



        </Container>
    )
}