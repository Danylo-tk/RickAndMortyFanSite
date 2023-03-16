import { createGlobalStyle } from "styled-components";
import palette from "./palette";

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Roboto', sans-serif;
        font-size: calc(10 / 16 * 100%);
        font-weight: 400;
        color: #fff;
        background-color: ${palette.bgColor};
    }

    * {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
