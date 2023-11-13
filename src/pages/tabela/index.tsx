import { Header } from "../../components/header";
import { } from "../../assets/css/index.css"
import { useState, useEffect, useContext } from "react"
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs"


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
            <header className="header-table">
                <div>

                    <Link to="/"><BiArrowBack color="black" size={40} /></Link>
                </div>
                <Link to="/post/new">
                    <div id="div-header">
                        <div>
                            <p>Gerenciar </p>
                        </div>
                        <BsFillGearFill color="black" size={40} />
                    </div>
                </Link>
            </header>

            <div className="title-post-criados">
                <p id="post-it">
                    Post-it
                </p>
                <p id="criados">
                    Criados
                </p>
            </div>
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