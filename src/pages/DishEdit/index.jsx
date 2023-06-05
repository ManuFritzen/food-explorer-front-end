import { 
    Container,
    DishEditMain,
    DishEditTitle, 
    Form,
    DishEditDivDesktop,
    DishEditLabel,
    DishEditLabelP,
    DishEditSelect,
    DishEditInputTextarea,
    DishEditButtons,
    DishEditIngredients, 
} from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
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
        if (!name || !description || !category || !price ) {
            return alert("preencha todos os campos")
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

            <DishEditMain>
                <Link to="/">
                    <ButtonBackToPage/>
                </Link>
                <DishEditTitle>Editar Prato</DishEditTitle>
                <Form>
                    <DishEditDivDesktop>                        
                        <DishEditLabel>
                            <DishEditLabelP>
                                Imagem do prato                            
                            </DishEditLabelP>
                            <Input
                                type="file"
                                placeholder="Selecione imagem"
                                onChange={e => setImageFile(e.target.files[0])}
                            />
                        </DishEditLabel>
                        <DishEditLabel>
                            <DishEditLabelP>
                                Nome
                            </DishEditLabelP>
                            <Input
                                type="text"
                                placeholder={dish.name}
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </DishEditLabel>
                        <DishEditLabel>
                            <DishEditLabelP>
                                Categoria
                            </DishEditLabelP>
                            <DishEditSelect placeholder={dish.category} value={category} onChange={e=>setCategory(e.target.value)}>
                                <option value="refeição">Refeição</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </DishEditSelect>
                        </DishEditLabel>
                    </DishEditDivDesktop>
                    <DishEditDivDesktop>
                        <DishEditLabel>
                            <DishEditLabelP>
                                Ingredientes
                            </DishEditLabelP>
                            <DishEditIngredients>
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
                            </DishEditIngredients>
                        </DishEditLabel>
                        <DishEditLabel>
                            <DishEditLabelP>
                                Preço
                            </DishEditLabelP>
                            <Input
                                className="inputMoney"
                                type="number"
                                placeholder={dish.price}
                                value={price}
                                onChange={event => setPrice(event.target.value)}
                            />
                        </DishEditLabel>
                    </DishEditDivDesktop>
                    <DishEditDivDesktop>
                        <DishEditLabel>
                            <DishEditLabelP>
                                Descrição
                            </DishEditLabelP>
                            <DishEditInputTextarea
                                placeholder={dish.description}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />                               
                        </DishEditLabel>
                    </DishEditDivDesktop>
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
            </DishEditMain>

            <Footer />



        </Container>
    )
}