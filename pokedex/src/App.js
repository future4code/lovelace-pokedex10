import React from "react"
import { Home } from "./components/Home"
import  Pokedex  from "./components/Pokedex"
import { Detalhes } from "./components/Detalhes"

const App = () => {
  return (
  <div> 
    <Home />
    <Pokedex />    
    <Detalhes />
  </div>
  )
}
export default App