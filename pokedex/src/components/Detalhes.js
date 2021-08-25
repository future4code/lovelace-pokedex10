import React from "react"
import { Header } from "./Home"
import { useHistory } from "react-router-dom"
import { ContainerButtonHeader } from "./Home"
import styled from "styled-components"

const CardDetalhesLateral = styled.div`
display: grid;
/* grid-template-columns: 100px 100px; */

div {
   margin: 13px;
   background-color: white;
   width: 230px;
   height: 200px;
   box-shadow: 1px 0px 4px #BAB9C7;} `

export const Detalhes = () => {

    const history = useHistory()

    const irParaInicio = () => {
        history.goBack("/")
    }

    const irParaPokedex = () => {
        history.push("/pokedex")
    }
    return (
        <div>
            <Header>
                <h2>Detalhes</h2>
            </Header>
            <ContainerButtonHeader>
                <button onClick={irParaInicio}>Voltar</button>
                <button onClick={irParaPokedex}>Ir para pokedex</button>
            </ContainerButtonHeader>
        
            <CardDetalhesLateral> <div>Foto 1</div> </CardDetalhesLateral>
            <CardDetalhesLateral> <div>Foto 2</div> </CardDetalhesLateral>
           

        </div>
    )
}