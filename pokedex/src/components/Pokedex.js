import React from "react"
import { Header } from "./Home"
import { useHistory } from "react-router-dom"
import { ContainerButtonHeader } from "./Home"
import logo from "../img/logo.png"

const Pokedex = () => {

    const history = useHistory()

    const irParaInicio = () => {
        history.goBack("/")
    }

    return (
        <div>
            <Header>
                <img src={logo} />
            </Header>
            
            <ContainerButtonHeader>
                    <button onClick={irParaInicio}>Voltar para lista de pokemons</button>
            </ContainerButtonHeader>
                </div>
    )
}

export default Pokedex