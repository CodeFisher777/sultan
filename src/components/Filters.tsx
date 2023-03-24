import '../scss/filters.scss';
import { CategoriesVertical } from './CategoriesVertical';

export function Filters() {
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
        <ul className="filters-brand-checkboxes">
          <li>
            <input type="checkbox" />
            <p className="filters-brand-checkboxes-name">Nivea</p>
            <p>(56)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p className="filters-brand-checkboxes-name">Nivea</p>
            <p>(56)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p className="filters-brand-checkboxes-name">Nivea</p>
            <p>(56)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p className="filters-brand-checkboxes-name">Nivea</p>
            <p>(56)</p>
          </li>
        </ul>
        <label>
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
}
