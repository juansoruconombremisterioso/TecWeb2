import type { JSX } from "react";
import Hero from "../components/Hero";

function Home(): JSX.Element {
  return (
    <>
      <Hero />

      <main className="wrap">
    <section className="panel-grid">

        <article className="panel">
            <h3>Desarrollo Web</h3>
            <p>
                Sitios rápidos, modernos y adaptables para empresas,
                profesionales y emprendimientos.
            </p>
        </article>

        <article className="panel">
            <h3>Automatización</h3>
            <p>
                Sistemas administrativos y herramientas digitales
                para mejorar procesos internos.
            </p>
        </article>

        <article className="panel">
            <h3>Asesoría Técnica</h3>
            <p>
                Soporte, mantenimiento y acompañamiento tecnológico
                para impulsar tu negocio.
            </p>
        </article>

    </section>
</main>
    </>
  );
}

export default Home;