import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategoryId } from '../redux/filter/slice';
import { categories } from './Categories';

export const CategoriesVertical: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategory);

  const onChangeCategory = React.useCallback((id: string) => {
    dispatch(setCategoryId(id));
  }, []);
  return (
    <div className="categoriesvertical">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onChangeCategory(categoryName)}
            className={categoryId === categoryName ? 'active' : ''}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
