import '../scss/app.scss';

export function NameAndSort() {
  return (
    <section className="nameandsort">
      <h1>Косметика и гигиена</h1>
      <div className="sort">
        <div className="sort-label">
          <p>Сортировка:</p>
          <span>
            название <img src="./images/sortarrowdown.svg" alt="" />
          </span>
        </div>
        <div className="sort-popup">
          <ul>
            <li className="active">
              Название <img src="./images/sortarrowdown.svg" alt="" />
            </li>
            <li>
              Название <img src="./images/sortarrowup.svg" alt="" />
            </li>
            <li>
              Цена
              <img src="./images/sortarrowdown.svg" alt="" />
            </li>
            <li>
              Цена
              <img src="./images/sortarrowup.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
