
const Logo = ({ size = 28, color = 'var(--color-mysten-red)' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
    </svg>
  );
};

export default Logo;
