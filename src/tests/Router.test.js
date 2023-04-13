import userEvent from '@testing-library/user-event';
import { render } from 'react-dom';
import App from '../App';
import Cart from '../pages/Cart';
import Header from '../components/Header';

describe('test Router link in header to cart', () => {
  test('Router test', () => {
    // render(<Cart />);
    render(<Header />);
    // render(<App />);
    const cartLink = screen.getByTestId('cart-link');
    userEvent.click(cartLink);
    expect(screen.getByTestId('cart-page')).toBeInTheDocument;
  });
});
