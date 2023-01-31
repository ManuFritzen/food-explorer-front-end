import {Container} from './styles';

import BoloDamasco from "../../assets/boloDamasco.png"

export function Plates({ PlatesName }) {

    return (
      <Container>
          <span>{PlatesName == "Bolo de Damasco" ? <img src={BoloDamasco} alt=""/> : ""}</span>
          
  
      </Container>
      );
  }