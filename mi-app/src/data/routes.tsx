import Configuration from "../pages/Confirguration";
import Home from "../pages/Home";
import Reportes from "../pages/Reportes"; // Corregido el import (apuntaba a pacientes)
import Pacientes from "../pages/Pacientes";

// Definimos una interfaz para nuestras rutas para mantener el orden
export interface AppRoute {
  name: string;
  path: string;
  element: React.ReactElement;
}

export const routes: AppRoute[] = [
  {
    name: "Inicio",
    path: "/",
    element: <Home />
  },
  {
    name: "Pacientes",
    path: "/pacientes",
    element: <Pacientes />
  },
  {
    name: "Configuración",
    path: "/configuration",
    element: <Configuration /> 
  },
  {
    name: "Reportes",
    path: "/reportes",
    element: <Reportes />
  }
];