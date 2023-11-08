import { Header } from "../../../components/header"
import { FormEvent, useState, useEffect, useContext } from "react"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { } from "../../../assets/css/index.css"
import {
    addDoc, collection, onSnapshot,
    query, orderBy, doc, deleteDoc, where, getDocs,
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
    const [anots, setAnots] = useState<AnotProps[]>([])
    const [nomeInput, setNomeInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [colorBackgroundInput, setColorBackgroundInput] = useState("#000000")
    const [colorTextInput, setColorTextInput] = useState("#FFFFFF")
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const [editAnot, setEditAnot] = useState({
        enabled: false,
        anot: ''
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


    useEffect(() => {
        function loadingAnots() {
            if (!user?.uid) {
                return
            }

            const anotRef = collection(db, "Post-it")
            const queryRef = query(anotRef, where("uid", "==", user.uid))

            getDocs(queryRef)
                .then((snapshot) => {
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
        }
        loadingAnots();
    }, [user])

    // function handleSaveEdit() {
    //     const findIndexAnot = anots.findIndex(anot => anot === editAnot.anot)
    //     const allAnots = [...anots]

    //     allAnots[findIndexAnot] = nomeInput && descInput && colorBackgroundInput && colorTextInput
    //     setAnots(allAnots)

    //     setEditAnot({
    //         enabled: false,
    //         anot: ''
    //     })
    //     setNomeInput("")
    //     setDescInput("")
    //     setColorBackgroundInput("")
    //     setColorTextInput("")
    // }


    function handleEdit(nome: string, color: string, descricao: string, bg: string) {
        setNomeInput(nome)
        setDescInput(descricao)
        setColorBackgroundInput(bg)
        setColorTextInput(color)
        // setEditAnot({
        //     enabled: true,
        //     anot: nome
        // })
    }

    function handleRegister() {

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
                        value={nomeInput}
                        type="text"
                        register={register}
                        onChange={(e) => setNomeInput(e.target.value)}
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
                        onChange={(e) => setDescInput(e.target.value)}
                        name="descricao"
                        error={errors.descricao?.message}
                        placeholder="Digite o titulo da descrição..."
                    />
                    <div className="cores">
                        <Input
                            className="input-colors"
                            type="color"
                            value={colorTextInput}
                            defaultValue={"#FFFFFF"}
                            register={register}
                            onChange={(e) => setColorTextInput(e.target.value)}
                            name="color"
                            error={errors.color?.message}
                            placeholder=""
                        />
                        <label >⬅️Escolha uma cor para o texto</label>
                        <label>Escolha uma cor para o fundo➡️</label>
                        <Input
                            className="input-colors"
                            value={colorBackgroundInput}
                            type="color"
                            register={register}
                            onChange={(e) => setColorBackgroundInput(e.target.value)}
                            name="bg"
                            defaultValue={"#000000"}
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
            <br />
            <hr />
            <h2>Gerenciar meus Post-its</h2>

            <div className="map-postit">

                {anots.map((anot) => (
                    <article id="art" className="previa" key={anot.id}
                        style={{
                            backgroundColor: anot.bg,
                            color: anot.color
                        }}>
                        <p>{anot.nome}</p>
                        <div>
                            <button className="icon-ger" onClick={() => handleEdit(anot.nome, anot.color, anot.descricao, anot.bg,)} >
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