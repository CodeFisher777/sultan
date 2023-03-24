import '../scss/app.scss';

export function Breadcrumbs() {
  return (
    <section className="breadcrumbs">
      <ul>
        <li>Главная</li>
        <li>
          <div className="breadcrumbs-line"></div>
        </li>
        <li>Косметика и гигиена</li>
      </ul>
    </section>
  );
}
