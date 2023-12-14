import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Work sans","sans-serif";
}
html{
    overflow-x:hidden;
    scroll-behavior: smooth;
}
p{
    font-family: 'Rethink Sans', sans-serif;
    font-size:16px;
}

.myButton{
    background-color: rgb(70, 70, 185);
    font-family: 'Karla', sans-serif;
    font-size:13px;
}
.myButton:hover{
    color: rgb(70, 70, 185);
    background-color: white;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Nunito', sans-serif;
}


.mybutton {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-weight: 700;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
   }
   
   .mybutton::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:#bc4749;
    // background-color: rgb(252, 70, 100);
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
   }
   
   .mybutton:hover::before {
    transform: translateX(0);
   }



`