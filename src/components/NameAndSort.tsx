import React from 'react';
import '../scss/app.scss';

type NameAndSortProps = {
  value: any;
  onChangeSort: any;
};
export const NameAndSort: React.FC<NameAndSortProps> = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const list = [
    { name: 'Название ▼', sortProperty: 'title' },
    { name: 'Название ▲', sortProperty: '-title' },
    { name: 'Цена ▼', sortProperty: 'price' },
    { name: 'Цена ▲', sortProperty: '-price' },
  ];
  //@ts-ignore

  const onClickListItem = (i: any) => {
    onChangeSort(i);
    setOpen(false);
  };
  return (
    <section className="nameandsort">
      <h1>Косметика и гигиена</h1>
      <div className="sort">
        <div className="sort-label">
          <p>Сортировка:</p>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
          <div className="sort-popup">
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  //@ts-ignore
                  className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
