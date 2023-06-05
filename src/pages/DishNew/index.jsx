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
    DishNewIngredients    
} from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonBackToPage } from "../../components/ButtonBackToPage";
import { IngredientsAction } from "../../components/IngredientsAction";
import { useNavigate, useParams } from "react-router-dom";
import { useState} from "react";
import { api } from "../../services/api";


export function DishNew() {

    const navigate = useNavigate()
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("");

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [imageFile, setImageFile] = useState(null);

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
    }

    async function handleNewDish(){

        if (!imageFile || !name || !description || !category || !price || !ingredients) {
            return alert("preencha todos os campos")
        }      
        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar")
        }

        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        api.post("/dishes", formData)
        alert("Prato cadastrado com sucesso");
        navigate("/")
    }

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
                                onChange={e => setImageFile(e.target.files[0])}
                            />
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Nome
                            </DishNewLabelP>
                            <Input
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                            />
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Categoria
                            </DishNewLabelP>
                            <DishNewSelect onChange={e=>setCategory(e.target.value)}>
                                <option value="refeição">Refeição</option>
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
                            <DishNewIngredients>
                                {ingredients.map((ingredient, index) => (
                                    <IngredientsAction
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))}
                                <IngredientsAction
                                    isNew 
                                    placeholder='Adicionar'
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </DishNewIngredients>
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Preço
                            </DishNewLabelP>
                            <Input
                                className="inputMoney"
                                type="number"
                                placeholder="R$ 00,00"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <DishNewDivDesktop>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Descrição
                            </DishNewLabelP>
                            <DishNewInputTextarea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <Button
                        className="button"
                        onClick={handleNewDish}
                        title="Salvar prato"
                    />
                    
                </Form>
            </DishNewMain>

            <Footer />



        </Container>
    )
}