import styled from "styled-components";

export const Container = styled.span`
    
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 24px;

    @media screen and (min-width: 1024px){
        margin: 0 124px;
    }
`;

export const OptionsTitle = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;

    @media screen and (min-width: 1000px){
        font-size: 32px;
        margin-bottom: 23px;
    }
`;

export const OptionsContent = styled.div`
    width:100%;
    gap: 27px;
`;