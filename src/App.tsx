import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Home/Product";
import HomeBody from "./routes/Home/HomeBody";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import Computer from "./routes/Home/Product/Computer";
import Eletronic from "./routes/Home/Product/Eletronic";
import Book from "./routes/Home/Product/Book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Product />} />
            <Route path="computadores" element={<Computer/>}/>
            <Route path="eletronicos" element={<Eletronic/>}/>
            <Route path="livros" element={<Book/>}/>
          
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
