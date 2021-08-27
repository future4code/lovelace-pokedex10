import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
/* 

/* 
/* Telefones em paisagem e abaixo */
@media (max-width: 480px) { 
     width: 100%;
 }

/* Telefones em paisagem a tablet em retrato */
@media (max-width: 767px) {
     /* estilos aqui */
}

/* Tablet em retrato a paisagem e desktop */
@media (min-width: 768px) and (max-width: 979px) {
     /* estilos aqui */
}

/* Desktop grande */
@media (min-width: 1200px) {
    /* estilos aqui */
}  

@media screen and (min-width: 320px) {
           body {
           font-size: 90%;
           width: 100%;
          }
 }

 @media screen and (min-width: 480px) {
            body {
            font-size: 90%;
          }
 }

`