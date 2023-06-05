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
    DishEditButtons,
    DishNewIngredients, 
    InputWrapper    
} from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonBackToPage } from "../../components/ButtonBackToPage";
import { IngredientsAction } from "../../components/IngredientsAction";
import { api } from "../../services/api";
import { useState, useEffect } from "react";


export function DishEdit() {

    const navigate = useNavigate()
    const {id} = useParams();
    const idDish = id ? Number.parseInt(id, 10): 0;
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("");
    const [dish, setDish] = useState([]);

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const fetchDish = async () => {
            const response = await api.get(`/dishes/${idDish}`);
            setDish(response.data);
        }
        fetchDish();
    }, []);      

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
    }

    async function handleEditDish(){
        if (!imageFile) {
            return alert("Adicione uma imagem para o prato")
        }
      
        if (!name) {
            return alert("Adicione um titulo para o prato")
        }
      
        if (!description) {
            return alert("Adicione uma descrição para o prato")
        }
      
        if (!category) {
            return alert("Adicione um categoria para o prato")
        }
      
        if (!price) {
            return alert("Adicione um preço para o prato")
        }
      
        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar")
        }
      
        api.put(`/dishes/${idDish}`, { name, description, price, category, ingredients })

        const formData= new FormData();
        formData.append("image", imageFile);

        api.patch(`/dishes/ImageDish/${idDish}`, formData)
        
        alert("Prato modificado com sucesso")
        navigate("/")
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${idDish}`)
            
            const { name, description, category, price, ingredients, imageFile } = response.data;
            setTitle(name);
            setDescription(description);
            setCategory(category);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
            setImageFile(image)
        }
    
        fetchDish();
    }, [])

    async function handleRemoveDish(){
        const confirm = window.confirm(`Deseja realmente deletar o prato ${dish.name} do cardápio?`)

        if(confirm){
            await api.delete(`/dishes/${idDish}`)
            navigate("/")
        }

    }

    useEffect(()=>{
        async function fetchNameDish(){
            const ApiResponse = await api.get(`/dishes/${idDish}`)
            setDish(ApiResponse.data)
        }

        fetchNameDish()
    }, [idDish])

    return (
        <Container>
            <Header/>

            <DishNewMain>
                <Link to="/">
                    <ButtonBackToPage/>
                </Link>
                <DishNewTitle>Editar Prato</DishNewTitle>
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
                                placeholder={dish.name}
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </DishNewLabel>
                        <DishNewLabel>
                            <DishNewLabelP>
                                Categoria
                            </DishNewLabelP>
                            <DishNewSelect value={category} onChange={e=>setCategory(e.target.value)}>
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
                                value={price}
                                onChange={event => setPrice(event.target.value)}
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
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />                               
                        </DishNewLabel>
                    </DishNewDivDesktop>
                    <DishEditButtons>
                        <Button
                            className="buttonDelete"
                            type="submit"
                            title="Excluir prato"
                            onClick={handleRemoveDish}
                        />
                        <Button
                            className="buttonSave"
                            type="submit"
                            title="Salvar alterações"
                            onClick={handleEditDish}
                        />
                    </DishEditButtons>
                    
                </Form>
            </DishNewMain>

            <Footer />



        </Container>
    )
}