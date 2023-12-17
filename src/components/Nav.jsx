

import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul id="menu">
        <li id="list-menu" className={isOpen ? "active" : "disabled"} onClick={toggleMenu}>
          <span>
            <svg
              width="58"
              height="30"
              viewBox="0 0 67 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isOpen
                    ? "M2.5 46L45.5 3M2.5 3L48 48.5"
                    : "M3 3H64M3 24.5H48M3 46H64"
                }
                stroke="#c1c1c1"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {isOpen && (
            <ul>
              <li>
                <a href="/Magia-dos-ciganos">As magias e a Historia dos Ciganos</a>
              </li>

              <li>
                <a href="/Banhos-e-ervas">Banhos e Ervas Especiais</a>
              </li>

              <li>
                <a href="/Cartomancia">Cartomancia</a>
              </li>

              <li>
                <a href="/Mensagem-das-velas">Mensagem das Velas</a>
              </li>

              <li>
                <a href="/Mesa-radionica">Mesa Radiônica e Radiestesia</a>
              </li>

              <li>
                <a href="/Numerologia">Numerologia</a>
              </li>

              <li>
                <a href="/Tarot-dos-anjos">Tarot dos Anjos</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul id="navbar">
        <li>
          <a href="/">Inicio</a>
        </li>

        <li>
          <a
            href=" https://wa.me//5522992064929?text=Gostaria%20de%20mais%20informações%20sobre%20as%20consultas!"
            id="cta"
            className="hvr-icon-forward hvr-sweep-to-left"
          >
            Marcar Consulta
            <img
              src="svg-seta.svg"
              height="20px"
              width="40px"
              className="fa fa-chevron-circle-right hvr-icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
