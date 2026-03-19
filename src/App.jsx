import "./App.css"
import Navbar from "./componentes/Navbar/Navbar"
import Home from "./home/Home"
import useBuscador from "./hooks/useBuscador"

export default function App(){

  const { cep, setCep, address, buscarCep } = useBuscador()

  return(
    <>
    <Navbar/>
    <Home 
      cep={cep}
      setCep={setCep}
      address={address}
      buscarCep={buscarCep}
    />
    </>
  )
}