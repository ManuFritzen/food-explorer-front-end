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
import {GoPencil} from 'react-icons/go'
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

export function DishCard(props) {
    const {user} = useAuth();

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
            {
                user.name !== "admin" ?
                <>
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
                </>
                :
                <>
                    <DishCardImage src={props.image} alt={props.alt} />
                    <DishCardContent>
                        <DishCardTitle>
                            {props.title}
                        </DishCardTitle>                        
                        <DishCardPrice>R$ {props.price}</DishCardPrice>
                    </DishCardContent>                    

                    <DishCardFavorites>
                        <Link className='linkPencil' to="/details">
                            <GoPencil/>
                        </Link>
                    </DishCardFavorites>
                </>
            }

        </Container>
    );
}