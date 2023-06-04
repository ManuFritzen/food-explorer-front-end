import styled from "styled-components";

export const Container = styled.div `
    width: 210px;
    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 24px;
    gap: 12px;
    padding : 24px;

    .linkDetails{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media screen and (min-width: 1000px) {
        width: 304px;
        gap: 15px; 
        
        .linkDetails{
            gap: 15px;
        }
    }
    
`;



export const DishCardImage = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 50%;
    z-index: 99;
    cursor:pointer;
    margin: auto;

    @media screen and (min-width: 1000px) {
        width: 176px;
        height: 176px;
    }
`;

export const DishCardContent = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 1000px) {
        gap: 15px;
    }   
`;

export const DishCardTitle = styled.h3`
    width: max-content;
    color: #E1E1E6;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;

    @media screen and (min-width: 1000px) {
        font-weight: 700;
        font-size: 24px;
    }
`;
export const DishCardControl = styled.div`
width: 100%;
    align-items: center;
    font-size: 20px;


    .buttonControl{
        width : 100% ;
        height:32px;
        margin-top: 16px;
    }

    @media screen and (min-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 16px;

        .buttonControl{
            width: max-content;
            height: 48px;
        }
    }

`;
export const DishCardCount = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    >span:nth-child(1){
        cursor: pointer;
    }
    >span:nth-child(3){
        cursor: pointer;
    }
`;

export const DishCardPrice = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color:  #82F3FF; 

    @media screen and (min-width: 1000px) {
        font-size: 32px;
    }
    
`;

export const DishCardFavorites = styled.button`
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 16px;

    .linkPencil{
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    :hover{
        color: ${({theme}) => theme.COLORS.RED};        
    }
`;