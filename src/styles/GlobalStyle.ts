import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    

    :root {
        --color-brand-1: rgba(92,99,237,1);
        --color-brand-2: rgba(125,130,241,1);
        --color-brand-3: rgba(190,193,248,1);
        --color-brand-4: rgba(231,232,252,1);
        --color-grey-1: rgba(33,37,41,1);
        --color-grey-2: rgba(73,80,87,1);
        --color-grey-3: rgba(206,211,215,1);
        --color-grey-4: rgba(241,243,245,1);
        --color-grey-5: rgba(248,249,250,1);


        font-size: 60%;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;

        font-size: 1.6rem;
        font-family: 'Inter', sans-serif;
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }   

    body{
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    ul, ol{
        list-style: none;
    }

    button, a{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`
