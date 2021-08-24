import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"


document.body.style = "background: #F5F5F5"

export const Header = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #FFCB05;
height: 80px;
margin: 7px; 
h2{
    font-size: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    text-shadow: 1px 1px 1px blue, 2px 1px 0px black;
}
`
const CardPokemons = styled.div`
display: flex; 
flex-direction: row;
align-items: center;
justify-content: center;

div{
    background-color: white;
    height: 270px;
    width: 250px;
    margin: 10px;
    box-shadow: 0px 0px 4px #BAB9C7;
}` 

export const ContainerButton = styled.div`


button{
    background-color: white;
    cursor: pointer;
    border-radius: 2px;
    border: 2px solid #3A5EA9;
    margin: 13px;
    width: 160px;
    height: 50px;
:hover{
    background-color: #3A5EA9;
}
}
`

export const Home = () =>{

const history = useHistory()

const irParaPokedex = () => {
    history.push("/Pokedex")
}

const irParaDetalhes = () => {
    history.push("/Detalhes")
}
    return(
        <div>
        <Header>
            <h2>Lista de Pokémons</h2>
        </Header>
           <ContainerButton>
            <button onClick={irParaPokedex}>Ir para Pokedex</button>
            <button>Adicionar a Pokedex</button>
            <button onClick={irParaDetalhes}>Ver detalhes</button>
          </ContainerButton>
      
        <CardPokemons>
            <div>Pokemon 1
            </div>
        </CardPokemons>

      <CardPokemons>
          <div>Pokemon 2
          </div>
        </CardPokemons>

      <CardPokemons>
          <div>Pokemon 3
          </div>
     </CardPokemons>
            </div>
    )
}
