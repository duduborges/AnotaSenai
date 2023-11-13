import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { } from "../../assets/css/index.css"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"




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
                    <div><img height={40} width={90} src="src/assets/img/banner_anota.png" alt="" /></div>

                    <a href="#inicio"><p>Início</p></a>

                    <a href="#post"><p>Post-it</p></a>
                    <a href="#team"><p>Equipe</p></a>
                    <a href="#contact"><p>Contato</p></a>
                    <Link to={"/help"}>Ajuda</Link>

                    <Link to={"/post"}>Meus links</Link>


                    {!loadingAuth && signed && (
                        <div id="in-out">
                            <p onClick={handleLogout}>Sair</p>
                        </div>


                    )}
                    {!loadingAuth && !signed && (
                        <div id="in-out">

                            <p><Link to={"/login"}>Entrar</Link></p>


                        </div>

                    )}



                </div>
            </nav>
        </header >
    )
}