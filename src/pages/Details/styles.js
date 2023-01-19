import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";
   
    > main {
        > div {
            .backToPage {
                background: transparent;
                border: none;
                color: ${({ theme   }) => theme.COLORS.GRAY_1};
                display: flex;
                align-items: center;
                gap: 11px;
                font-weight: 500;
                font-size: 24px;
                margin-top: 24px;
                /* margin-bottom: 41px; */
                padding-left: 154px;
            }
            svg {
                font-size: 22px;
                color: ${({ theme   }) => theme.COLORS.WHITE};
            }
        }
       
    }
`;

export const Content = styled.div`
        padding: 60px 122px;
        display: flex;
        /* align-items: center; */
        gap: 41px;
        grid-area: content;
        .plate {
        width: 390px;
        height: 390px;
        }
        > .information {
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            width: 600px;
            .description h2{
                font-weight: 500;
                font-size: 40px;
                line-height: 140%;
                color: #E1E1E6;
            }
            .description p {
                font-weight: 400;
                font-size: 24px;
                color: #E1E1E6;
                margin-top: 8px;
            }
            .ingredients {
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 23px;
                margin-top: 27px;
            }
            .price {
                display: flex;
                align-items: center;
                gap: 40px;
                margin-top: 40px;
                strong {
                    font-weight: 400;
                    font-size: 32px;
                    line-height: 160%;
                    text-align: center;
                    color: #82F3FF;
                }
                .count {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    font-size: 20px;
                    line-height: 160%;
                    span {
                        font-size: 18px;
                    }
                }
            
                button {
                    width: 100px;
                }
            }
        }
`;