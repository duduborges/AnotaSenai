import { Link } from "react-router-dom"
import '../../img/logout.png'
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"



export function Header() {
    async function handleLogout() {
        await signOut(auth)
    }


    return (
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

                </div>
                <img onClick={handleLogout} src="../../img/logout.png" alt="Sair" />
            </nav>
        </header>
    )
}