import { Link } from "react-router-dom";
import "./../styles/header.css";


function Header() {
  return (
    <header>
      <img src="./src/assets/logo.png"/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Celulares</Link></li>
          <li><Link to="/cart">Carrinho</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
