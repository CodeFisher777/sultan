import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchAdminCardRedux } from '../redux/card/asyncActions';
import { selectCard } from '../redux/card/slice';
import { useAppDispatch } from '../redux/store';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';
import { CardBlock } from '../components/CardBlock';
import { Skeleton } from '../components/CardBlock/Skeleton';

export const Admin: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage, categoryId } = useSelector(selectFilter);
  const { items, status } = useSelector(selectCard);
  const onChangeCategory = React.useCallback((id: string) => {
    dispatch(setCategoryId(id));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getCards = async () => {
    const currentPageStr = String(currentPage);
    dispatch(fetchAdminCardRedux({ currentPageStr, categoryId }));
  };
  console.log(categoryId);
  React.useEffect(() => {
    getCards();
  }, [categoryId, currentPage]);

  return (
    <>
      <div className="container">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />

        <Link to="/additem" data-testid="additem-link">
          <button className="additem">Добавить</button>
        </Link>
        <div className="rightside">
          <div className="card">
            {status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj: any) => <CardBlock {...obj} key={obj.id} />)}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </>
  );
};
