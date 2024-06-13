import React from 'react'

export default function SlideLeftToRightComponent() {
  childComponent = {;
  
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={slideInFromLeft}
    transition={{duration: 1}}
    >
      {childComponent}


    </motion.div>
  )
}
