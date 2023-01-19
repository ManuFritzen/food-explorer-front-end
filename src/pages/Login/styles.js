import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .logo{
        height: 100vh;
        display: flex;
        align-items: center;
        gap: 19.01px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;

        img{
            width: 49.03px;
        }

    }

    form{
        width: 476px;       
        padding: 64px;
        border-radius: 16px;
       
        

        background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};

        h2{
            margin-top:32px;
            margin-bottom: 10px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: ${({theme}) => theme.COLORS.GRAY_2};
        }

        .button{
            margin-top: 32px;
            margin-bottom: 32px;
        }

       
    }
`