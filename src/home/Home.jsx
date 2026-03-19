import "./Home.css"

export default function Home(){
    return(
        <div className="container">
            <h1>
                Busque Seu Endereço Rapidamente
            </h1>
            <div className="home-content">
                <input type="text" />
                <button>Buscar</button>
            </div>
        </div>
    )
}