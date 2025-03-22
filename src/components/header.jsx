import { Link } from "react-router-dom";
import "./../styles/header.css";


function Header() {
  return (
    <header>
      <div>
      <img src="./src/assets/logo.png"/>
      </div>
      <nav>
        <ul>
          <li><Link to="/products">Celulares</Link></li>
          <li><Link to="/cart">Carrinho</Link></li>
          <li><Link to="/login">Nossas Lojas</Link></li>
          <li><Link to="">Seja um parceiro</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
