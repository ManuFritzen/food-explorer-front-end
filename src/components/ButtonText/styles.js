import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    width: 100%;
`;