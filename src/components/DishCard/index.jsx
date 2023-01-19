import { Container } from './styles';
import { Button } from '../Button';
import { AiOutlineHeart } from 'react-icons/ai';
import SpaguettiGambe from "../../assets/spaguetiGambe.png" 

export function DishCard() {
    

    return (
        <Container>

            <img src={SpaguettiGambe} alt="Spaguetti GAmbe" />

            <button>
                <h3>Spaguetti Gambe</h3>
            </button>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 79,97</strong>

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