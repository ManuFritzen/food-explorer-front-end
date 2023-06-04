import { 
    Container,
    ButtonBackToPageText
} from './styles';
import { IoIosArrowBack } from "react-icons/io";


export function ButtonBackToPage(){
    return(
        <Container>            
            <IoIosArrowBack />
            <ButtonBackToPageText>
                    Voltar
            </ButtonBackToPageText>
        </Container>
    )
}