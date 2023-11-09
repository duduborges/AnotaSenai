import { Header } from "../../components/header";
import { } from "../../assets/css/index.css"
import { useState, useEffect, useContext } from "react"
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/AuthContext";


interface AnotProps {
    id: string,
    nome: string,
    descricao: string,
    bg: string,
    color: string,
    uid: string,
}



export function Tabela() {
    const { user } = useContext(AuthContext)
    const [anot, setAnots] = useState<AnotProps[]>([])

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
                })
        }
        loadingAnots()
    }, [user])


    return (

        <div>
            <Header />
            <div className="map-postit">
                {anot.map((anot) => (

                    <article id="art" className="final " key={anot.id}
                        style={{
                            backgroundColor: anot.bg,
                            color: anot.color
                        }}>
                        <div >
                            <p id="title-table">{anot.nome}</p>
                            <p id="desc-table">{anot.descricao}</p>
                        </div>


                    </article>

                ))
                }
            </div>
        </div>

    )

}
// ainda nao precisa mexer aqui