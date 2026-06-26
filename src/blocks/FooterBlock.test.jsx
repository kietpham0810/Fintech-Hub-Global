import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FooterBlock from './FooterBlock';

// Mock framer-motion to render plain elements so tests don't depend on animation
vi.mock('framer-motion', () => {
  const actual = vi.importActual('framer-motion');
  return {
    ...actual,
    motion: new Proxy(
      {},
      {
        get: (_target, prop) => {
          // Return a component that forwards props and renders the tag
          const Component = ({ children, ...rest }) => {
            const Tag = typeof prop === 'string' ? prop : 'div';
            const htmlProps = Object.fromEntries(
              Object.entries(rest).filter(([k]) => !['variants', 'initial', 'animate', 'whileInView', 'whileHover', 'whileTap', 'viewport'].includes(k))
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

describe('FooterBlock', () => {
  it('renders the footer element', () => {
    render(<FooterBlock />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders the follow-us heading text', () => {
    render(<FooterBlock />);
    expect(
      screen.getByText(/Theo dõi chúng tôi để cập nhật chính sách thuế & tài chính Mỹ/)
    ).toBeInTheDocument();
  });

  it('renders the email subscription input', () => {
    render(<FooterBlock />);
    const input = screen.getByPlaceholderText('Nhập email để nhận tin...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders the subscribe button', () => {
    render(<FooterBlock />);
    expect(screen.getByRole('button', { name: 'Đăng ký' })).toBeInTheDocument();
  });

  it('renders the left column navigation links', () => {
    render(<FooterBlock />);
    expect(screen.getByText('Về chúng tôi')).toBeInTheDocument();
    expect(screen.getByText('Đội ngũ CPA')).toBeInTheDocument();
    expect(screen.getByText('Tin tức')).toBeInTheDocument();
    expect(screen.getByText('Blog Dịch vụ')).toBeInTheDocument();
    expect(screen.getByText('Tuyển dụng')).toBeInTheDocument();
  });

  it('renders the right column service links', () => {
    render(<FooterBlock />);
    expect(screen.getByText('Dịch vụ Kế toán')).toBeInTheDocument();
    expect(screen.getByText('Kê khai Thuế (Tax)')).toBeInTheDocument();
    expect(screen.getByText('Quản lý Lương (Payroll)')).toBeInTheDocument();
    expect(screen.getByText('Báo giá tự động (Mới)')).toBeInTheDocument();
    expect(screen.getByText('Tài nguyên & Biểu mẫu')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<FooterBlock />);
    expect(
      screen.getByText(/© 2026 FintechHubGlobal\. All Rights Reserved\./)
    ).toBeInTheDocument();
  });

  it('renders the privacy and terms links', () => {
    render(<FooterBlock />);
    expect(screen.getByText('Chính sách bảo mật')).toBeInTheDocument();
    expect(screen.getByText('Điều khoản dịch vụ')).toBeInTheDocument();
  });

  it('has a scroll-to-top button that calls window.scrollTo', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(<FooterBlock />);
    // The scroll-to-top button contains an SVG arrow, find it by its role
    const buttons = screen.getAllByRole('button');
    // The first button should be the scroll-to-top (has SVG inside)
    const scrollBtn = buttons.find((btn) => btn.querySelector('svg path'));
    expect(scrollBtn).toBeDefined();
    fireEvent.click(scrollBtn);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });

  it('renders social media icon links', () => {
    render(<FooterBlock />);
    const links = screen.getAllByRole('link');
    // At least 2 social links (X/Twitter, LinkedIn) exist among the footer links
    const socialLinks = links.filter((link) => link.querySelector('svg'));
    expect(socialLinks.length).toBeGreaterThanOrEqual(2);
  });
});
