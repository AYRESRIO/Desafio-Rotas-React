import './styles.css';
import homeImg from '../../assets/home.svg';


export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div><p>Início</p></div>
        <div><p>Produtos</p></div>
        <div><p>Sobre nós</p></div>
      </nav>
      <div className="imagebar">
        <div><img src={homeImg} alt="casa" /></div>
      </div>
    </header>

  );
}
