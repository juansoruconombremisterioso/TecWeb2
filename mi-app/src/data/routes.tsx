import Paralelos from "../pages/Paralelos";
import Home from "../pages/Home";
import Reportes from "../pages/Reportes";

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
    name: "Paralelos",
    path: "/paralelos",
    element: <Paralelos />
  },
  {
    name: "Reportes",
    path: "/reportes",
    element: <Reportes />
  }
];