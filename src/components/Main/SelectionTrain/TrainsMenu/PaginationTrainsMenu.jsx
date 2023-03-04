import React from "react";

const PaginationTrainsMenu = ({ amount, limit }) => {
  const totalPages = Math.round(amount / limit);
  return (
    <React.Fragment>
      <nav aria-label="..." className="nav-selection-trains-pagination">
        <ul className="pagination pagination-sm selection-trains-pagination">
          <li className="page-item disabled">
            <a className="page-link trains-menu-pagination__item-link">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
          </li>
          <li className="page-item  active" aria-current="page" >
            <a className="page-link trains-menu-pagination__item-link trains-menu-pagination_active-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link trains-menu-pagination__item-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link trains-menu-pagination__item-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link trains-menu-pagination__item-link" href="#">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PaginationTrainsMenu;
/** Условие: если страниц больше трех, то выводить 1,2,3...endNumber*/
