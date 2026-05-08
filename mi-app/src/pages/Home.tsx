import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="cards">
        <Card title="Pacientes Hoy" content={35} />
        <Card title="Médicos Activos" content={12} />
        <Card title="Emergencias" content={4} />
      </div>
    </>
  );
}