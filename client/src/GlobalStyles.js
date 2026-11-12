import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #1C092B;
        color: #fff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
    }
    :root {
        --c0: #1C092B;
        --c1: #000;
        --c2: #fff;
        --u1: #008E4F;
        --u2: #EF8122;
        --u4: #FFE300;
        --u1a: #C8C2CC;
        --u4a: #7EA4BB;
        --u5: #0083C9;
        --ua: #85BE00;
        --ub: #72A300;

    }
    button {
        border: none;
        border-radius: 0;
        cursor: pointer;
        padding: 10px;
    }
    p {
        margin: 15px;
    }
    section {
        margin: 15px;
    }
`;
