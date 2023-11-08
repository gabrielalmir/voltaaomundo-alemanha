import MainNavbar from "../MainNavbar"
import './page.scss'

type MainHeaderProps = {
    className?: string
    navbarClassName?: string
}

export default function MainHeader({ className, navbarClassName }: MainHeaderProps) {
    return (
        <>
            <ul id="navbarSupportedContent" className="collapse collapsing">
                <li className="nav-item">
                    <a href="/" className="nav-link">Início</a>
                </li>
                <li className="nav-item">
                    <a href="/historia" className="nav-link">História</a>
                </li>
                <li className="nav-item">
                    <a href="/culinaria" className="nav-link">Culinária</a>
                </li>
                <li className="nav-item">
                    <a href="/fale-conosco" className="nav-link">Fale Conosco</a>
                </li>
            </ul>

            <div id="wrapper-header" className={className}>
                <header id="main-header">
                    <MainNavbar className={navbarClassName} />
                </header>
            </div>
        </>
    )
}
