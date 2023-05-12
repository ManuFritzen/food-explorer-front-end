import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10.74px;
    justify-content: center;  
`;

export const LogoImage = styled.img`
    width: 43.31px;
`

export const LogoTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 10.74px;
    font-size: 37px;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        
    }
`