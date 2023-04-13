import { render, screen, fireEvent } from '@testing-library/react';
import * as actions from '../redux/filter/slice';
import * as reduxHooks from 'react-redux';

import { CardBlock } from '../components/CardBlock';
const item = {
  title: 'Шампунь',
  price: 250,
  imageUrl: 'qerqq',
  id: '5',
  size: 43,
  type: 1,
  code: 132242,
  brand: 'Avon',
  manufacture: 'China',
  description: 'description',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
  }),
}));

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CardBlock', () => {
  it('CardBlock render', () => {
    render(<CardBlock item={item} />);

    expect(screen.getByText('Мыло')).toBeInTheDocument();
  });
});
