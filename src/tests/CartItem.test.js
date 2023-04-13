import { render, screen, fireEvent } from '@testing-library/react';
import * as actions from '../redux/cart/slice';
import * as reduxHooks from 'react-redux';

import { CartItemBlock } from '../components/CartItemBlock/CartItemBlock';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CartItemBlock', () => {
  it('should create CartItemBlock', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    const component = render(
      <CartItemBlock
        id="1"
        title="Мыло"
        price="550"
        count="2"
        imageUrl="link"
        description="description"
        size="45"
      />,
    );
    expect(component).toMatchSnapshot();
  });
  it('shoul dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedAddItem = jest.spyOn(actions, 'addItem');
    const mockedMinusItem = jest.spyOn(actions, 'minusItem');

    const component = render(
      <CartItemBlock
        id="1"
        title="Мыло"
        price="550"
        count="2"
        imageUrl="link"
        description="description"
        size="45"
      />,
    );
    fireEvent.click(screen.getByText('+'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedAddItem).toHaveBeenCalledWith({ id: '1' });
    fireEvent.click(screen.getByText('-'));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedMinusItem).toHaveBeenCalledWith('1');
  });
});
