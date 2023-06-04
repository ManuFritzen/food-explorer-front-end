import { 
    Container,
    DishNewMain,
    DishNewTitle, 
    Form,
    DishNewDivDesktop,
    DishNewLabel,
    DishNewLabelP,
    DishNewSelect,
    DishNewInputTextarea, 
    InputWrapper    
} from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonBackToPage } from "../../components/ButtonBackToPage";
//import { useNavigate, useParams } from "react-router-dom";
//import { useState, useEffect } from "react";


export function DishNew() {
    return (
        <Container>
            <Header/>

            <DishNewMain>
                <Link to="/">
                    <ButtonBackToPage/>
                </Link>
                <DishNewTitle>Novo Prato</DishNewTitle>
                <Form>
                    <DishNewDivDesktop>                        
                        <DishNewLabel>
                            <DishNewLabelP>
                                Imagem do prato                            
                            </DishNewLabelP>
                            <Input
                                type="file"
                                placeholder="Selecione imagem"
                            />
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Nome
                            </DishNewLabelP>
                            <Input
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                            />
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Categoria
                            </DishNewLabelP>
                            <DishNewSelect >
                                <option value="refeicao">Refeição</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </DishNewSelect>
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <DishNewDivDesktop>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Ingredientes
                            </DishNewLabelP>
                            <Input/>
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Preço
                            </DishNewLabelP>
                            <Input
                                className="inputMoney"
                                type="number"
                                placeholder="R$ 00,00"
                            />
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <DishNewDivDesktop>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Descrição
                            </DishNewLabelP>
                            <DishNewInputTextarea>
                                Fale brevemente sobre o prato, seus ingredientes e composição
                            </DishNewInputTextarea>
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <Button
                        className="button"
                        type="submit"
                        title="Salvar prato"
                    />
                    
                </Form>
            </DishNewMain>

            <Footer />



        </Container>
    )
}