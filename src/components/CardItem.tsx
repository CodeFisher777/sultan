import '../scss/cards.scss';

export function Carditem() {
  return (
    <div className="card-item">
      <div className="card-item-mainimg">
        {' '}
        <img src="./images/aos.png" alt="" />
      </div>
      <div className="card-item-v">
        <img src="./images/littlebootle.svg" alt="" />
        <p>450 мл</p>
      </div>
      <div className="card-item-parameters">
        <p>
          <b>AOS</b> средство для мытья посуды Crystal
        </p>
        <p>
          <span>Штрихкод: </span>4604049097548
        </p>
        <p>
          <span>Производитель: </span>Нэфис
        </p>
        <p>
          <span>Бренд: </span>AOS
        </p>
      </div>
      <div className="card-item-bottom">
        <p>48,76 ₸</p>
        <button>
          в корзину <img src="./images/cartitem.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
