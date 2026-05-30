import { Helmet } from 'react-helmet-async';
import uyuni from '../assets/uyuni.jpg';
import { Link } from "react-router-dom";

function Destino() {
  return (
    <div>

            <Helmet>
      
              <title>
                TravelBol | Salar de Uyuni
              </title>

              <meta
          name="description"
          content="Descubre el Salar de Uyuni, el desierto de sal más grande del mundo."
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
          content="TravelBol | Salar de Uyuni"
        />

        <meta
          property="og:description"
          content="Descubre el Salar de Uyuni, el desierto de sal más grande del mundo."
        />

        <meta
          property="og:image"
          content={uyuni}
        />

        <meta
          property="og:type"
          content="website"
        />
      
            </Helmet>

      <img
        src={uyuni}
        alt="Salar de Uyuni"
      />

      <p>
        El Salar de Uyuni es el desierto de sal más grande
        del mundo y uno de los principales atractivos
        turísticos de Bolivia.
      </p>

      <p>
        Durante la temporada de lluvias se produce
        un espectacular efecto espejo que atrae
        visitantes de todo el mundo.
      </p>

      <p>
        Incluye transporte, hospedaje y guía turístico.
      </p>

      <Link to="/">
        ← Volver al Inicio
      </Link>

    </div>
  );
}

export default Destino;