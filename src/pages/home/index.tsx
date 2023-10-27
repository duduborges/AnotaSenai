import { Link } from "react-router-dom"

export function Home() {

    return (
        <div className="total">
            <h1>Anota senai</h1>
            <span>Anotações     </span>
            <main>
                <p>
                    anotacao1
                </p>
                <Link to="/admin">
                    mantem
                </Link><br />
                <Link to="/login">
                    o
                </Link> <br />
                <Link to="/table">
                    pique
                </Link><br />
            </main>


        </div>
    )
}