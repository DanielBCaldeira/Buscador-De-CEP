import "./Home.css"

export default function Home({ cep, setCep, address, buscarCep }){
    return(
        <div className="container">
            <h1>
                Busque Seu Endereço Rapidamente
            </h1>
            <div className="home-content">
                <input type="text" placeholder="Digite seu CEP..." value={cep} onChange={(e) => setCep(e.target.value)}/>
                <button onClick={buscarCep}>Buscar</button>
            </div>
        </div>
    )
}