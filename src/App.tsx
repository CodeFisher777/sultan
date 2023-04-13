import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { FullCard } from './pages/FullCard/FullCard';
import { Admin } from './pages/Admin';
import { AddItem } from './pages/AddItem';
import { FooterMobile } from './components/FooterMobile';

import '../src/scss/app.scss';

function App() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/card/:id" element={<FullCard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/card/:id/edit" element={<AddItem />} />
        </Routes>
        {isMobile ? <FooterMobile /> : !location.pathname.includes('card') && <Footer />}
      </div>
    </>
  );
}

export default App;
