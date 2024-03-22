import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Home/Product";
import HomeBody from "./routes/Home/HomeBody";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="products" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
