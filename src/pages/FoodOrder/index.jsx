import {Container} from './styles';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function FoodOrder(){
    return(
        <Container>
            <Header/>
            <main>
                <Link to="/">
                    <button className="button-back" >
                        <IoIosArrowBack />
                        voltar
                    </button>
                </Link>
            </main>

            <Footer/>
        </Container>
    )
}