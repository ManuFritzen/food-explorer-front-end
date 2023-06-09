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


export const HeaderLogo = styled.img`
    width: 197px;

    h1{
        font-size: 21px;
    }
    img{
        width: 24px;
    }
    `;

export const HeaderExit = styled.button`
    background: none;
    border: none;
    `;

export const HeaderExitImage = styled.img`
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
    margin-top: 800px;
    width: 100%;
    height: 100vh;
    z-index: 1;
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

export const MenuMobileOpen = styled.div`
    background: ${({theme})=> theme.COLORS.BACKGROUND_PRIMARY};
    position: fixed ;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;

`;

export const MenuTitle = styled.p`
    cursor: pointer;
    background: #001119;
    height: 114px;
    padding: 56px 24px 28px;
    font-style: normal;
    font-weight: 400;
    font-size: 21.1629px;
    line-height: 25px;
`;

export const MenuMobileOpenContent = styled.div`
    margin: 36px 28px;
    display: flex;
    flex-direction: column;
    .button{
        margin-top: 36px;
    }
`;

export const MenuMobileOpenButton = styled.button`
    display: flex;
    width: 100%;
    background: none;
    color:  #E1E1E6;
    border-top: none;
    border-left: none;
    border-bottom:  1px solid #192227;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    padding: 10px;
`;

