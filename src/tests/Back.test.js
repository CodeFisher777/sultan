import { render, screen } from '@testing-library/react';

import { Back } from '../components/Back';

describe('Back', () => {
  it('Back render', () => {
    render(<Back />);
    expect(screen.getByTestId('back')).toBeInTheDocument();
  });
});
