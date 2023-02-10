import React from "react";


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
              <a className="nav-link" href="#about">
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#howItWorks">
                Как это работает
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedback">
                Отзывы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
