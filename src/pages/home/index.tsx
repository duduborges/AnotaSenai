
import { Header } from "../../components/header"
import { } from "../../assets/css/index.css"
import { AiOutlineArrowUp, AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { Link, } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"

export function Home() {



    return (
        <div id="home" className="total">
            <Header />
            <div className="container-home">
                <main  >
                    <img src="\src\assets\img\banner_anota.png" width="400" height="200" alt="" />
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
                    <div id="post" className="hub-img"> <img src="src\assets\img\Logo_anota.png"
                        height="200" width={200} alt="" /></div>
                    <div className="hub">


                        <Link className="link-hub" to={"/post/new"}>
                            <button className="btn-hub">Crie seu Post-it</button>

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



                    <div className="equipe-total">
                        <div id="sla-top">
                            <div id="team" className="title-team">
                                <p>Equipe</p>
                            </div>
                        </div>



                        <div className="equipe">
                            <div className="fotos">

                                <div className="img-team">
                                    <img src="" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Arthur </p>
                                    <p className="nome-team">D'eça </p>
                                </div>
                                <div className="icon-team">
                                    <a href=""><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>
                                </div>


                            </div>

                            <div className="fotos">

                                <div className="img-team">
                                    <img src="src/assets/img/bruna-foto.jpg" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Bruna </p>
                                    <p className="nome-team">Cardozo </p>
                                </div>
                                <div className="icon-team">
                                    <a href="https://www.linkedin.com/in/brunahcardozo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:brunahcardozo11@gmail.com"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>
                                </div>


                            </div>

                            <div className="fotos">

                                <div className="img-team">
                                    <img src="src/assets/img/borges-foto.jpg" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Eduardo  </p>
                                    <p className="nome-team">Borges </p>
                                </div>
                                <div className="icon-team">
                                    <a href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:duduborges333969@gmail.com"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>
                                </div>


                            </div>



                        </div>
                        <div className="equipe">
                            <div className="fotos">

                                <div className="img-team">
                                    <img src="src/assets/img/luiza-foto.jpg" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Luiza  </p>
                                    <p className="nome-team">Fischer  </p>
                                </div>
                                <div className="icon-team">
                                    <a href="https://www.linkedin.com/in/luiza-fischer-302a611bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:luizafische@gmail.com"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>
                                </div>


                            </div>

                            <div className="fotos">

                                <div className="img-team">
                                    <img src="src/assets/img/duda-foto.jpg" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Maria </p>
                                    <p className="nome-team">Eduarda </p>
                                </div>
                                <div className="icon-team">
                                    <a href="https://www.linkedin.com/in/maria-eduarda-c?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:m.eduardacarrico@gmail.com"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>
                                </div>


                            </div>

                            <div className="fotos">

                                <div className="img-team">
                                    <img src="src/assets/img/rafagath-foto.jpg" className="img-uni" width={250} height={250} alt="" />

                                    <p className="nome-team">Rafagath</p>
                                    <p className="nome-team">Klug </p>
                                </div>
                                <div className="icon-team">
                                    <a href="https://www.linkedin.com/in/rafagath-klug-11122a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><AiOutlineLinkedin color={"rgb(34, 147, 240)"} size={80} /></a>
                                    <a href="mailto:rafagmk@gmail.com"><SiGmail color={"rgb(248, 64, 64)"} size={60} /></a>


                                </div>


                            </div>



                        </div>

                    </div>
                    <div id="contact" className="contato">
                        <div className="contact-all">


                            <div className="contact-title">
                                <p>Entre em Contato Conosco:</p>
                            </div>
                            <div id="triangulo-para-direita"></div>
                        </div>
                        <div>
                            <form className="form-contact" action="https://formsubmit.co/duduborges333969@gmail.com" method="POST">
                                <div id="inputs-div">
                                    <div>
                                        <input type="text" name="nome" className="inputs1-contat" id="w3lName" placeholder="Digite seu Nome:"
                                            required />
                                    </div>
                                    <div>
                                        <input type="email" className="inputs1-contat" name="Email" id="w3lSender" placeholder="Digite seu Email:"
                                            required /></div>


                                    <div>
                                        <input type="hidden" name="_captcha" value="false" />

                                        <textarea className="textarea-contact" name="Mensagem" id="w3lMessage"
                                            placeholder="Escreva aqui sua mensagem" required></textarea>
                                    </div>
                                </div>
                                <div id="icons-contact">
                                    <div id="email-form-icon">
                                        <div id="icon-form-email">
                                            <div>
                                                <SiGmail size={50} color={"#FAF6F6"} />
                                            </div>
                                            <div>
                                                <p id="info-contact"> Envie-nos um email manualmente:</p>
                                            </div>

                                        </div>
                                        <div>
                                            <p >duduborges333969@gmail.com</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="email-form-icon">
                                            <div id="icon-form-email">
                                                <div>
                                                    <BsWhatsapp size={50} color={"#FAF6F6"} />
                                                </div>
                                                <div>
                                                    <p id="info-contact"> Ou contate-nos pelo WhatsApp:</p>

                                                </div>

                                            </div>
                                            <div>
                                                <p >(51) 985836686 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button  >Enviar email</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </main >
            </div >
            <div className="subir">
                <a href="#home"><AiOutlineArrowUp color={"#FFFFFF"} size={30} /></a>
            </div>
            <footer>
                <p>©EduardoBorges</p>
                <div>
                    <a href="https://github.com/duduborges"><AiFillGithub color={"#FFFFFF"} size={40} /></a>
                    <a href="https://www.instagram.com/borges.ip/"><AiOutlineInstagram color={"#bf0dcf"} size={40} /></a>
                    <a href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"> <AiOutlineLinkedin color={"#0b65cc"} size={40} /></a>

                </div>



            </footer>



        </div >
    )
}