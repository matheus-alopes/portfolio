export const Home = (props) => {
    return (
        <section class="home">
            <div className="container row-display align-items-center full-screen">
                <div class="home-text">
                    <p>Olá 🖖,</p>

                    <h1>Sou o Matheus Lopes</h1>

                    <h2>Desenvolvedor Frontend</h2>

                    <div class="social-media">
                        <a href="https://www.linkedin.com/in/matheus-alencar-lopes-dev-frontend/" target="_blank" class="outer-shadow">
                            <i class="fab fa-linkedin-in"></i>
                        </a>

                        <a href="https://github.com/matheus-alopes" target="_blank" class="outer-shadow">
                            <i class="fab fa-github"></i>
                        </a>

                        <a href="mailto:matlopes96@outlook.com" target="_blank" class="outer-shadow">
                            <i class="fa-regular fa-envelope"></i>
                        </a>

                        <a href="https://wa.me/5598982031752" target="_blank" class="outer-shadow">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div class="img-home img-box inner-shadow">
                    <img class="outer-shadow" src={props.image} alt="foto de perfil do Matheus" />
                </div>
            </div>
        </section>
    )
}