import { Link } from "react-router-dom"
import {} from "../../assets/css/index.css"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"
import { LiaSignOutAltSolid } from "react-icons/lia"


export function Header() {
    async function handleLogout() {
        await signOut(auth)
    }


    return (
        // aqui a gnt tem q deixar com um fundo atras, deixar um espaçamento bom e tirar essa cor roxa de qnd ja visitou
        <header >
            <nav>
                <div className="navbar">
                    <Link to="/">
                    <p>Home</p>
                    </Link>
                    <Link to="/admin">
                        <p>Cadastrar item</p>
                    </Link>
                    <Link to="/table">
                        <p>Ver Itens</p>
                    </Link>

                    <button className="deslogar" onClick={handleLogout} >
                        <LiaSignOutAltSolid size={30}  color="#FA2A20" />
                    </button>
                </div>
            </nav>
        </header>
    )
}