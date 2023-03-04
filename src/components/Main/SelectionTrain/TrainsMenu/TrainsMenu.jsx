import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useJsonFetch from "../../../hooks/useJsonFetch";
import PaginationTrainsMenu from "./PaginationTrainsMenu";
import TrainsMenuCard from "./TrainsMenuCard";
import { nanoid } from "nanoid";

const TrainsMenu = () => {
  const navigate = useNavigate();

  const { data } = useJsonFetch(
    "https://netology-trainbooking.netoservices.ru/routes?from_city_id=63329d7b591d1e00467e8a30&to_city_id=63329d7b591d1e00467e8a31"
  ); //это тут исключительно для этапа верстки(надо же мне хоть какими-то данными карточки заполнить), потом переедет в epic
  console.log(data, 'id')
  const clickHandler = (id) => {
    console.log(id, 'id')
    navigate(`/${id}`);
  };

  return (
    <React.Fragment>
      <section className="trains-menu-wrap d-flex" id="trains-menu">
        <div className="card-deck trains-menu-group m-0">
          {data &&
            data.items.map((item) => (
              <TrainsMenuCard key={nanoid()} {...item} onClick={clickHandler} />
            ))}
        </div>
        <PaginationTrainsMenu key={nanoid()} />
      </section>
    </React.Fragment>
  );
};
export default TrainsMenu;

/**Вывод названия города с большой буквы */

/**Это вообще недопустимо раздутый блок. Надо будет его поделить на много маленьких
 * tи если не запутаться в классах, то можно будет переиспользовать
 * Menu  -> List -> Card-> CardTop + CardBody + CArdBottom(AvailableVagons+CardIconsBlock)
 */
