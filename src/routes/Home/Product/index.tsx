export default function Product() {
  return (
    <main>
      <section className="product-section-container">
        <div className="product-container">
          <div className="product-container-item">Computadores</div>
          <div className="product-container-item">Eletrônicos</div>
          <div className="product-container-item">Livros</div>
        </div>
      </section>
      <body>
        <div className="computer-section-container">
          <div className="computer-container">
            <p>Computador 1</p>
            <p>Computador 2</p>
            <p>Computador 3</p>
          </div>
        </div>

        <div className="electronic-section-container">
          <div className="electronic-container">
            <p>Eletrônico 1</p>
            <p>Eletrônico 2</p>
            <p>Eletrônico 3</p>
          </div>
        </div>

        <div className="livro-section-container">
          <div className="livro-container">
            <p>Livro 1</p>
            <p>Livro 2</p>
            <p>Livro 3</p>
          </div>
        </div>
      </body>
    </main>
  );
}
