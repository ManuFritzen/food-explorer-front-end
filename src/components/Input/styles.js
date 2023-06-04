import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({theme}) => theme.COLORS.WHITE};
    //border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    height: 56px;


    
    svg {
        margin-left: 14px;
        //border: 1px solid red;
        //position: absolute;
        //margin-right: 275px;
        //z-index: 0;
    }


    @media screen and (min-width: 1024px){
        display: flex;
        .login{
            //border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;
        }
    }

`;

export const Inputs = styled.input`
    width: 100%;
   // border: 1px solid red;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    font-size: 16px;
    //text-align: center;
    padding-left: 14px;
    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_2};
    }

    :focus{
        outline: 0;
        ::-webkit-input-placeholder {
            color: transparent;
        }
        :-moz-placeholder { /* Firefox 18- */
            color: transparent;  
        }
        :-moz-placeholder {  /* Firefox 19+ */
            color: transparent;  
            }
        :-ms-input-placeholder {  
            color: transparent;  
        }

    }
`;