import React from 'react';
import '../scss/app.scss';

export function NameAndSort() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ['Название ▼', 'Название ▲', 'Цена ▼', 'Цена ▲'];
  const sortName = list[selected];

  const onClickListItem = (i: any) => {
    setSelected(i);
    setOpen(false);
  };
  return (
    <section className="nameandsort">
      <h1>Косметика и гигиена</h1>
      <div className="sort">
        <div className="sort-label">
          <p>Сортировка:</p>
          <span onClick={() => setOpen(!open)}>{sortName}</span>
        </div>
        {open && (
          <div className="sort-popup">
            <ul>
              {list.map((name, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(i)}
                  className={selected === i ? 'active' : ''}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
