import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme}) => theme.COLORS.BACKGROUND_SECUNDARY};

    @media screen and (min-width: 768px) {
        justify-content: space-between;
        padding: 0 87px;
    }

`;

export const LogoFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    color: rgba(255, 255, 255, 0.3);
`;

export const LogoImageFooter = styled.img`
    width : 22px;
    color: rgba(255, 255, 255, 0.3);
`;

export const LogoTextFooter = styled.h1`
    width: 114px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
`;

export const FooterText = styled.h2`
    flex-wrap: wrap;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #FFFAF1;  
`;