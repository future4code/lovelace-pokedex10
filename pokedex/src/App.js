import React from "react"
import { Home } from "./components/Home"
import Pokedex from "./components/Pokedex"
import { Detalhes } from "./components/Detalhes"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./components/styles/global"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/Pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"/Detalhes"}>
          <Detalhes />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}
export default App