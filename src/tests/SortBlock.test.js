import { render, screen, fireEvent } from '@testing-library/react';
import * as actions from '../redux/filter/slice';
import * as reduxHooks from 'react-redux';

import { SortBlock } from '../components/SortBlock';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('SortBlock', () => {
  it('should open popup', () => {
    const component = render(<SortBlock name="Название ▼" sortProperty="title" />);

    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });
});
