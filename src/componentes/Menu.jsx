import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    return (
    <header className="header">
        <h1 className="logo">Yo-Gi-Oh!</h1>
        <nav>
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/Listagem">Listagem</NavLink>
                </li>

                <li>
                    <NavLink to="/AddRemove">Adicionar e Remover</NavLink>
                </li>
                
                <li>
                    <NavLink to="/Update">Atualizar Cartas</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}