
const SectionHeader = ({
  subtitle,
  title,
  buttonText,
  onButtonClick,
  subtitleClassName = '',
  titleClassName = '',
  buttonClassName = '',
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-start mb-16 ${className}`}>
      <div>
        <span className={`font-semibold tracking-widest uppercase mb-4 block ${subtitleClassName}`}>
          {subtitle}
        </span>
        <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight ${titleClassName}`}>
          {title}
        </h2>
      </div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={`mt-8 md:mt-0 border font-bold px-6 py-3 rounded-xl transition-colors ${buttonClassName}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
