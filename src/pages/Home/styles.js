import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;


   display: grid;
   grid-template-rows: 104px auto 77px;
   grid-template-areas:
   "header"
   "content"
   "footer";

   .content{
    
    grid-area: content;
    width: 100%;
    padding: 128px;
    margin-top: 32px;
   }

   .banner{
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
   
    

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;

    margin-bottom:62px;

    img{
        position: absolute;
        bottom: 0px;
        left: -53px;
        display: inline-block;    

    }

    h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.GRAY_1};   

    }

    h2{   
        padding-right: 48px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
    }
   }
   


`;