import { FormEvent, useState } from "react"
import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { } from "../../assets/css/index.css"
export function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (email === "" || password === "") {
            alert("preencha todos os campos")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

                navigate("/admin", { replace: true })
            })
            .catch((error) => {
                console.log("ERRO AO FAZER LOGIN")
                console.log(error)
            })

    }

    return (
        <div className="login">
            <img className="logo" src="src\assets\img\logo.png"/>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="inputs">
                <input
                    className="input"
                    type="email" value={email} placeholder="Fulano@fulano.com" id="" onChange={(e) => setEmail(e.target.value)}

                />
                <input type="password" value={password} placeholder="*******" className="input" id="" onChange={(e) => setPassword(e.target.value)} />
                </div>    
                <button className="entrar">Entrar</button>
                
            </form>
            {/* aqui a gente so deixa os inputs mais bonitinhos e deixa centralizado, tenta usar um template "padrão" tipo, com a msm paleta de cores no site todo  */}
        </div>
    )
}