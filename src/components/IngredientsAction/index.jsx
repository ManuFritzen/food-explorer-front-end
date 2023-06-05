import { 
    Container,
    InputNewIngredient,
    IngredientActionButton
} from './styles'
import { FiPlus, FiX } from 'react-icons/fi';

export function IngredientsAction({isNew, value, onClick, ...rest}) {

    return(
        <Container isNew={isNew}>
            <InputNewIngredient 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <IngredientActionButton
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete' }
            >
                { isNew ? <FiPlus/> : <FiX/> }

            </IngredientActionButton>
        </Container>
    );

}