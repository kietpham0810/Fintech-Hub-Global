import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the brand name segments', () => {
    render(<Navbar />);
    expect(screen.getByText('Fintech')).toBeInTheDocument();
    expect(screen.getByText('Hub')).toBeInTheDocument();
    expect(screen.getByText('Global')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Dịch vụ Kế toán')).toBeInTheDocument();
    expect(screen.getByText('Kê khai Thuế (US)')).toBeInTheDocument();
    expect(screen.getByText('Quản lý Lương')).toBeInTheDocument();
    expect(screen.getByText('Báo giá dịch vụ')).toBeInTheDocument();
    expect(screen.getByText(/Về chúng tôi/)).toBeInTheDocument();
  });

  it('renders the contact button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: 'Liên hệ tư vấn' })).toBeInTheDocument();
  });

  it('renders the logo SVG', () => {
    const { container } = render(<Navbar />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('renders as a nav element with sticky positioning class', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('sticky');
  });

  it('navigation links all have href="#"', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#');
    });
  });
});
