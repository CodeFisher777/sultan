import '../../scss/cards.scss';

type CardBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: string;
  code: number;
  brand: string;
  manufacture: string;
};

export const CardBlock: React.FC<CardBlockProps> = ({
  title,
  price,
  imageUrl,
  type,
  size,
  code,
  brand,
  manufacture,
}) => {
  return (
    <div className="card-item">
      <div className="card-item-mainimg">
        {' '}
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-item-v">
        <img src="./images/littlebootle.svg" alt="" />
        <p>{size} мл</p>
      </div>
      <div className="card-item-parameters">
        <p>{title}</p>
        <p>
          <span>Штрихкод: </span>
          {code}
        </p>
        <p>
          <span>Производитель: </span>
          {manufacture}
        </p>
        <p>
          <span>Бренд: </span>
          {brand}
        </p>
      </div>
      <div className="card-item-bottom">
        <p>{price} ₸</p>
        <button>
          в корзину <img src="./images/cartitem.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
