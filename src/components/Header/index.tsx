import "./styles.css";
import homeImg from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        
          <div>
            <Link to="/">
              <p>Início</p>
            </Link>
          </div>
        
        
          <div>
           <Link to="/products">
              <p>Produtos</p>
            </Link>
          </div>
        
       
          <div>
            <Link to="/about">
             <p>Sobre nós</p>
            </Link>
          </div>
        
      </nav>
      
        <div className="imagebar">
          <div>
            <Link to="/">
              <img src={homeImg} alt="casa" />
            </Link>
          </div>
        </div>
      
    </header>
  );
}
