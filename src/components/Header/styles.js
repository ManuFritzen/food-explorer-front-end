import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    padding: 123px auto;
    gap: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 104px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};

    .logo{
        display: flex;
        align-items: center;
        margin-left: 123px;
        gap: 11.23px;


        img{
           width : 29.2px;
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

    .input{
        width: 410px;
        height: 48px;

        margin: 28px 32px;
    }

    .logout{
        background: none;
        border: none;
        margin-right: 128px;
    }
`