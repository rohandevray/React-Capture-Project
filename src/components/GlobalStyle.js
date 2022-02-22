import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //for adding style to whole website just like in css *

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
     }
    button{
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    &:hover{
        //hover for button
        background-color:#23d997;
        color: white;
    }
  }
    h2{
    font-weight:lighter;
    font-size: 3.6rem;
    }
    h3{
    color: white;
}
    p{
    padding: 3rem 0;
    color: #cccd;
    font-size: 1.2rem;
    line-height: 150%;
}
    a{
    font-size: 1.1rem;
}
    span{
    font-weight: bold;
    color: #23d997;

}
    h4{
    font-weight: bold;
    color: #23d997;
    font-size: 2rem;
}

`;

export default GlobalStyle;
