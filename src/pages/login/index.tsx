import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { } from "../../assets/css/index.css"
import { Input } from "../../components/input"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../services/firebaseConnection"
import { useEffect } from "react"


const schema = z.object({
    email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
    password: z.string().nonempty("O campo senha é obrigatorio")
})
type FormData = z.infer<typeof schema>



export function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })
    useEffect(() => {
        async function handleLogout() {
            await signOut(auth)
        }
        handleLogout()
    }, [])

    function onSubmit(data: FormData) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                console.log("LOGADO COM SUCESSO!")
                navigate("/", { replace: true })
            })
            .catch((error) => {
                alert("ERRO AO TENTAR ENTRAR")
                console.log(error)
            })
    }


    return (
        <div className="login-total">

            <div className="top-login">

                <img className="logo" src="src\assets\img\Logo_anota.png" />
            </div>
            <hr className="hr-login" />
            <h1>Faça Login</h1>
            <div className="login-center">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-login">
                        <Input
                            className="input-login"
                            type="email"
                            placeholder="Digite seu email..."
                            name="email"
                            error={errors.email?.message}
                            register={register}
                        />
                        <Input
                            className="input-login"
                            type="password"
                            placeholder="*******"
                            name="password"
                            error={errors.password?.message}
                            register={register}
                        />
                    </div>
                    <button className="entrar">Entrar</button>

                </form>
                <Link className="link-cad" to="/register">
                    Ainda não possui uma conta? Cadastre-se!
                </Link>
                {/* aqui a gente so deixa os inputs mais bonitinhos e deixa centralizado, tenta usar um template "padrão" tipo, com a msm paleta de cores no site todo  */}
            </div>
        </div>
    )




}