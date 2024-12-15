import { motion } from 'framer-motion';

export default function Button({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden
        bg-gradient-to-r from-luxury-light via-luxury to-luxury-dark
        bg-[length:200%_100%]
        animate-shimmer
        text-white px-8 py-3 rounded-full
        text-lg font-bold
        transition-all duration-300
        hover:shadow-lg hover:shadow-luxury/30
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}