import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductsBlock from './ProductsBlock';

describe('ProductsBlock', () => {
  it('renders the section label', () => {
    render(<ProductsBlock />);
    expect(screen.getByText('Sản phẩm')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<ProductsBlock />);
    expect(
      screen.getByText(/Sản phẩm của chúng tôi dành cho những nhà kiến tạo/)
    ).toBeInTheDocument();
  });

  it('renders the "view all products" button', () => {
    render(<ProductsBlock />);
    expect(
      screen.getByRole('button', { name: 'Xem tất cả sản phẩm' })
    ).toBeInTheDocument();
  });

  it('renders all four product cards', () => {
    render(<ProductsBlock />);
    expect(screen.getByText('SLUSH')).toBeInTheDocument();
    expect(screen.getByText('SuiPlay 0X1')).toBeInTheDocument();
    expect(screen.getByText('.NS')).toBeInTheDocument();
    expect(screen.getByText('SUIFRENS')).toBeInTheDocument();
  });

  it('each product card has the correct background color class', () => {
    const { container } = render(<ProductsBlock />);
    const cards = container.querySelectorAll('.rounded-3xl');
    expect(cards.length).toBe(4);
    expect(cards[0]).toHaveClass('bg-[#a3d5ff]');
    expect(cards[1]).toHaveClass('bg-[#1e2348]');
    expect(cards[2]).toHaveClass('bg-[#8c3ef1]');
    expect(cards[3]).toHaveClass('bg-[#ffd38a]');
  });

  it('renders a 4-column grid on large screens', () => {
    const { container } = render(<ProductsBlock />);
    const grid = container.querySelector('.lg\\:grid-cols-4');
    expect(grid).toBeInTheDocument();
  });

  it('product cards at index 1 and 2 use white text', () => {
    render(<ProductsBlock />);
    const suiPlay = screen.getByText('SuiPlay 0X1');
    const ns = screen.getByText('.NS');
    expect(suiPlay).toHaveClass('text-white');
    expect(ns).toHaveClass('text-white');
  });

  it('product cards at index 0 and 3 use black text', () => {
    render(<ProductsBlock />);
    const slush = screen.getByText('SLUSH');
    const suiFrens = screen.getByText('SUIFRENS');
    expect(slush).toHaveClass('text-black');
    expect(suiFrens).toHaveClass('text-black');
  });
});
