
import { useState, useEffect, useContext } from "react"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { FaRegNoteSticky } from "react-icons/fa6";
import { PiBroomBold } from "react-icons/pi"
import { } from "../../../assets/css/index.css"
import { BiArrowBack } from "react-icons/bi"
import {
    addDoc, collection,
    query, doc, deleteDoc, where, getDocs, updateDoc,
} from "firebase/firestore"
import { db } from "../../../services/firebaseConnection"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BsPencil } from 'react-icons/bs'
import { Input, TxtArea } from "../../../components/input"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
const schema = z.object({
    nome: z.string().nonempty("O campo Título é obrigatório"),
    descricao: z.string(),
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
}type FormData = z.infer<typeof schema>
export function Admin() {
    const { user } = useContext(AuthContext)
    const [anots, setAnots] = useState<AnotProps[]>([])
    const [nomeInput, setNomeInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [colorBackgroundInput, setColorBackgroundInput] = useState("#000000")
    const [colorTextInput, setColorTextInput] = useState("#FFFFFF")
    const collectionRef = collection(db, "Post-it");
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })
    const [editAnot, setEditAnot] = useState({
        enabled: false,
        nome: '',
        descricao: '',
        bg: '',
        color: '',
        id: ''
    })
    function onSubmit(data: FormData) {
        if (editAnot.enabled) {
            // Atualiza os dados no Firebase
            const docRef = doc(collectionRef, editAnot.id);
            if (data === null) {
                data = {
                    nome: nomeInput,
                    descricao: descInput,
                    bg: colorBackgroundInput,
                    color: colorTextInput,
                };
            }
            updateDoc(docRef, data);
            // Limpa o estado
            setEditAnot({
                enabled: false,
                nome: '',
                descricao: '',
                bg: '',
                color: '',
                id: ''
            });
            setNomeInput('')
            setDescInput('')
            setColorBackgroundInput('#000000')
            setColorTextInput('#FFFFFF')
        } else {
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
            setNomeInput('')
            setDescInput('')
            setColorBackgroundInput('#000000')
            setColorTextInput('#FFFFFF')
        }
    }
    useEffect(() => {
        function loadingAnots() {
            if (!user?.uid) {
                return
            } const anotRef = collection(db, "Post-it")
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
    function clear() {
        setNomeInput('')
        setDescInput('')
        setColorBackgroundInput('#000000')
        setColorTextInput('#FFFFFF')
    }

    function handleEdit(anot: AnotProps) {
        const nome = anot.nome;
        const descricao = anot.descricao;
        const bg = anot.bg;
        const color = anot.color;
        const id = anot.id
        setEditAnot({
            enabled: true,
            nome: nome,
            descricao: descricao,
            bg: bg,
            color: color,
            id: id,
        });
        setNomeInput(nome);
        setDescInput(descricao);
        setColorBackgroundInput(bg);
        setColorTextInput(color);

    }

    async function handleDeleteAnotacao(id: string) {
        const docRef = doc(db, "Post-it", id)
        await deleteDoc(docRef)
    } return (
        <div >
            <header className="header-table">
                <div>

                    <Link to="/"><BiArrowBack color="black" size={40} /></Link>
                </div>
                <Link to="/post">
                    <div id="div-header">
                        <div>
                            <p>Ver as Post-its </p>
                        </div>
                        <FaRegNoteSticky color="black" size={35} />
                    </div>
                </Link>
            </header>
            <div className="title-cadastrar-post">
                <p >
                    Crie seu Post-it
                </p>
            </div>
            <form className="form-post" onSubmit={handleSubmit(onSubmit)} >                <div className="inputs-infos">
                <div className="inputs-infoss">
                    <label className="label-input-info" >Título</label>
                    <Input
                        autoComplete="off"
                        className="input-name"
                        value={nomeInput}
                        type="text"
                        register={register}
                        onChange={(e) => setNomeInput(e.target.value)}
                        name="nome"
                        error={errors.nome?.message}
                        placeholder="Digite o titulo da anotação..."
                    />
                    <label className="label-input-info" >Descrição </label>
                    <TxtArea
                        className="input-desc"
                        autoComplete="off" value={descInput}
                        register={register}
                        onChange={(e) => setDescInput(e.target.value)}
                        name="descricao"
                        error={errors.descricao?.message}
                        placeholder="Digite o titulo da descrição..."
                    />
                </div>
                <div className=".inputs-infoss">
                    <div className="cores-div">
                        <p className="label-input-info">Personalize</p>
                        <div className="cores-inputs">
                            <p>
                                Cor do Texto:
                            </p>
                            <Input
                                className="color-box"
                                type="color"
                                value={colorTextInput}
                                register={register}
                                onChange={(e) => setColorTextInput(e.target.value)}
                                name="color"
                                error={errors.color?.message}
                                placeholder=""
                            />
                        </div>                            <div className="cores-inputs">
                            <p >
                                Cor do Fundo:
                            </p>
                            <Input
                                className="color-box" type="color"
                                register={register}
                                onChange={(e) => setColorBackgroundInput(e.target.value)}
                                name="bg"
                                value={colorBackgroundInput}

                                error={errors.bg?.message}
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>                </div>
                <div className="cores">
                    {nomeInput === "" && (
                        <div className="previatotal">
                            <h1>Veja como esta ficando:</h1>
                            <article className="previa"
                                style={{ backgroundColor: colorBackgroundInput }}
                            >
                                <p style={{ color: colorTextInput }}> {nomeInput}</p>
                            </article>
                            <button className="clear" onClick={clear}><PiBroomBold size={30} color={"F2889B"} /> Limpar</button>
                        </div>
                    )}
                    {nomeInput !== "" && (
                        <div className="previatotal">
                            <h1>Veja como esta ficando:</h1>
                            <article className="previa"
                                style={{ backgroundColor: colorBackgroundInput }}>
                                <p style={{ color: colorTextInput }}> {nomeInput}</p>
                            </article>
                            <button className="clear" onClick={clear}><PiBroomBold size={30} color={"F2889B"} />
                                Limpar
                            </button>
                        </div>
                    )}
                    <div className="div-btn-cadastrar">
                        <button className="btn-cadastrar" type="submit">{editAnot.enabled ? "Atualizar tarefa" : "Adicionar tarefa"} </button>
                    </div>
                </div>
            </form >
            <br />
            <hr />
            <p id="gerenciar">Gerenciar meus Post-its</p>
            <div className="map-postit">
                {anots.map((anot) => (
                    <article id="art" className="previa" key={anot.id}
                        style={{
                            backgroundColor: anot.bg,
                            color: anot.color
                        }}>
                        <p>{anot.nome}</p>
                        <div>
                            <button className="icon-ger" onClick={() => handleEdit(anot)} >
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
        </div >)
}