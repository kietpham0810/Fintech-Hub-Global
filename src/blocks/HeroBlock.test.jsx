import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroBlock from './HeroBlock';

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

describe('HeroBlock', () => {
  it('renders as a section element', () => {
    const { container } = render(<HeroBlock />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders the headline text blocks', () => {
    render(<HeroBlock />);
    expect(screen.getByText('Giải pháp')).toBeInTheDocument();
    expect(screen.getByText('kế toán chuẩn')).toBeInTheDocument();
    expect(screen.getByText('quốc tế cho')).toBeInTheDocument();
    expect(screen.getByText('doanh nghiệp')).toBeInTheDocument();
  });

  it('renders the subtitle paragraph', () => {
    render(<HeroBlock />);
    expect(
      screen.getByText(/Tại FintechHubGlobal, chúng tôi xây dựng hệ thống báo cáo tài chính/)
    ).toBeInTheDocument();
  });

  it('renders the red decorative line element', () => {
    const { container } = render(<HeroBlock />);
    const redLine = container.querySelector('.bg-\\[var\\(--color-mysten-red\\)\\]');
    expect(redLine).toBeInTheDocument();
  });

  it('headline spans have correct styling classes', () => {
    render(<HeroBlock />);
    const headlineSpan = screen.getByText('Giải pháp');
    expect(headlineSpan.tagName).toBe('SPAN');
    expect(headlineSpan.className).toContain('bg-[var(--color-mysten-black)]');
    expect(headlineSpan.className).toContain('text-[var(--color-mysten-white)]');
  });
});
