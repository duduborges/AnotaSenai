
import { Header } from "../../components/header"
import { } from "../../assets/css/index.css"
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
export function Home() {

    return (
        <div className="total">
            <Header />
            <div className="container-home">
                <main  >
                    <h1>Bem-vindo ao Post-It Online!</h1>

                    <h5>Anote rapidamente informações importantes, escolha cores para organizar suas anotações e acesse suas notas de qualquer lugar, a qualquer momento.</h5>
                </main>
                <div>
                    <h3>O que oferecemos:</h3>
                    <li>Personalização Simples: Escolha cores para fundo e texto.</li>
                    <li>Acesso em Qualquer Lugar: Suas notas estão disponíveis em todos os seus dispositivos.</li>
                    <li>Fácil de Usar: Interface intuitiva para anotações rápidas e eficazes.</li>

                </div>
                <div>
                    <h3>Como funciona?</h3>
                    <li>[Passo 1]: Clique em "Cadastrar Post-It", que esté localizado no topo da página</li>
                    <li>[Passo 2]: Insira um título para sua anotação</li>
                    <li>[Passo 3]: Insira uma descrição para sua anotação</li>
                    <li>[Passo 4]: Escolha a cor do fundo e do texto para estilizar seu Post-it.</li>
                    <li>[Passo 5]: Clique no botão "Anotar" para salvar sua anotação</li>
                    <li>[Passo 6]: Pronto, agora você criou um Post-it</li>
                    <p><strong>Agora seus Post-its poderão ser gerenciados por esta mesma página, clicando em um dos icones</strong></p>
                </div>
                <div>
                    <h3>Como faço para ver minhas anotações?</h3>
                    <li>[Passo 1]: Clique em "Ver itens", que esté localizado no topo da página </li>
                    <li>[Passo 2]: Aqui estão seus Post-its</li>
                    <li>[Passo 3]: Para ver sua descrição, clique no titulo que você deseja acessar</li>
                    <li>[Passo 4]: Pronto, agora você vizualizou seus Post-Its</li>
                </div>
                <div>
                    <h5>Alguma duvida ou sujestão? Contate-nos!</h5>
                    <a href="mailto:duduborges333969@gmail.com">
                        <SiGmail size={40} color="red" />
                    </a>
                    <a href="https://wa.me/5551985836686? text=Preciso%20de%20suporte%20na%20sua%20pagina%20do%20Post-it"><AiOutlineWhatsApp size={40} color="green" /></a>
                </div>
            </div>
            <footer>
                <p>©EduardoBorges</p>
                <AiFillGithub size={40} />
                <AiOutlineInstagram color={"#bf0dcf"} size={40} />
                <AiOutlineLinkedin color={"#0b65cc"} size={40} />

            </footer>
            {/* faz uma pagina home legal, q explica o que é cada coisa e tal e com cores maneiras  */}


        </div >
    )
}