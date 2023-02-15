import React from "react";

const PaginationTrainsMenu = ({ amount, limit }) => {
  const totalPages = Math.round(amount / limit);
  return (
    <React.Fragment>
      <nav aria-label="..." className="nav-selection-trains-pagination">
        <ul class="pagination pagination-sm selection-trains-pagination">
          <li class="page-item disabled">
            <a class="page-link trains-menu-pagination__item-link">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
          </li>
          <li class="page-item  active" aria-current="page" >
            <a class="page-link trains-menu-pagination__item-link trains-menu-pagination_active-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link trains-menu-pagination__item-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link trains-menu-pagination__item-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link trains-menu-pagination__item-link" href="#">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PaginationTrainsMenu;
/** Условие: если страниц больше трех, то выводить 1,2,3...endNumber*/
