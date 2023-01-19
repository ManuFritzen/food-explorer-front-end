import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;
    padding: 16px 36px 16px 36px;
    gap: 11px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;

    &:disabled {
        opacity: 0.5;
    }

    
   
`;