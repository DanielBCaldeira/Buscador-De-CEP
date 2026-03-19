import "./Navbar.css"
import { MapPinHouse, Menu} from "lucide-react"

export default function Navbar(){
    return(
    <div className="navbar-container">
        <div className="logo">
        <MapPinHouse size={30} color="blue"/>
        <h3>Buscar CEP</h3>
        </div>
        <Menu size={30}/>
    </div>
    )
}