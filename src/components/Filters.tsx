import React, { ChangeEvent, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { setMinPrice, setMaxPrice, selectFilter, setBrand } from '../redux/filter/slice';

import { Card } from '../redux/card/types';
import arrowUp from './../assets/images/arrowupmobile.svg';
import arrowDown from './../assets/images/arrowdownmobile.svg';

type FiltersProps = {
  items: Card[];
};
type Name = {
  title: string;
  total: string;
};

export const Filters: React.FC<FiltersProps> = ({ items }) => {
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector(selectFilter);

  const [checkedIn, setCheckedIn] = React.useState<boolean[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [minPriceInput, setMinPriceInput] = React.useState<string>('');
  const [maxPriceInput, setMaxPriceInput] = React.useState<string>('');
  const [checkedValues, setCheckedValues] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState<boolean>(true);
  const [lengthBrand, setLengthBrand] = React.useState<number[]>([]);
  const [openBrand, setOpenBrand] = React.useState<boolean>(false);
  const priceList = items.map((item) => item.price);
  const brandList = items.map((item) => item.brand);

  //создание массива [брэнд,кол-во]
  const rez = brandList.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      //@ts-ignore
      acc[i] += 1;
    } else {
      //@ts-ignore
      acc[i] = 1;
    }
    return acc;
  }, {});
  const transformObject = Object.entries(rez);
  const brandQuantity: any = transformObject.map((item) => ({ title: item[0], total: item[1] }));
  const uniqArrBrand: string[] = brandQuantity.map((item: any) => item.title);
  ///////////////////////////////////////////////////
  const [filteredBrand, setFilteredBrand] = React.useState<[]>([]);
  const onChangeOpen = (event: React.MouseEvent<HTMLLabelElement>) => {
    if (uniqArrBrand.length > 4) {
      setOpenBrand(!openBrand);
    } else {
      setOpenBrand(false);
    }
  };

  const delFilters = () => {
    dispatch(setMinPrice(0));
    dispatch(setMaxPrice(0));
    setMinPriceInput('');
    setMaxPriceInput('');
    setSearchValue('');
    setFilteredBrand([]);
    setCheckedValues([]);
    dispatch(setBrand([]));
  };

  //поиск брэнда
  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilteredBrand(
      brandQuantity.filter((item: any) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };
  const arrRender = filteredBrand.length !== 0 ? filteredBrand : brandQuantity;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues((pre) => [...pre, value]);
    } else
      setCheckedValues((pre) => {
        return [...pre.filter((brand) => brand !== value)];
      });
  };

  const onShowFiltered = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMinPrice(Number(minPriceInput)));
    dispatch(setMaxPrice(Number(maxPriceInput)));
    dispatch(setBrand(checkedValues));
  };
  React.useEffect(() => {
    if (lengthBrand.length > 0) {
      setLengthBrand([]);
    }
    uniqArrBrand.forEach((name) => {
      const a = items.filter((item) => item.brand === name).length;
      setLengthBrand((pre) => [...pre, a]);
    });
  }, [categoryId]);

  return (
    <div className="filters">
      <div className="filters-head">
        <p className="filters-firstp">Подбор по параметрам</p>{' '}
        {isMobile && (
          <button onClick={() => setOpen(!open)} className="buttonm">
            {open ? (
              <img className="buttonm-arrowdown" src={arrowUp} alt="" />
            ) : (
              <img className="buttonm-arrowdown" src={arrowDown} alt="" />
            )}
          </button>
        )}
      </div>
      {open && (
        <div className="filters-allparams">
          <p className="filters-secondp">
            Цена <b>₸</b>
          </p>
          <div className="filters-price">
            <input
              value={minPriceInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMinPriceInput(event.target.value)
              }
              type="text"
              placeholder={String(Math.min(...priceList))}
            />
            <div>-</div>
            <input
              value={maxPriceInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMaxPriceInput(event.target.value)
              }
              type="text"
              placeholder={String(Math.max(...priceList))}
            />
          </div>
          <div className="filters-brand">
            <p className="filters-brand-firstp">Бренд</p>
            <div className="filters-brand-search">
              <input
                value={searchValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(event.target.value)
                }
                type="text"
                placeholder="Поиск..."
              />
              <button onClick={onSearch} className="filters-brand-search-circle">
                <img src="./images/search.svg" alt="" />
              </button>
            </div>
            <ul
              className={openBrand ? 'filters-brand-checkboxes active' : 'filters-brand-checkboxes'}
            >
              {arrRender.map((brand: Name, i: number) => (
                <li key={i}>
                  <input type="checkbox" value={brand.title} onChange={handleChange} />
                  <p className="filters-brand-checkboxes-name">{brand.title}</p>
                  <p>({brand.total})</p>
                </li>
              ))}
            </ul>
            <label onClick={onChangeOpen}>
              Показать все <img src="./images/sortarrowdown.svg" alt="" />
            </label>
          </div>
          <div className="filters-brand-buttons">
            <button onClick={onShowFiltered}>Показать</button>
            <button onClick={delFilters}>
              <img src="./images/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
