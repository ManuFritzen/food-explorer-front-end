import { 
    Container, 
    DishCardImage,
    DishCardContent,
    DishCardTitle,
    DishCardDescription,
    DishCardControl,
    DishCardFavorites,
    DishCardPrice
} from './styles';
import { useState } from 'react';
import { Button } from '../Button';
import { FiHeart } from 'react-icons/fi';

export function DishCard(props) {

    const[ dishAdd, setDishAdd] = useState(1);
    
    function addDish(){
        if(dishAdd>0){
            setDishAdd(dishAdd+1);
        }
    }

    function removeDish(){
        if(dishAdd>1){
            setDishAdd(dishAdd-1);
        }
    }
    

    return (
        <Container>
            <DishCardImage src={props.image} alt={props.alt} />
            <DishCardContent>
                <DishCardTitle>
                    {props.title}
                </DishCardTitle>
                <DishCardDescription>
                    {props.text}
                </DishCardDescription>
                <DishCardPrice>R$ {props.price}</DishCardPrice>
            </DishCardContent>

            <DishCardControl>
                <span onClick={removeDish}>-</span>
                <span>{dishAdd<10?`0${dishAdd}`:dishAdd}</span>
                <span onClick={addDish}>+</span>

                <Button title={"Incluir"}/>
            </DishCardControl>
            
            <DishCardFavorites>
                <FiHeart/>
            </DishCardFavorites>

        </Container>
    );
}