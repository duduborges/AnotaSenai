import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { } from "../../assets/css/index.css"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"
import { BiLogIn } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { Navigate } from "react-router-dom"
import { ImPencil2 } from "react-icons/im"



export function Header() {
    const { signed, loadingAuth } = useContext(AuthContext)

    async function handleLogout() {
        await signOut(auth)

    }


    return (
        // aqui a gnt tem q deixar com um fundo atras, deixar um espaçamento bom e tirar essa cor roxa de qnd ja visitou
        <header >
            <nav>
                <div className="navbar">
                    <div><ImPencil2 size={30} color={"#95BFA4"} /></div>

                    <a href="#inicio"><p>Início</p></a>

                    <a href="#post"><p>Post-it</p></a>
                    <a href="#fav"><p>Favorito</p></a>
                    <a href="#contact"><p>Contato</p></a>
                    <a href="#team"><p>Equipe</p></a>
                    <a href="#help"><p>Ajuda</p></a>


                    {!loadingAuth && signed && (
                        <div id="in-out">
                            <p onClick={handleLogout}>Sair</p>
                        </div>


                    )}
                    {!loadingAuth && !signed && (
                        <div id="in-out">
                            <Link to={"/login"}>
                                Entrar
                            </Link>
                        </div>

                    )}



                </div>
            </nav>
        </header>
    )
}