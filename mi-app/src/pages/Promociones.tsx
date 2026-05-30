import { Helmet } from 'react-helmet-async';
import promocion from '../assets/promocion.jpg';
import { Link } from "react-router-dom";

function Promociones() {
  return (
    <div>
      <Helmet>

        <title>
          TravelBol | Promociones de Temporada
        </title>

        <meta
          name="description"
          content="Descubre nuestras promociones de temporada para tus próximos viajes."
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
          content="TravelBol | Promociones de Temporada"
        />

        <meta
          property="og:description"
          content="Descubre nuestras promociones de temporada para tus próximos viajes."
        />

        <meta
          property="og:image"
          content={promocion}
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <img
        src={promocion}
        alt="Promociones de temporada"
      />

      <ul>

        <li>
          Uyuni 3 días y 2 noches
        </li>

        <li>
          Cusco y Machu Picchu
        </li>

        <li>
          Río de Janeiro
        </li>

        <li>
          Cartagena de Indias
        </li>

      </ul>

      <p>
        Promociones válidas hasta fin de mes.
      </p>

      <Link to="/">
        ← Volver al Inicio
      </Link>

    </div>
  );
}

export default Promociones;