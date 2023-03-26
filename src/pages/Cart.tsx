import React from 'react';
import { Link } from 'react-router-dom';
import { ModalWindow } from '../components/ModalWindow/modalWindow';
import { CartItem } from '../components/CartItem/CartItem';

export const Cart = () => {
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="cart">
          <p className="cart-head">Корзина</p>
          <CartItem />
          <CartItem />

          <div className="cart-line"></div>
          <div className="cart-bottom">
            <ModalWindow active={modalActive} setActive={setModalActive}></ModalWindow>
            <button onClick={() => setModalActive(true)}>Оформить заказ</button>
            <p>1 348,76 ₸</p>
          </div>
        </div>
      </div>
    </>
  );
};
