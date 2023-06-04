import { Container,
    OptionsTitle,
    OptionsContent
} from './styles';

export function Options({ title, children }) {
    return(
        <Container>
            <OptionsTitle>{title}</OptionsTitle>
            <OptionsContent>{children}</OptionsContent>
        </Container>
    );
}