import React from 'react';
import { motion } from 'framer-motion';

const AnimatedNavbar: React.FC = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className="p-5 bg-blue-500 text-white fixed w-full"
    >
      <ul className="flex justify-around">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Services</li>
        <li className="hover:underline">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default AnimatedNavbar;
