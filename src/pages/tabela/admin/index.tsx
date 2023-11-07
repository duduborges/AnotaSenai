import { Header } from "../../../components/header"
import { FormEvent, useState, useEffect, useContext } from "react"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { } from "../../../assets/css/index.css"
import {
    addDoc, collection, onSnapshot,
    query, orderBy, doc, deleteDoc
} from "firebase/firestore"
import { db } from "../../../services/firebaseConnection"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BsPencil } from 'react-icons/bs'
import { Input } from "../../../components/input"
import { AuthContext } from "../../../contexts/AuthContext"



const schema = z.object({

    nome: z.string().nonempty("O campo Título é obrigatório"),
    descricao: z.string().nonempty("O campo Descrição é obrigatório"),
    bg: z.string().nonempty("O campo Cor de fundo é obrigatório"),
    color: z.string().nonempty("O campo Cor da letra é obrigatório"),
})
interface AnotProps {
    id: string,
    nome: string,
    descricao: string,
    bg: string,
    color: string,
    uid: string,
}

type FormData = z.infer<typeof schema>




export function Admin() {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    function onSubmit(data: FormData) {
        addDoc(collection(db, "Post-it"), {
            nome: data.nome,
            descricao: data.descricao,
            color: data.color,
            bg: data.bg,
            created: new Date(),
            autor: user?.name,
            uid: user?.uid,
        })
            .then(() => {
                reset();
                console.log("CADASTRADO COM SUCESSO")

            })
            .catch((error) => {
                console.log(error)
                console.log("ERRO AO CADASTRAR")

            })

    }
    const [anot, setAnots] = useState<AnotProps[]>([])

    const [nomeInput, setNomeInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [colorBackgroundInput, setColorBackgroundInput] = useState("#000000")
    const [colorTextInput, setColorTextInput] = useState("#FFFFFF")

    useEffect(() => {
        const anotRef = collection(db, "Post-it")
        const queryRef = query(anotRef, orderBy("created", "asc"))


        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as AnotProps[];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    descricao: doc.data().descricao,
                    bg: doc.data().bg,
                    color: doc.data().color,
                    uid: doc.data().uid
                })
            })
            setAnots(lista)
            return
        })
        return () => {
            unsub();
        }
    }, [])



    function handleRegister(e: FormEvent) {
        e.preventDefault();
        if (nomeInput == "" || descInput == '') {
            alert("preencha todos os campos!!")
            return
        }

        setNomeInput('')
        setDescInput('')
        setColorBackgroundInput('#000000')
        setColorTextInput('#FFFFFF')
        console.log("cadastrado com sucesso")


    }
    async function handleDeleteAnotacao(id: string) {
        const docRef = doc(db, "Post-it", id)
        await deleteDoc(docRef)
    }

    return (
        <div><h1>Admin do neckles</h1>

            <Header />
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="cadastrar">
                    <label >Titulo da anotação</label>
                    <Input
                        className="input-cadastrar"
                        type="text"
                        register={register}
                        value={nomeInput}
                        name="nome"
                        error={errors.nome?.message}
                        placeholder="Digite o titulo da anotação..."
                    />
                    <label >Descrição da anotação</label>
                    <Input
                        className="input-cadastrar"
                        type="text"
                        value={descInput}
                        register={register}
                        name="descricao"
                        error={errors.descricao?.message}
                        placeholder="Digite o titulo da descrição..."
                    />
                    <div className="cores">
                        <Input
                            className="input-colors"
                            type="color"
                            value={colorTextInput}
                            register={register}
                            name="color"
                            error={errors.color?.message}
                            placeholder=""
                        />
                        <label >⬅️Escolha uma cor para o texto</label>
                        <label>Escolha uma cor para o fundo➡️</label>
                        <Input
                            className="input-colors"
                            type="color"
                            register={register}
                            name="bg"
                            value={colorBackgroundInput}
                            error={errors.bg?.message}
                            placeholder=""
                        />

                    </div>
                    {nomeInput !== "" && (
                        <div className="previatotal">
                            <h1>Veja como esta ficando:</h1>
                            <article className="previa"
                                style={{ backgroundColor: colorBackgroundInput }}
                            >

                                <p style={{ color: colorTextInput }}> {nomeInput}</p>

                            </article>
                        </div>
                    )}
                    <button className="btn-cadastrar" onClick={handleRegister} type="submit">Anotar </button>
                </div>
            </form>
            <hr />
            <h2>Gerenciar meus Post-its</h2>

            <div className="map-postit">

                {anot.map((anot) => (
                    <article id="art" className="previa" key={anot.id}
                        style={{
                            backgroundColor: anot.bg,
                            color: anot.color
                        }}>
                        <p>{anot.nome}</p>
                        <div>
                            <button className="icon-ger">
                                <BsPencil size={30} color="#FAC935" />
                            </button>
                            <button className="icon-ger" onClick={() => handleDeleteAnotacao(anot.id)} >
                                <BsFillTrash3Fill size={30} color="#FA2A20" />
                            </button>
                        </div>
                    </article>
                ))
                }
            </div>


            {/* Aqui so faz ele ficar no centro e aumenta o tamanho da das caixas, deixa o imput mais bonitinho com um em baixo do outro ,
            arruma os botões, fontes, tamanho das letras*/}



        </div >

    )
}