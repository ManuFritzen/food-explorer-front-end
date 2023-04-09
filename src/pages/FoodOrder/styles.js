import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


   display: grid;
   grid-template-rows: 104px auto 77px;
   grid-template-areas:
   "header"
   "content"
   "footer";

   
   
   `;

export const Main = styled.main`   
    width: 100%;

    padding: 34px 123px;
    
    display: flex;
    justify-content: space-between;
   
   
    
    margin: 0 auto;
   

   
    h2 {
        font-size: 3.2rem;
        line-height: 4.5rem;
        font-weight: 500;
        color: ${({theme})=> theme.COLORS.GRAY_2};

    }

    .allOrders{    
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
     

        .priceItems{
            font-size: 2rem;
            line-height: 3.2rem;
            font-weight: 500;
        }
   }

   

    .paymentBox{
        margin-top: 3.2rem;
        height: auto;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        padding-bottom: 48px;
    }

    .paymentMethods__wrapper{
        display: flex;
        justify-content: space-between;


        button {
            width: 26.5rem;
            height: 8.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_SECUNDARY};
            color: ${({theme})=> theme.COLORS.WHITE};
            border: 1px solid rgba(255, 255, 255, 0.1);

            
            &:disabled {
                background: rgba(255, 255, 255, 0.05)
        }
        }

        .paymentForms{
            img{
                width: 27rem;
                height: 27rem;
            }
        }
    }

`;