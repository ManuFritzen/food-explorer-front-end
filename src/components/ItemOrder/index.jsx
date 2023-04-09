import { Container } from './styles'

export function ItemOrder({qntd, title, price, image}){

    let totalPrice = qntd * price

    return(
        <Container>

        <img 
            src={image}            
            alt="Foto do prato"
        />

        <div className='orderDetails'>

            <div className='details'>
                <h3>{qntd} x {title}</h3>

                <span>
                    R$ {totalPrice}
                </span>
            </div>

            <button className='deleteButton'>
                Excluir
            </button>

        </div>


        </Container>
    )
}