import './styles.css'

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div><p>Início</p></div>
        <div><p>Produtos</p></div>
        <div><p>Sobre nós</p></div>
      </nav>
      <div className="imagebar">
        <div><h3>imagem</h3></div>
      </div>
    </header>

  );
}
