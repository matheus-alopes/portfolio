export const About = (props) => {
    return (
        <section class="section about" id="about">
            <div class="container row-display">
                <h2 class="section-title">Sobre mim</h2>

                <div class="img-box inner-shadow">
                    <img src={props.image} alt="foto sobre mim" class="outer-shadow" />
                </div>

                <div class="about-infos">
                    <p>
                        <strong>Olá! Me chamo Matheus Lopes e sou um desenvolvedor frontend em formação! </strong>
                        Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades.
                    </p>

                    <p>
                    Estou sempre me desafiando coim novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁
                    </p>

                    <p>
                        Ah, gosto de jogos, filmes, séries, animes e outras nerdices. 💜
                    </p>
                
                    <a target="_blank" href={props.cv} class="button outer-shadow">Veja meu CV</a>
                </div>
            </div>
        </section>
    )
}