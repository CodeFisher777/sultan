import { render, screen } from '@testing-library/react';

import { Pagination } from '../components/Pagination';

describe('Pagination', () => {
  it('Pagination render', () => {
    render(<Pagination currentPage="1" onChangePage="2" />);

    expect(screen.getByText('>')).toBeInTheDocument();
  });
});
