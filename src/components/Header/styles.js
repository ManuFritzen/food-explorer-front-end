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

    .input{
        width: 410px;
        height: 48px;
        margin: 28px 32px;

        :focus{
            outline: none;
        }
    }
    .foodOrder{
        width: 500px;       
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 123px;
    gap: 11.23px;
`;

export const HeaderLogoImage = styled.img`
    width : 29.2px;
`;

export const HeaderLogoText = styled.h1`
    width: 151px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25.1109px;
    line-height: 29px;
`;

export const HeaderButtonsIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    .heart:hover{
        color: ${({theme})=> theme.COLORS.RED};
        
    }
`;

export const HeaderExit = styled.img`
    background: none;
    border: none;
    margin-right: 128px;
`;