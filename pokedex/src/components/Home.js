import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios'
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
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 16px;
   background-color: white;
   width: 360px;
   height: 210px;
   box-shadow: 1px 0px 4px #BAB9C7;
`
export const ContainerButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 240px;
margin-top: 140px;
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
export const ContainerButtonHeader = styled.div`
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
export const Home = () => {
    const [pokemon, setPokemon] = useState([])
     const [fotoPokemon,setFotoPokemon ] = useState([])
    const mostrarListaPokemon = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/"
        axios.get(url)
            .then((res) => {
                //  console.log("FOI",res.data.results)
                setPokemon(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        mostrarListaPokemon()
    }, [])
//    //integraçao API para mostrar foto
    const mostrarFotoPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/2`
        axios.get(url)
            .then((res) => {
                 console.log("passando as imagens",res.data.sprites)
                setFotoPokemon(res.data.sprites.front_default)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        mostrarFotoPokemon()
    },[])
    //
    const history = useHistory()
    const irParaPokedex = () => {
        history.push("/Pokedex")
    }
    const irParaDetalhes = () => {
        history.push("/Detalhes")
    }
    const passaNome =(passaNome)=>{
        console.log("o nome que está sendo recebido é",passaNome)
        // mostrarFotoPokemon(passaNome)
    }
    const todosPokemons = pokemon.map((poke) => {
        return (
            <CardPokemons key={poke.name} >
                
            <p><b>Nome: </b>{poke.name} {passaNome(poke.name)}
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/4.png" />
             </p> 
             <ContainerButton>
            <button>Adicionar a Pokedex</button>
            <button onClick={irParaDetalhes}>Ver detalhes</button>  
            </ContainerButton>  
               </CardPokemons>
        )
    })
     //map das fotos do pokemon
    const imagem = fotoPokemon && fotoPokemon.sprites && fotoPokemon.map((foto) => {
        return (
            <CardPokemons >
                <p>Foto</p>
                
                </CardPokemons>
        )
    })
    return (
        <div>
            <Header>
                <h2>Lista de Pokémons</h2>
            </Header>
            <ContainerButtonHeader>
            <button onClick={irParaPokedex}>Ir para Pokedex</button>
            </ContainerButtonHeader>
            <CardPokemons>
           {todosPokemons}
           {imagem}
            </CardPokemons>
     </div>
    )
}