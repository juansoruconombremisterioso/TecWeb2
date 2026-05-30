import { Link } from "react-router-dom";
import travel from '../assets/travel.jpg';
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>

        <title>
          TravelBol | Inicio
        </title>

        <meta
          name="description"
          content="Descubre destinos turísticos nacionales e internacionales."
        />

        <meta
          name="keywords"
          content="turismo, viajes, Bolivia, destinos"

        />

        <meta
          name="author"
          content="Juan Soruco"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="TravelBol"
        />

        <meta
          property="og:description"
          content="Descubre destinos turísticos nacionales e internacionales."
        />

        <meta
          property="og:image"
          content={travel}
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <img
        src={travel}
        alt="Imagen de viaje"
      />

      <p>
        Descubre destinos turísticos nacionales e internacionales.
      </p>

      <p>
        Nuestra agencia ofrece paquetes turísticos,
        hospedaje y asesoramiento para tus vacaciones.
      </p>

      <Link to="/destino">
        Ver destino destacado
      </Link>

      <br />

      <Link to="/promociones">
        Ver promociones
      </Link>

    </div>
  );
}

export default Home;