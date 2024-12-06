//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom";
import "../index.css";
import ThemeToggleButton from "./ThemeToggleButton";
import { useCharStates } from "../Context/Context";

const Navbar = () => {
  const { state } = useCharStates();
  return (
    <nav className={`navbar ${state.theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h2>DH Odonto</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favs</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggleButton />
      </div>
      
    </nav>
  );
};

export default Navbar;
