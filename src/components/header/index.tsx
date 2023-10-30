import { Link } from "react-router-dom"

import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"
import { LiaSignOutAltSolid } from "react-icons/lia"


export function Header() {
    async function handleLogout() {
        await signOut(auth)
    }


    return (
        // aqui a gnt tem q deixar com um fundo atras, deixar um espaçamento bom e tirar essa cor roxa de qnd ja visitou
        <header>
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/admin">
                        Cadastrar item
                    </Link>
                    <Link to="/table">
                        Ver Itens
                    </Link>

                    <button onClick={handleLogout} >
                        <LiaSignOutAltSolid size={18} color="#FA2A20" />
                    </button>
                </div>
            </nav>
        </header>
    )
}