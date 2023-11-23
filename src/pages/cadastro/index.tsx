import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { } from "../../assets/css/index.css"
import { Input } from "../../components/input"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../services/firebaseConnection"
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Logo_anota from "../../assets/img/Logo_anota.png"

const schema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
    password: z.string().nonempty("O campo senha é obrigatorio").min(6, "A senha deve ter no mínimo 6 caracteres")
})
type FormData = z.infer<typeof schema>



export function Register() {
    const { handleInfoUser } = useContext(AuthContext)
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
    async function onSubmit(data: FormData) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (user) => {
                await updateProfile(user.user, {
                    displayName: data.name
                })
                handleInfoUser({
                    name: data.name,
                    email: data.email,
                    uid: user.user.uid
                })
                console.log("CADASTRADO COM SUCESSO")
                navigate("/", { replace: true })
            })
            .catch((error) => {
                alert("ERRO AO CADASTRAR ESTE USUARIO")
                console.log(error)
            })
    }


    return (
        <div className="cad-total">
            <div className="top-cad">
                <img className="logo" src={Logo_anota} />
            </div>
            <hr className="hr-login" />
            <h1>Cadastre-se</h1>
            <div className="cad-center">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="inputs-login">
                        <Input
                            type="text"
                            className="input-login"
                            placeholder="Digite seu nome..."
                            name="name"
                            error={errors.name?.message}
                            register={register}
                        />
                        <Input
                            type="email"
                            placeholder="Digite seu email..."
                            name="email"
                            className="input-login"
                            error={errors.email?.message}
                            register={register}
                        />
                        <Input
                            type="password"
                            placeholder="*******"
                            name="password"
                            className="input-login"
                            error={errors.password?.message}
                            register={register}
                        />
                    </div>
                    <button className="entrar">Cadastrar</button>

                </form>
                <Link className="link-cad" to="/login">
                    Já possui uma conta? Faça o login!
                </Link>
                {/* aqui a gente so deixa os inputs mais bonitinhos e deixa centralizado, tenta usar um template "padrão" tipo, com a msm paleta de cores no site todo  */}
            </div>
        </div>
    )




}