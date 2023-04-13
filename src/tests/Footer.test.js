import { render, screen } from '@testing-library/react';

import { Footer } from '../components/Footer';

describe('Footer', () => {
  it('Footer render', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
