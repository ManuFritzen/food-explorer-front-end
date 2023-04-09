import styled from "styled-components";

export const Container = styled.div `
    width: 300px;
    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;   
    padding : 40px;
    
`;



export const DishCardImage = styled.img`
    width: 176px;
    height: 176px;
    border-radius: 50%;
    z-index: 99;
`

export const DishCardContent = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
        font-weight: 400;
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.BLUE};
        margin-bottom: 18px;
    }
`;

export const DishCardTitle = styled.h3`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 24px;
`;

export const DishCardDescription = styled.p`
    width: 220px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    margin-bottom: 16px;
`;

export const DishCardControl = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 20px;

    >span:nth-child(1){
        cursor: pointer;
    }
    >span:nth-child(3){
        cursor: pointer;
    }

`;

export const DishCardPrice = styled.strong`
    font-size: 20px;
    
`;

export const DishCardFavorites = styled.button`
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 16px;

    :hover{
        color: ${({theme}) => theme.COLORS.RED};        
    }
`;