import { Header } from "../../components/header"
import { FormEvent, useState } from "react"
import { BsFillTrash3Fill } from 'react-icons/bs'
import {
    addDoc, collection, onSnapshot,
    query, orderBy, doc, deleteDoc
} from "firebase/firestore"
import { db } from "../../services/firebaseConnection"

export function Admin() {
    const [nomeInput, setNomeInput] = useState("")
    const [descInput, setDescInput] = useState("")
    const [colorBackgroundInput, setColorBackgroundInput] = useState("#000")
    const [colorTextInput, setColorTextInput] = useState("#ffff")

    function handleRegister(e: FormEvent) {
        e.preventDefault();
        if (nomeInput == "" || descInput == '') {
            alert("preencha todos os campos!!")
            return
        }
        addDoc(collection(db, "Post-it"), {
            name: nomeInput,
            descricao: descInput,
            color: colorTextInput,
            bg: colorBackgroundInput,
            created: new Date()

        })
            .then(() => {
                setNomeInput('')
                setDescInput('')

                console.log("cadastrado com sucesso")
            })
            .catch((error) => {
                console.log("erro ao cadastrar no banco" + error)
            })

    }


    return (
        <div><h1>Admin do neckles</h1>

            <Header />
            <form >
                <label >Nome do produto</label>
                <input type="text" onChange={(e) => setNomeInput(e.target.value)} value={nomeInput} placeholder="Digite o nome do produto..." />
                <label >Descrição do produto</label>
                <input type="text" onChange={(e) => setDescInput(e.target.value)} value={descInput} placeholder="Digite a descrição do produto..." />
                <label >Cor do Título</label>
                <input type="color" onChange={(e) => setColorTextInput(e.target.value)} value={colorTextInput} />

                <label >Fundo do Postit</label>
                <input type="color" onChange={(e) => setColorBackgroundInput(e.target.value)} value={colorBackgroundInput} />

                {nomeInput !== "" && (

                    <article
                        style={{ backgroundColor: colorBackgroundInput }}
                    >
                        <p style={{ color: colorTextInput }}> {nomeInput}</p>

                    </article>
                )}
                <button onClick={handleRegister} type="submit">cadastrar </button>
            </form>

            <h3>Meus Post-its</h3>


            <article style={{
                backgroundColor: colorBackgroundInput,
                color: colorTextInput
            }}>
                <p>Titulo do post-it</p>
                <div>
                    <button >
                        <BsFillTrash3Fill size={18} color="#000" />
                    </button>
                </div>
            </article>





        </div>

    )
}