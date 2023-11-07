import { ReactNode, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps): any {
    const { signed, loadingAuth } = useContext(AuthContext)

    if (loadingAuth) {
        return (
            <div>
                <img src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" alt="Carregando" />
            </div>
        )
    }
    if (!signed) {
        return <Navigate to="/login" />
    }

    return children
}