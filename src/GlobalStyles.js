import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
* {
    box-sizing: border-box; 
}

body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
}

input, button, textarea {
    font-size: inherit;
}
`;
export default Globalstyles;
