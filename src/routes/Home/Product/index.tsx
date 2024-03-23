import { NavLink } from "react-router-dom";

export default function Product() {
  return (
    <main>
      <section className="product-section-container">
        <div className="product-container">
          <NavLink
            to="/computadores"
            className={({ isActive }) =>
              isActive
                ? "product-container-item menu-active "
                : "product-container-item  menu-unactive"
            }
          >
            Computadores
          </NavLink>
          <NavLink
            to="/eletronicos"
            className={({ isActive }) =>
              isActive
                ? "product-container-item menu-active "
                : "product-container-item  menu-unactive"
            }
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/livros"
            className={({ isActive }) =>
              isActive
                ? "product-container-item menu-active "
                : "product-container-item  menu-unactive"
            }
          >
            Livros
          </NavLink>
        </div>
      </section>
    </main>
  );
}
