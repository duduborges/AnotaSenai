import { Header } from "../../components/header";
import { } from "../../assets/css/index.css"
import { useState, useEffect } from "react"
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { BsFillTrash3Fill, BsPencil } from "react-icons/bs";


interface AnotProps {
    id: string,
    nome: string,
    descricao: string,
    bg: string,
    color: string,
    uid: string,
}



export function Tabela() {
    const [anot, setAnots] = useState<AnotProps[]>([])

    useEffect(() => {
        function loadingAnots() {
            const anotRef = collection(db, "Post-it")
            const queryRef = query(anotRef, orderBy("created", "asc"))

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
                })
        }
        loadingAnots()
    }, [])


    return (
        <div>
            <Header />
            {anot.map((anot) => (
                <article id="art" className="previa" key={anot.id}
                    style={{
                        backgroundColor: anot.bg,
                        color: anot.color
                    }}>
                    <p>{anot.nome}</p>

                </article>
            ))
            }
        </div>

    )
}
// ainda nao precisa mexer aqui