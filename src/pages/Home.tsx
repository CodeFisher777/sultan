import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { SortBlock } from '../components/SortBlock';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';
import { Filters } from '../components/Filters';
import { CardBlock } from '../components/CardBlock';
import { Skeleton } from '../components/CardBlock/Skeleton';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

import { fetchCardRedux } from '../redux/card/asyncActions';
import { selectCard } from '../redux/card/slice';
import { useAppDispatch } from '../redux/store';
import { useMediaQuery } from 'react-responsive';

import { Back } from '../components/Back';
import { Card } from '../redux/card/types';
import { CategoriesVertical } from '../components/CategoriesVertical';
export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, minPrice, maxPrice, brand } = useSelector(selectFilter);
  const { items, status } = useSelector(selectCard);
  const [filteredPrice, setFilteredPrice] = React.useState<Card[]>(items);
  const [filteredBrand, setFilteredBrand] = React.useState<Card[]>(items);
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const onChangeCategory = React.useCallback((id: string) => {
    dispatch(setCategoryId(id));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getCards = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');

    dispatch(fetchCardRedux({ sortBy, order, categoryId, currentPage: String(currentPage) }));
  };
  React.useEffect(() => {
    getCards();
  }, [categoryId, sort.sortProperty, currentPage]);

  React.useEffect(() => {
    const newDataSet = items.filter(
      (item: Card) => item.price >= minPrice && item.price <= maxPrice,
    );
    setFilteredPrice(newDataSet);

    brand.forEach((i) => {
      const newDataSet2: Card[] = items.filter((item: Card) => item.brand == i);
      //@ts-ignore
      setFilteredBrand((pre) => [...pre, newDataSet2]);
    });
  }, [minPrice, maxPrice, brand]);
  console.log(brand);
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            {
              title: 'Каталог',
              link: '/',
            },
          ]}
        />

        {isMobile ? (
          <div className="container">
            <div className="namem">
              {' '}
              <Back />
              <h1>Косметика и гигиена</h1>
            </div>
            <div className="filterm">
              <div className="filterblock">
                <Filters items={items} />
                <CategoriesVertical />
              </div>
            </div>
            <SortBlock value={sort} />
            <div className="card">
              {status === 'loading'
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : minPrice || maxPrice
                ? filteredPrice.map((obj: any) => <CardBlock {...obj} key={obj.id} />)
                : items.map((obj: any) => <CardBlock {...obj} key={obj.id} />)}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur molestiae
              blanditiis hic tempora dolor, modi architecto laborum nesciunt delectus, ipsa
              excepturi quis doloribus quasi! Et repudiandae unde nesciunt natus.
            </p>
          </div>
        ) : (
          <>
            <div className="hometop">
              <h1>Косметика и гигиена</h1>
              <SortBlock value={sort} />
            </div>
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <div className="parametersandcards">
              <div className="filterblock">
                <Filters items={items} />
                <CategoriesVertical />
              </div>
              <div className="rightside">
                <div className="card">
                  {status === 'loading'
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : minPrice || maxPrice
                    ? filteredPrice.map((obj: any) => <CardBlock {...obj} key={obj.id} />)
                    : items.map((obj: any) => <CardBlock {...obj} key={obj.id} />)}
                </div>
                <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur
                  molestiae blanditiis hic tempora dolor, modi architecto laborum nesciunt delectus,
                  ipsa excepturi quis doloribus quasi! Et repudiandae unde nesciunt natus.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
