import "./styles.css";
import homeImg from "../../assets/home.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">

        <NavLink to="/home" className = {({isActive})=>isActive ? "menu-active" :"menu-unactive" }>
          <p>Início</p>
        </NavLink>

        <NavLink to="/products" className = {({isActive})=>isActive ? "menu-active" :"menu-unactive" }>
          <p>Produtos</p>
        </NavLink>

        <NavLink to="/about" className = {({isActive})=>isActive ? "menu-active" :"menu-unactive" }>
          <p>Sobre nós</p>
        </NavLink>

      </nav>

      <div className="imagebar">
        <NavLink to="/">
          <img src={homeImg} alt="casa" />
        </NavLink>
      </div>
    </header>
  );
}
