import '../scss/pagination.scss';

export function Pagination() {
  return (
    <div className="pagination">
      <img src="./images/arrowleft.svg" alt="" />
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <img src="./images/arrowright.svg" alt="" />
    </div>
  );
}
