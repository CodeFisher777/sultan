import React from 'react';
import styles from './CartItem.module.scss';

export const CartItem = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.root}>
        <img className={styles.root__imgmain} src="./images/AOS.png" alt="" />
        <div className={styles.root__text}>
          <div className={styles.root__text__v}>
            <img src="./images/littlebootle.svg" alt="" />
            <p>450 мл</p>
          </div>
          <p className={styles.root__text__name}>AOS средство для мытья посуды Crystal</p>
          <p className={styles.root__text__desciption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi velit, reiciendis
            illum laudantium hic ipsum exercitationem nulla odio et sapiente eius quas accusamus
            odit quisquam ut ratione, impedit enim.
          </p>
        </div>
        <span className={styles.root__vertline}></span>
        <div className={styles.root__buttons}>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <span className={styles.root__vertline}></span>
        <p className={styles.root__price}>48,76 ₸</p>
        <span className={styles.root__vertline}></span>
        <button className={styles.root__del}>
          <img src="/images/trash.svg" alt="" />
        </button>
      </div>
    </>
  );
};
