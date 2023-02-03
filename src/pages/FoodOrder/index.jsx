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

    return(
        <Container>
            <Header/>

            <Main>
                             
                <section className='allOrders'>
                    <h2>Meu pedido</h2>

                    <ItemOrder
                    qntd={1}
                    title={"Torradas de Parma"}
                    price={79.97}
                    />

                    <ItemOrder
                    qntd={3}
                    title={"Torradas de Parma"}
                    price={25.97}
                    />

                    <ItemOrder
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />
                    
                    <ItemOrder
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <ItemOrder 
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <span className='priceItems'>Total: R$ 197,82</span>
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