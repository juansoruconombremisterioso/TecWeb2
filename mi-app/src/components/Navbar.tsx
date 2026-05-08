import { Link } from "react-router-dom";

type MenuItem = {
  name: string;
  path: string;
};

type NavbarProps = {
  title: string;
  menu: MenuItem[];
};

export default function Navbar({ title, menu }: NavbarProps) {
  return (
    <header className="header">
    <div className="nav">
      <h1>{title}</h1>
      <nav>
        {menu.map((item, index) => (
          <a key={index}>
            <Link to={item.path}>{item.name}</Link>
          </a>
          ))}
      </nav>
    </div>
    </header>
  );
}