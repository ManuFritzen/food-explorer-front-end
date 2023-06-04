import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
    border: none;
    color: ${({ theme   }) => theme.COLORS.GRAY_1};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 11px;    
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 5%;

    svg {
        font-size: 22px;
        color: ${({ theme   }) => theme.COLORS.WHITE};
    }
`;

export const ButtonBackToPageText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;
    color: #E1E1E6;
`;