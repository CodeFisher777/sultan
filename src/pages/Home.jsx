import React from 'react';

import { NameAndSort } from '../components/NameAndSort';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';
import { Filters } from '../components/Filters';
import { CardBlock } from '../components/CardBlock';
import { Skeleton } from '../components/CardBlock/Skeleton';
import '../scss/app.scss';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState('Уход за телом');

  const [sortType, setSortType] = React.useState({ name: 'Название ▼', sortProperty: 'title' });
  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    fetch(
      `https://641e8eecad55ae01ccabd4a2.mockapi.io/items?category=${categoryId}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <NameAndSort value={sortType} onChangeSort={(i) => setSortType(i)} />
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <section className="parametersandcards">
          <Filters arrBrand={items} />
          <div className="rightside">
            <div className="card">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <CardBlock {...obj} key={obj.id} />)}
            </div>
            <Pagination />
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur molestiae
              blanditiis hic tempora dolor, modi architecto laborum nesciunt delectus, ipsa
              excepturi quis doloribus quasi! Et repudiandae unde nesciunt natus.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
