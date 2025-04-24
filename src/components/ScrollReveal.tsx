import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 30,
  className = '',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Define initial animation properties
  const getVariants = () => {
    const hidden = {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    };

    return {
      hidden,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;