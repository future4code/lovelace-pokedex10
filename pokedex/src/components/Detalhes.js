import React from "react"
import { Header } from "./Home"
import { useHistory } from "react-router-dom"
import { ContainerButton } from "./Home"

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
            <ContainerButton>
                <button onClick={irParaInicio}>Voltar</button>
                <button onClick={irParaPokedex}>Ir para pokedex</button>
            </ContainerButton>
        </div>
    )
}