import { FormEvent, useState } from "react"
import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
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
        <div>
            <h1>Login</h1>
            <p>coloca uma foto legal aqui</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email" value={email} placeholder="Fulano@fulano.com" id="" onChange={(e) => setEmail(e.target.value)}

                />
                <input type="password" value={password} placeholder="*******" id="" onChange={(e) => setPassword(e.target.value)} />
                <button>Entrar</button>
            </form>
        </div>
    )
}