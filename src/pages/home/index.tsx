
import { Header } from "../../components/header"
import { } from "../../assets/css/index.css"
import { AiOutlineArrowUp, AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { Link, } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"

export function Home() {



    return (
        <div className="total">
            <Header />
            <div className="container-home">
                <main  >
                    <img src="\src\assets\img\banner anota.png" width="400" height="200" alt="" />
                    <div className="title-home">
                        <p id="pt1-title">Bem Vindo ao </p>
                        <p id="pt2-title"> Anota Senai</p>

                    </div>
                    <hr className="linha-home" />
                    <div className="sub-home">
                        <p><strong>Anote</strong> e <strong>personalize</strong>   Post-it rapidamente com <br /> informações importantes para organizar sua rotina, <br />
                            acesse suas notas em qualquer lugar, a <strong> qualquer <br /> momento</strong>.</p>
                    </div>
                    <div className="about-title">
                        <p style={{ color: "#FFFFFF" }}>Sobre o</p>
                        <p style={{ color: "#000000" }}>Anota Senai</p>
                    </div>
                    <div className="about">
                        <section>
                            <li>O que Oferecemos: </li>
                            <p> <strong>Personalização Simples: </strong> Escolha cores para fundo e texto.</p>
                            <p><strong>Acesso Fácil:</strong>  Acesse suas notas em qualquer dispositivo.</p>
                            <p><strong> Simples de usar:</strong> interface intuitiva para rápidas anotações.</p>
                        </section>
                        <section>
                            <li>Nossos Objetivos:</li>
                            <p> <strong>Organização:</strong>   Simples de criar um quadro para sua rotinas,
                                desenvolver o potencial e as habilidades de cada um dos participantes,
                                para que suas reuniões e / ou reuniões sejam mais produtivas,
                                independentemente da complexidade de cada projeto.</p>
                        </section>
                    </div>
                    <div className="hub-img"> <img src="src\assets\img\Logo_anota.png"
                        height="200" width={200} alt="" /></div>
                    <div className="hub">


                        <Link className="link-hub" to={"/post/new"}>
                            <button id="post" className="btn-hub">Crie seu Post-it</button>

                        </Link>

                        <p className="sub-hub">Clique no botão para começar!</p>
                        {/* 
                        <Link to={"table/new"}><button id="post" className="btn-hub2">Gerenciar suas anotações</button></Link>



                    </div>
                    <div className="hub2">
                        <Link className="link-hub2" to={"/post/new"}>
                            <button id="post" className="btn-hub2">Favoritos</button>

                        </Link>*/}
                    </div>
                    <div id="contact" className="contato">
                        <div className="contact-title">
                            <p>Entre em Contato Conosco:</p>
                        </div>
                        <div>
                            <form action="https://formsubmit.co/duduborges333969@gmial.com" method="POST">
                                <div >
                                    <div>
                                        <input type="text" name="nome" id="w3lName" placeholder="Seu Nome"
                                            required />
                                    </div>
                                    <div>
                                        <input type="email" name="Email" id="w3lSender" placeholder="Seu Email"
                                            required />
                                    </div>


                                    <div>
                                        <input type="hidden" name="_captcha" value="false" />
                                    </div>
                                </div>
                                <textarea name="Mensagem" id="w3lMessage"
                                    placeholder="Escreva aqui sua mensagem" required></textarea>
                                <div >
                                    <button  >Enviar</button>
                                </div>

                            </form>
                        </div>
                        <div>
                            <SiGmail /> Duduborges333969@gmail.com
                            <BsWhatsapp /> +55 51 985836686
                        </div>
                    </div>
                    <div id="team" className="">
                        <div>
                            <p>Equipe</p>
                        </div>
                        <img src="" width={100} height={100} alt="" />
                        <img src="" width={100} height={100} alt="" />
                        <img src="" width={100} height={100} alt="" />
                        <img src="" width={100} height={100} alt="" />
                        <img src="" width={100} height={100} alt="" />
                        <img src="" width={100} height={100} alt="" />

                    </div>
                </main>
            </div>
            <div className="subir">
                <a href=""><AiOutlineArrowUp color={"#FFFFFF"} size={30} /></a>
            </div>
            <footer>
                <p>©EduardoBorges</p>
                <a href="https://github.com/duduborges"><AiFillGithub size={40} /></a>
                <a href="https://www.instagram.com/borges.ip/"><AiOutlineInstagram color={"#bf0dcf"} size={40} /></a>
                <a href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"> <AiOutlineLinkedin color={"#0b65cc"} size={40} /></a>



            </footer>
            {/* faz uma pagina home legal, q explica o que é cada coisa e tal e com cores maneiras  */}


        </div >
    )
}