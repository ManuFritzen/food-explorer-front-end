import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background:  ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_2};
    color:  ${({ theme }) => theme.COLORS.GRAY_2};
    border: ${({ theme, isNew }) => isNew ? `1px dashed  ${theme.COLORS.GRAY_2}` : "none"};
    border-radius: 10px;
    padding-right: 16px;
    > button {
        border: none;
        background: none;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        padding: 10px;
    }
    input {
        height: 32px;
        width: 118px;
        padding: 6.5px 0 6.5px 16px;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        font-weight: 400;   
        font-size: 16px;
       
        &::placeholder {
            color:  ${({ theme }) => theme.COLORS.GRAY_2};
            font-weight: 400;
            font-size: 16px;
        }
    }
`;