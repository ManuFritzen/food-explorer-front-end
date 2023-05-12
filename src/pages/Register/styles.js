import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 110px;
    gap: 64px;
    //border: 1px solid red;

    @media screen and  (min-width: 1000px){
        flex-direction: row;
        justify-content: space-around;
        padding-top: 90px;
        padding-right: 108px;
        margin: auto;               
    }
`;

export const LoginForm = styled.form`
    width: 316px;       
    border-radius: 16px;   
    //background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};
    //border: 1px solid red;
    margin: auto;


    .button{
        margin-top: 32px;
        margin-bottom: 32px;
    }
    
    @media screen and  (min-width: 768px){
        width: 476px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};
        padding: 64px;
        margin-bottom: 10px;
    }
`;

export const LoginTitle = styled.h1`
    display: none;

    @media screen and  (min-width: 768px){
        display: block;
    }
`;

export const LoginLabel = styled.h2`
    margin-bottom: 8px;
    margin-top: 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({theme}) => theme.COLORS.GRAY_2};

    @media screen and  (min-width: 768px){
        width: 348px;
    }
`