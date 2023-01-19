import { Container } from './styles';
import { Ingredients } from '../Ingredients';

export function IngredientTag({ title, ...rest }) {
    return(
        <Container {...rest}>
            <Ingredients IngredientsName={title}/>
            {title}
        </Container>
    );    
}