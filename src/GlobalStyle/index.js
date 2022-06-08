import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        --Gray-100: #333333;
        --Grey-50: #828282;
        --Grey-20: #E0E0E0;
        --Grey-0: #F5F5F5;

        --Negative: #E60000;
        --Warning: #FFCD07;
        --Sucess: #168821;
        --Information: #155BCB;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    
    ul, ol, li {
        list-style: none;
    }

    section, aside, div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start
    }

    button {
        cursor: pointer;

        border: none;
        border-radius: 8px;
    }

    input {
        border: 2px solid var(--Grey-20);
        border-radius: 8px;
    }

    input::placeholder {
        color: var(--Grey-20);
        font-weight: 400;
        font-size: 16px;
    }


    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 26px;
        font-weight: 700;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 700;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
    }

    h4 {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 700;
    }

    span {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
    }     
`;
