import { Header } from "../../components/header"
import { FormEvent, useState, useEffect } from "react"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { } from "../../assets/css/index.css"
import {
    addDoc, collection, onSnapshot,
    query, orderBy, doc, deleteDoc
} from "firebase/firestore"
import { db } from "../../services/firebaseConnection"
import { BsPencil } from 'react-icons/bs'

interface AnotProps {
    id: string,
    nome: string,
    descricao: string,
    bg: string,
    color: string,
}


export function Admin() {
    const [anot, setAnot] = useState<AnotProps[]>([])
    const [nomeInput, setNomeInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [colorBackgroundInput, setColorBackgroundInput] = useState("#000")
    const [colorTextInput, setColorTextInput] = useState("#FAFFFF")

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
                })
            })
            setAnot(lista)
        })
        return (() => {
            unsub()
        })
    })

    function handleRegister(e: FormEvent) {
        e.preventDefault();
        if (nomeInput == "" || descInput == '') {
            alert("preencha todos os campos!!")
            return
        }
        addDoc(collection(db, "Post-it"), {
            nome: nomeInput,
            descricao: descInput,
            color: colorTextInput,
            bg: colorBackgroundInput,
            created: new Date()

        })
            .then(() => {
                setNomeInput('')
                setDescInput('')
                setColorBackgroundInput('')
                setColorTextInput('')
                console.log("cadastrado com sucesso")
            })
            .catch((error) => {
                console.log("erro ao cadastrar no banco" + error)
            })

    }
    async function handleDeleteAnotacao(id: string) {
        const docRef = doc(db, "Post-it", id)
        await deleteDoc(docRef)
    }

    return (
        <div><h1>Admin do neckles</h1>

            <Header />
            <form >
                <div className="cadastrar">
                <label >Nome do produto</label>
                <input className="input-cadastrar" type="text" onChange={(e) => setNomeInput(e.target.value)} value={nomeInput} placeholder="Digite o nome do produto..." />
                <label >Descrição do produto</label>
                <input className="input-cadastrar" type="text" onChange={(e) => setDescInput(e.target.value)} value={descInput} placeholder="Digite a descrição do produto..." />
                <div className="cores">
                <label >Cor do Título</label>
                <input  type="color" onChange={(e) => setColorTextInput(e.target.value)} value={colorTextInput} />

                <label >Fundo do Postit</label>
                <input type="color" onChange={(e) => setColorBackgroundInput(e.target.value)} value={colorBackgroundInput} />
                </div>
                {nomeInput !== "" && (
                    <div>
                        <h1>Veja como esta ficando:</h1>
                        <article className=""
                            style={{ backgroundColor: colorBackgroundInput }}
                            >

                            <p style={{ color: colorTextInput }}> {nomeInput}</p>

                        </article>
                    </div>
                )}
                <button onClick={handleRegister} type="submit">cadastrar </button>
                </div>
            </form>
            <hr />
            <h3>Meus Post-its</h3>

            {anot.map((anot) => (
                <article key={anot.id}
                    style={{
                        backgroundColor: anot.bg,
                        color: anot.color
                    }}>
                    <p>{anot.nome}</p>
                    <div>
                        <button>
                            <BsPencil size={18} color="#FAC935" />
                        </button>
                        <button onClick={() => handleDeleteAnotacao(anot.id)} >
                            <BsFillTrash3Fill size={18} color="#FA2A20" />
                        </button>
                    </div>
                </article>
            ))
            }


            {/* Aqui so faz ele ficar no centro e aumenta o tamanho da das caixas, deixa o imput mais bonitinho com um em baixo do outro , 
            arruma os botões, fontes, tamanho das letras*/}



        </div >

    )
}