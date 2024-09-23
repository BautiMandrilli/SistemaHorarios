import { useState } from "react";
import { DashboardList } from "./DashboardPage.jsx";

function SideMenuDashboard() {
  const [isOpen, setIsOpen] = useState(false); // Corrección en la declaración de useState

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón SVG para abrir/cerrar el menú */}
      <button className="menu-button" onClick={openMenu}>
        {/* Resaltado: Cambiar entre el ícono de menú (3 barras) y el ícono de cierre (X) */}
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícono de cierre (X) */}
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícono de menú (3 barras) */}
            <path d="M3 12h18M3 6h18M3 18h18" stroke="black" strokeWidth="2" />
          </svg>
        )}
      </button>

      {/* Menú lateral */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <DashboardList />
          </li>
        </ul>
      </div>

      {/* Overlay cuando el menú está abierto */}
      {isOpen && <div className="overlay" onClick={openMenu}></div>}
    </div>
  );
}

export default SideMenuDashboard;
