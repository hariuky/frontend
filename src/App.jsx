import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Header from "./components/header";
import Adm from "./pages/adm";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* Aqui os cards serão carregados */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
      </Routes>
    </Router>
  );
}

export default App;
