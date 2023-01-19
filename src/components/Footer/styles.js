import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 77px;
    padding: 123px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};


    .logo{
        display: flex;
        align-items: center;
        margin-left: 123px;
        gap: 11px;
        color: rgba(255, 255, 255, 0.3);

        img{
           width : 29.2px;
           color: rgba(255, 255, 255, 0.3);
        }

        h1{
            width: 151px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 25.1109px;
            line-height: 29px;  

        }        
    }

    h2 {
        margin-right: 123px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        
        color: rgba(255, 255, 255, 0.3);

    }
`