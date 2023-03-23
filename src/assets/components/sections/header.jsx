export const Header = () => {
    return (
        <header class="header">
            <div className="container row-display justify-content-between align-items-center">
                <a href="#">
                    <h1 class="logo">ML</h1>
                </a>

                <nav>
                    <input id="menu-hamburguer" type="checkbox" />

                    <label for="menu-hamburguer">
                        <div class="menu">
                            <span class="hamburguer"></span>
                        </div>
                    </label>
                    
                    <ul>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#habilities">habilidades</a></li>
                        <li><a href="#projects">Meus projetos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}