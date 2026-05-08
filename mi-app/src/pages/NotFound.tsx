import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <div className="error-body">
    <div className="error-container">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <br />
      <Link to="/">Volver al Inicio</Link>
    </div>
    </div>
    </>
  );
}