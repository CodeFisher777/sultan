import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

import styles from './CartItem.module.scss';

type CartItemBlockProps = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  description: string;
  size: number;
};

export const CartItemBlock: React.FC<CartItemBlockProps> = ({
  id,
  title,
  price,
  count,
  imageUrl,
  description,
  size,
}) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem),
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.root}>
        <img className={styles.root__imgmain} src={imageUrl} alt="" />
        <div className={styles.root__text}>
          <div className={styles.root__text__v}>
            <img src="./images/littlebootle.svg" alt="" />
            <p>{size} мл</p>
          </div>
          <p className={styles.root__text__name}>{title}</p>
          <p className={styles.root__text__desciption}>{description}</p>
        </div>
        {!isMobile && <span className={styles.root__vertline}></span>}
        <div className={styles.root__block}>
          <div className={styles.root__buttons}>
            <button disabled={count === 1} onClick={onClickMinus}>
              -
            </button>
            <p>{count}</p>
            <button onClick={onClickPlus}>+</button>
          </div>
          <span className={styles.root__vertline}></span>
          <p className={styles.root__price}>{price * count} ₸</p>
          <span className={styles.root__vertline}></span>
          <button onClick={onClickRemove} className={styles.root__del}>
            <img src="/images/trash.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
