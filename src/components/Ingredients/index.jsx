import {Container} from './styles';
import Alface from "../../assets/alface.png";
import Ameixa from "../../assets/ameixa.png";
import Amendoas from "../../assets/amendoas.png";
import Aniz from "../../assets/aniz.png";
import Cafe from "../../assets/cafe.png";
import Camarao from "../../assets/camarao.png";
import Canela from "../../assets/canela.png";
import Damasco from "../../assets/damasco.png";
import Farinha from "../../assets/farinha.png";
import Limao from "../../assets/limao.png";
import Maca from "../../assets/maca.png";
import Macarons from "../../assets/macarons.png";
import Maracuja from "../../assets/maracuja.png";
import Massa from "../../assets/massa.png";
import Ovo from "../../assets/ovo.png";
import Pao from "../../assets/pao.png";
import PaoNaan from "../../assets/paoNaan.png";
import Pepino from "../../assets/pepino.png";
import Pessego from "../../assets/pessego.png";
import Pesto from "../../assets/pesto.png";
import Presunto from "../../assets/presunto.png";
import Rabanete from "../../assets/rabanete.png";
import Rucula from "../../assets/rucula.png";
import Tomate from "../../assets/tomate.png";
import Whisky from "../../assets/whisky.png";


export function Ingredients({ IngredientsName }) {

    return (
        <Container>
            <span>{IngredientsName == "alface" ? <img src={Alface} alt=""/> : ""}</span>
            <span>{IngredientsName == "ameixa" ? <img src={Ameixa} alt=""/> : ""}</span>
            <span>{IngredientsName == "amêndoas" ? <img src={Amendoas} alt=""/> : ""}</span>
            <span>{IngredientsName == "aniz" ? <img src={Aniz} alt=""/> : ""}</span>
            <span>{IngredientsName == "café" ? <img src={Cafe} alt=""/> : ""}</span>
            <span>{IngredientsName == "camarão" ? <img src={Camarao} alt=""/> : ""}</span>
            <span>{IngredientsName == "canela" ? <img src={Canela} alt=""/> : ""}</span>
            <span>{IngredientsName == "damasco" ? <img src={Damasco} alt=""/> : ""}</span>
            <span>{IngredientsName == "farinha" ? <img src={Farinha} alt=""/> : ""}</span>
            <span>{IngredientsName == "limão" ? <img src={Limao} alt=""/> : ""}</span>
            <span>{IngredientsName == "maçã" ? <img src={Maca} alt=""/> : ""}</span>
            <span>{IngredientsName == "macarons" ? <img src={Macarons} alt=""/> : ""}</span>
            <span>{IngredientsName == "maracujá" ? <img src={Maracuja} alt=""/> : ""}</span>
            <span>{IngredientsName == "massa" ? <img src={Massa} alt=""/> : ""}</span>
            <span>{IngredientsName == "ovo" ? <img src={Ovo} alt=""/> : ""}</span>
            <span>{IngredientsName == "pão" ? <img src={Pao} alt=""/> : ""}</span>
            <span>{IngredientsName == "pão naan" ? <img src={PaoNaan} alt=""/> : ""}</span>
            <span>{IngredientsName == "pepino" ? <img src={Pepino} alt=""/> : ""}</span>
            <span>{IngredientsName == "pessêgo" ? <img src={Pessego} alt=""/> : ""}</span>
            <span>{IngredientsName == "pesto" ? <img src={Pesto} alt=""/> : ""}</span>
            <span>{IngredientsName == "presunto" ? <img src={Presunto} alt=""/> : ""}</span>
            <span>{IngredientsName == "rabanete" ? <img src={Rabanete} alt=""/> : ""}</span>
            <span>{IngredientsName == "rúcula" ? <img src={Rucula} alt=""/> : ""}</span>
            <span>{IngredientsName == "tomate" ? <img src={Tomate} alt=""/> : ""}</span>
            <span>{IngredientsName == "whisky" ? <img src={Whisky} alt=""/> : ""}</span>  
        </Container>
    );
}