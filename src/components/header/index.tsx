import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { } from "../../assets/css/index.css"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"
import { BiLogIn } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { Navigate } from "react-router-dom"


export function Header() {
    const { signed, loadingAuth } = useContext(AuthContext)

    // async function handleLogout() {
    //     await signOut(auth)

    // }


    return (
        // aqui a gnt tem q deixar com um fundo atras, deixar um espaçamento bom e tirar essa cor roxa de qnd ja visitou
        <header >
            <nav>
                <div className="navbar">
                    <Link to="/">
                        <p>Home</p>
                    </Link><Link to="/post/new">
                        <p>Cadastrar Post-it</p>
                    </Link>

                    <Link to="/post">
                        <p>Ver Itens</p>
                    </Link>
                    {!loadingAuth && signed && (
                        <button className="deslogar" >
                            <AiOutlineUser alt="Sair" size={30} color="green" />
                        </button>

                    )}
                    {!loadingAuth && !signed && (
                        <Link to={"/login"}>
                            <BiLogIn size={30} color={"red"} />
                        </Link>
                    )}



                </div>
            </nav>
        </header>
    )
}