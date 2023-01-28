import { Container } from './styles';
import { Button } from '../Button';
import { AiOutlineHeart } from 'react-icons/ai';
import SpaguettiGambe from "../../assets/spaguetiGambe.png" 

export function DishCard(props) {
    

    return (
        <Container>

            <img src={SpaguettiGambe} alt="Spaguetti GAmbe" />

            <button>
                <h3>{props.title}</h3>
            </button>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ {props.price}</strong>

            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>

                <Button title={"Incluir"}/>
            </div>
            
            <button className='favorites'>
                <AiOutlineHeart/>
            </button>

        </Container>
    );
}