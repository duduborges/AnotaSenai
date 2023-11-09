import { ReactNode, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { } from "../assets/css/index.css"
import { } from "../assets/img/loading.gif"
interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps): any {
    const { signed, loadingAuth } = useContext(AuthContext)

    if (loadingAuth) {
        return (
            <div id='loading'>
                Carregando
            </div>
        )
    }
    if (!signed) {
        return <Navigate to="/login" />
    }

    return children
}