import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    gap: 32px;
    padding: 28PX;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 104px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};

   

    @media screen and (min-width: 1024px) {
        justify-content: space-around;
        padding: 24px 87px;
    }
    @media screen and (min-width: 1100px) {
        justify-content: space-around;
        padding: 24px 123px;
    }

    .input{
        min-width: 340px;
    }

    .foodOrder{
        display: none;
        //width: 500px; 
        
        @media screen and (min-width: 1024px) {
        display: block;
        //width: 216px;
        }
    }

`;

export const HeaderMenu = styled.label`
    color: ${({theme}) => theme.COLORS.WHITE};
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const MenuTitle = styled.p`
    display: none;
`;

export const HeaderLogo = styled.div`
    width: 390px;

    h1{
        font-size: 21px;
    }
    img{
        width: 24px;
    }
`;

export const HeaderExit = styled.img`
    background: none;
    border: none;
    margin-top: 10px;
    //display: none;

    @media screen and (min-width: 1024px) {
        display: block;
    }
`;

export const CouponAmount = styled.div`   

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;
export const AmountNumber = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 90px;
    font-size: 14px;
    position: relative;
    margin-bottom: -10px;
    right: -15px;


`;

export const CouponImg = styled.img`
    color: ${({theme})=> theme.COLORS.WHITE};
`;

export const MenuMobile = styled.div`
    display: none;
    position: absolute;
    margin-top: 650px;
    width: 90%;
    height: 500px;
    //border: 1px solid red;;
    //width: 100%;
    background: ${({theme})=> theme.COLORS.BACKGROUND_PRIMARY};    

    @media screen and (min-width: 1024px) {
        height: auto;
        position: relative;
        display: flex;
        width: 100%;
        gap: 32px;
        margin-top: auto;
        background: none;
    }
    
`;
