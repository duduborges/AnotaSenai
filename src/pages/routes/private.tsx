import { ReactNode, useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { } from "../../assets/css/index.css"



interface PrivateProps {
    children: ReactNode
}


export function Private({ children }: PrivateProps): any {

    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }
                localStorage.setItem("Links", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)
            }
            else {
                setLoading(false)
                setSigned(false)
            }

        })
        return () => {
            unsub()
        }

    })
    if (loading) {
        return (
            <div>
                <h2>Carregando...</h2>
            </div>


        )

    }
    if (!signed) {
        return <Navigate to="/login" />
    }



    return children
}