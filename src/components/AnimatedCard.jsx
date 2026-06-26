import { motion } from 'framer-motion';

const AnimatedCard = ({
  children,
  direction = 'up',
  distance = 80,
  duration = 0.6,
  delay = 0,
  className = '',
  hoverScale = 1.02,
}) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'down' || direction === 'left' ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, [axis]: value }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      whileHover={{ scale: hoverScale }}
      className={`transition-transform duration-500 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
