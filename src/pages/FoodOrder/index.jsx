import {Container, Main} from './styles';

import { BsXDiamond } from 'react-icons/bs'
import { AiOutlineCreditCard } from 'react-icons/ai'
import QrCode from '../../assets/qr-code.svg'

import { useState } from 'react';


import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ItemOrder } from '../../components/ItemOrder';
import { Payment } from '../../components/Payment';
import { Footer } from '../../components/Footer';

import Ameixa from '../../assets/boloDamasco.png'

export function FoodOrder(){

    const [paymentType, setPaymentType] = useState('card');

    const pixSelected = paymentType === 'pix';
    const cardSelected = paymentType === 'card';

    function handlePix() {
        setPaymentType('pix');  
    }
    
    function handleCreditCard() {
        setPaymentType('card');
    }

    /*Mocando o back */

    const dishesPayment = [
        {
            image: Ameixa,
            quant: 1,
            title: 'torrada de parma',
            price: 79.97
        },
        {
            image: Ameixa,
            quant: 2,
            title: 'spagueti',
            price: 79.97
        },
    ]

    let totalPrice = 0;

    dishesPayment.forEach(dish => {
        totalPrice += dish.price * dish.quant;
    });

    return(
        <Container>
            <Header/>

            <Main>
                             
                <section className='allOrders'>
                    <h2>Meu pedido</h2>

                    {dishesPayment.map(prato => (<ItemOrder
                        image={prato.image}
                        qntd={prato.quant}
                        title={prato.title}
                        price={prato.price}
                    />))}

                    

                    <span className='priceItems'>Total: R$ {totalPrice}</span>
                </section>


                <section className='paymentMethods'>
                    <h2>Pagamento</h2>
                    
                    <div className='paymentBox'>
                        <div className='paymentMethods__wrapper'>
                            <button disabled={pixSelected} onClick={handlePix}>
                                <BsXDiamond size={24}/>
                                PIX
                            </button>

                            <button disabled={cardSelected} onClick={handleCreditCard}>
                                <AiOutlineCreditCard size={24}/>
                                Crédito
                            </button>

                        </div>

                        <div className='paymentForms'>
                            {paymentType === 'pix' ? <img src={QrCode} /> : <Payment />}
                        </div>
                    </div>
                </section>
                
            </Main>

            <Footer/>
        </Container>
    )
}