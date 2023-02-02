import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;


   display: grid;
   grid-template-rows: 104px auto 77px;
   grid-template-areas:
   "header"
   "content"
   "footer";

   > main {
        grid-template-areas: content;
        padding: 38px 132px 122px 132px;

        .button-back {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            gap: 11px;
            font-weight: 500;
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.GRAY_1};
            margin-bottom: 24px;
        }
    }   
`;