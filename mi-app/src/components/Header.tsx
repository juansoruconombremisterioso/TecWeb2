import type { JSX } from "react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <header className="topbar">
    <div className="brand">EcoSite</div>

    <nav className="links">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/productos">Productos</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
    </nav>
</header>
  );
}

export default Header;