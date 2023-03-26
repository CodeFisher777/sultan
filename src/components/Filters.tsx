import React from 'react';
import '../scss/filters.scss';
import { CategoriesVertical } from './CategoriesVertical';

type FiltersProps = {
  arrBrand: any;
};

export const Filters: React.FC<FiltersProps> = ({ arrBrand }) => {
  //@ts-ignore
  const uniqArr = [...new Set(arrBrand.map((items) => items.brand))];
  //@ts-ignore
  const [openBrand, setOpenBrand] = React.useState(false);
  let ulClasses = ['filters-brand-checkboxes'];
  if (openBrand) {
    //@ts-ignore
    ulClasses = ['filters-brand-checkboxes active'];
  } else {
    //@ts-ignore
    ulClasses = ['filters-brand-checkboxes'];
  }
  const onChangeOpen = () => {
    if (uniqArr.length > 4) {
      setOpenBrand(!openBrand);
    } else {
      setOpenBrand(false);
    }
  };
  return (
    <div className="filters">
      <p className="filters-firstp">Подбор по параметрам</p>
      <p className="filters-secondp">
        Цена <b>₸</b>
      </p>
      <div className="filters-price">
        <input type="text" placeholder="0" />
        <div>-</div>
        <input type="text" placeholder="10 000" />
      </div>
      <div className="filters-brand">
        <p className="filters-brand-firstp">Бренд</p>
        <div className="filters-brand-search">
          <input type="text" placeholder="Поиск..." />
          <button className="filters-brand-search-circle">
            <img src="./images/search.svg" alt="" />
          </button>
        </div>
        <ul
          //@ts-ignore
          className={ulClasses}
        >
          {uniqArr.map((items: any, i) => (
            <li key={i}>
              <input type="checkbox" />
              <p className="filters-brand-checkboxes-name">{items}</p>
              <p>({items.length})</p>
            </li>
          ))}
        </ul>
        <label onClick={onChangeOpen}>
          Показать все <img src="./images/sortarrowdown.svg" alt="" />
        </label>
      </div>
      <div className="filters-brand-buttons">
        <button>Показать</button>
        <button>
          <img src="./images/trash.svg" alt="" />
        </button>
      </div>
      <CategoriesVertical />
    </div>
  );
};
