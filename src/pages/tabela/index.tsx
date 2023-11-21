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
            <svg id="wave" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 248, 238, 1)" offset="0%"></stop><stop stop-color="rgba(255, 248, 238, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,105L21.8,97.5C43.6,90,87,75,131,65C174.5,55,218,50,262,60C305.5,70,349,95,393,102.5C436.4,110,480,100,524,87.5C567.3,75,611,60,655,60C698.2,60,742,75,785,67.5C829.1,60,873,30,916,27.5C960,25,1004,50,1047,70C1090.9,90,1135,105,1178,105C1221.8,105,1265,90,1309,75C1352.7,60,1396,45,1440,32.5C1483.6,20,1527,10,1571,25C1614.5,40,1658,80,1702,90C1745.5,100,1789,80,1833,80C1876.4,80,1920,100,1964,100C2007.3,100,2051,80,2095,82.5C2138.2,85,2182,110,2225,117.5C2269.1,125,2313,115,2356,92.5C2400,70,2444,35,2487,20C2530.9,5,2575,10,2618,27.5C2661.8,45,2705,75,2749,85C2792.7,95,2836,85,2880,87.5C2923.6,90,2967,105,3011,115C3054.5,125,3098,130,3120,132.5L3141.8,135L3141.8,150L3120,150C3098.2,150,3055,150,3011,150C2967.3,150,2924,150,2880,150C2836.4,150,2793,150,2749,150C2705.5,150,2662,150,2618,150C2574.5,150,2531,150,2487,150C2443.6,150,2400,150,2356,150C2312.7,150,2269,150,2225,150C2181.8,150,2138,150,2095,150C2050.9,150,2007,150,1964,150C1920,150,1876,150,1833,150C1789.1,150,1745,150,1702,150C1658.2,150,1615,150,1571,150C1527.3,150,1484,150,1440,150C1396.4,150,1353,150,1309,150C1265.5,150,1222,150,1178,150C1134.5,150,1091,150,1047,150C1003.6,150,960,150,916,150C872.7,150,829,150,785,150C741.8,150,698,150,655,150C610.9,150,567,150,524,150C480,150,436,150,393,150C349.1,150,305,150,262,150C218.2,150,175,150,131,150C87.3,150,44,150,22,150L0,150Z"></path></svg>
            <div className="map-postit-table">

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