import Card from "../components/Card";

export default function Reportes() {
  return (
    <>
      <h2>Reportes</h2>

      <div className="cards">
        <Card title="Consultas" content={120} />
        <Card title="Internaciones" content={18} />
        <Card title="Altas Médicas" content={26} />
      </div>
    </>
  );
}