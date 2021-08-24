import React from "react"
import { Header } from "./Home"
import { useHistory } from "react-router-dom"
import { ContainerButton } from "./Home"

const Pokedex = () => {

    const history = useHistory()

    const irParaInicio = () => {
        history.goBack("/")
    }

    return (
        <div>
            <Header>
                <h2>Pokédex</h2>
            </Header>
            
            <ContainerButton>
                    <button onClick={irParaInicio}>Voltar para lista de pokemons</button>
            </ContainerButton>
                </div>
    )
}

export default Pokedex