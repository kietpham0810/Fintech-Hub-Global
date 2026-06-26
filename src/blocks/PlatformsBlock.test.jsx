import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlatformsBlock from './PlatformsBlock';

vi.mock('framer-motion', () => {
  const actual = vi.importActual('framer-motion');
  return {
    ...actual,
    motion: new Proxy(
      {},
      {
        get: (_target, prop) => {
          const Component = ({ children, ...rest }) => {
            const Tag = typeof prop === 'string' ? prop : 'div';
            const htmlProps = Object.fromEntries(
              Object.entries(rest).filter(([k]) => !['variants', 'initial', 'animate', 'whileInView', 'viewport'].includes(k))
            );
            return <Tag {...htmlProps}>{children}</Tag>;
          };
          Component.displayName = `motion.${String(prop)}`;
          return Component;
        },
      }
    ),
  };
});

describe('PlatformsBlock', () => {
  it('renders the section label', () => {
    render(<PlatformsBlock />);
    expect(screen.getByText('Hệ sinh thái Dịch vụ')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<PlatformsBlock />);
    expect(
      screen.getByText('Khám phá các giải pháp của chúng tôi')
    ).toBeInTheDocument();
  });

  it('renders the "view all services" button', () => {
    render(<PlatformsBlock />);
    expect(
      screen.getByRole('button', { name: 'Xem tất cả dịch vụ' })
    ).toBeInTheDocument();
  });

  it('renders the Accounting card', () => {
    render(<PlatformsBlock />);
    expect(screen.getByText(/Kế Toán/)).toBeInTheDocument();
    expect(screen.getByText(/Tổng Hợp/)).toBeInTheDocument();
    expect(
      screen.getByText(/Quản lý sổ sách, đối chiếu giao dịch/)
    ).toBeInTheDocument();
  });

  it('renders the Tax card', () => {
    render(<PlatformsBlock />);
    expect(screen.getByText('Kê khai thuế (Tax)')).toBeInTheDocument();
    expect(
      screen.getByText(/Giải pháp thuế TNDN, TNCN tối ưu hợp pháp/)
    ).toBeInTheDocument();
  });

  it('renders the Payroll card', () => {
    render(<PlatformsBlock />);
    expect(screen.getByText('Quản lý lương (Payroll)')).toBeInTheDocument();
    expect(
      screen.getByText(/Tính toán lương, bảo hiểm và xử lý tuân thủ/)
    ).toBeInTheDocument();
  });

  it('renders three service cards in total', () => {
    const { container } = render(<PlatformsBlock />);
    const h3Elements = container.querySelectorAll('h3');
    expect(h3Elements.length).toBe(3);
  });
});
