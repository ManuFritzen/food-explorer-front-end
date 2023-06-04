import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        overflow-x: hidden;
        background: ${({theme})  => theme.COLORS.BACKGROUND_PRIMARY };
        color: ${({theme})  => theme.COLORS.WHITE };
        font-family: 'Roboto', sans-serif;

    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {       
        filter: brightness(0.9);
    }
`;
