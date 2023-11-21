import { Link } from "react-router-dom"
import { } from "../../assets/css/index.css"
import { BiArrowBack } from "react-icons/bi"
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
export function Ajuda() {
    return (
        <div>
            <header className="header-help">
                <div>

                    <Link to="/"><BiArrowBack color="white" size={40} /></Link>
                </div>
                </header>
                <div className="helptotalpag">
                <div className="help-total">
                <div className="help">
                   <p>

                    Ajuda / Dúvidas
                   </p>
           
            </div>
            <div id="triangulo-para-direita-help"></div>
                </div>
            <div className="div-line-help">
                <div className="sub-div-line-help">
                    <p className="title-help-line">Como fazer as anotações?</p>
                    <p className="line-help">1 - Clique em "Criar Post-It", que este localizado no topo da página página</p>
                    <p className="line-help">2 - Insira um titulo para sua anotação</p>
                    <p className="line-help">3 - Insira uma descrição para sua anotação</p>
                    <p className="line-help">4 - Escolha a cor do fundo e do texto para estilizar seu Post-it</p>
                    <p className="line-help">5 - Clique no botão "Anotar" para salvar sua anotação</p>
                    <p className="line-help">6 - Pronto, agora você criou um Post-it</p>
                </div>
                <div className="sub-div-line-help">
                    <p className="title-help-line">Como faço para ver minhas anotações?</p>
                    <p className="line-help">1 - Procure por “minhas anotações“, eles apareceram no topo da página</p>
                    <p className="line-help">2 - Aqui estão seus Post-its</p>
                    <p className="line-help">3 - Clique em gerenciar anotações, para criar uma nova, editar ou deletar uma anotação</p>
                    <p className="line-help">4 - Pronto, agora você vizualizou seus Post-Its</p>
                </div>
                <div className="sub-div-line-help">
                    <p className="title-help-line">Consigo ver as notas já apagadas? </p>
                    <p className="line-help">As notas apagadas são deletadas permanentemente do nosso sistema, 
                        então não é possivél vizualizar sua anotação quando você exclui. Caso exclua sem querer, 
                        não conseguimos recuperar. Antes  de remover uma nota, tenha certeza se quer deleta-la.</p>
                </div>
                <div className="sub-div-line-help"> 
                    <p className="title-help-line">Consigo gerar qantas notas quiser?</p>
                    <p className="line-help">Sim, é possível criar várias notas, o importante é lembrar o usuário dos compromissos.</p>
                </div>
            </div>
           
        </div>
        <footer>
                <p>©EduardoBorges</p>
                <div>
                    <a href="https://github.com/duduborges"><AiFillGithub color={"#FFFFFF"} size={40} /></a>
                    <a href="https://www.instagram.com/borges.ip/"><AiOutlineInstagram color={"#bf0dcf"} size={40} /></a>
                    <a href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"> <AiOutlineLinkedin color={"#0b65cc"} size={40} /></a>

                </div>



            </footer>
        </div>
    )
}