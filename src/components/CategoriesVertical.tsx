import React from 'react';

import '../scss/categoriesvertical.scss';

export function CategoriesVertical() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средство для загара',
    'Средство для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];
  const onClickCategory = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="categoriesvertical">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}
            key={i}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
