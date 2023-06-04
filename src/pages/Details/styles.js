import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const DetailMain = styled.main`
    margin: 0 123px;
   
`;

export const Content = styled.div`
    width: 316px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 41px;      
    
    .button{
        width: 100%;
        margin-top: 30px;
        margin-bottom: 48px;
    } 

    @media screen and (min-width: 1000px){
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        
        .button{
            width: max-content;
        }
    } 
`;

export const DetailImage = styled.img`
    width: 70%;

    @media screen and (min-width: 1000px){
        width: 390px;
        margin-bottom: 150px;
    }
`;

export const DetailInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 1000px){
        max-width: 687px;
    }
`;

export const DetailDescriptionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 140%;
    color: #E1E1E6;

    @media screen and (min-width: 1000px){
        text-align: left;
        font-size: 40px;
    }
`;

export const DetailDescription = styled.p`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #E1E1E6;

    @media screen and (min-width: 1000px){
        text-align: left;
        font-size: 24px;
    }
`;

export const DetailIngredients = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 24px;
    margin-top: 24px;
    padding: 0;
    flex-wrap: wrap;

    @media screen and (min-width: 1000px){
        justify-content: left;
    }
`;

export const DetailPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
`;

export const Price = styled.strong`
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    text-align: center;
    color: #82F3FF;
`;

export const DetailCount = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 20px;
    line-height: 160%;
`;

export const DetailOperation = styled.span`
    font-size: 18px;
`;