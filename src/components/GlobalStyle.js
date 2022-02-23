import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //for adding style to whole website just like in css *

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1500px){
            font-size:80% ;
        }
        @media (max-width:1400px){
            font-size:76% ;
        }
        @media (max-width:1000px){
            font-size:70% ;
        }
        @media (max-width:856px){
            font-size: 68%;
        }
        

    }
   body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;//to remove the issue of right side space over body due to scacling up animation
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
    font-size: 3.6rem
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

::-webkit-scrollbar{
    width: 9px;
}
::-webkit-scrollbar-thumb{
    background:linear-gradient(transparent,#23d997);
    border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover{
    background:linear-gradient(transparent,#D96ED4);
}
`;

export default GlobalStyle;
