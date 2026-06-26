import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock child components to isolate App's own rendering logic
vi.mock('./components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));
vi.mock('./blocks/HeroBlock', () => ({
  default: () => <section data-testid="hero-block">HeroBlock</section>,
}));
vi.mock('./blocks/PlatformsBlock', () => ({
  default: () => <section data-testid="platforms-block">PlatformsBlock</section>,
}));
vi.mock('./blocks/ProductsBlock', () => ({
  default: () => <section data-testid="products-block">ProductsBlock</section>,
}));
vi.mock('./blocks/FooterBlock', () => ({
  default: () => <footer data-testid="footer-block">FooterBlock</footer>,
}));

describe('App', () => {
  it('renders the Navbar', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders the HeroBlock inside main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByTestId('hero-block'));
  });

  it('renders the PlatformsBlock inside main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByTestId('platforms-block'));
  });

  it('renders the ProductsBlock inside main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByTestId('products-block'));
  });

  it('renders the FooterBlock outside main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    const footer = screen.getByTestId('footer-block');
    expect(footer).toBeInTheDocument();
    expect(main).not.toContainElement(footer);
  });

  it('renders blocks in the correct order', () => {
    const { container } = render(<App />);
    const allTestIds = [...container.querySelectorAll('[data-testid]')].map(
      (el) => el.dataset.testid
    );
    expect(allTestIds).toEqual([
      'navbar',
      'hero-block',
      'platforms-block',
      'products-block',
      'footer-block',
    ]);
  });
});
