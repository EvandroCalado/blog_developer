import { render, screen } from '@testing-library/react';
import Example from './Example';

describe('Example', () => {
  it('should render with props', () => {
    render(<Example>test</Example>);

    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should render without props', () => {
    render(<Example />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
