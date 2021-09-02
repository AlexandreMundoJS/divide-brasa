import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        flex-direction: column;
    }

    body, :-ms-input-placeholder, button{
        font: 16px Roboto, sans-serif;
    }
    button{
        cursor: pointer;
    }
`;
