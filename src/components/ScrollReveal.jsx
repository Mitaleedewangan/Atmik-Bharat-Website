
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, direction = 'up', delay = 0 }) => {
  // अलग-अलग दिशाओं से आने वाले एनीमेशन के लिए वेरिएंट्स
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 20,
        duration: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // once: true यानी एनीमेशन सिर्फ एक बार होगा जब यूजर स्क्रॉल करेगा
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;