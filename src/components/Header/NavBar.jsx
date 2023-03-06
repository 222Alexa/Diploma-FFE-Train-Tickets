import React from "react";

import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm pl-0 navbar-dark bg-dark"
        id="navBar"
      >
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto nav-list">
            <li className="nav-item active">
              <Link className="nav-link" to="/Diploma-FFE-Train-Tickets#about">
                {" "}
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Diploma-FFE-Train-Tickets#howItWorks"
              >
                Как это работает
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Diploma-FFE-Train-Tickets#feedback"
              >
                Отзывы
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#footer">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
