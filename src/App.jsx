import React from 'react';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/BreadCrumbs';

import { NameAndSort } from './components/NameAndSort';
import { Categories } from './components/Categories';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
import { Filters } from './components/Filters';
import './scss/cards.scss';
import { CardItem } from './components/CardItem';
import cards from './items.json';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <main>
          <div className="container">
            <Breadcrumbs />
            <NameAndSort />
            <Categories />
            <section className="parametersandcards">
              <Filters />
              <div className="rightside">
                <div className="card">
                  {cards.map((obj) => (
                    <CardItem {...obj} key={obj.id} />
                  ))}
                </div>
                <Pagination />
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur
                  molestiae blanditiis hic tempora dolor, modi architecto laborum nesciunt delectus,
                  ipsa excepturi quis doloribus quasi! Et repudiandae unde nesciunt natus.
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
