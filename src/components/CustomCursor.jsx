import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use springs for smooth animation
  const cursorX = useSpring(0, { stiffness: 150, damping: 15 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15 });

  // Check if device is mobile/touch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse position
  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update spring values for smooth trailing
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isMobile, cursorX, cursorY]);

  // Handle hover states on interactive elements
  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      
      // Check if it's a CTA button for magnetic effect
      const target = e.target;
      if (
        target.textContent?.includes("Let's Talk") ||
        target.textContent?.includes('View My Work') ||
        target.textContent?.includes('Live Demo') ||
        target.textContent?.includes('Send Message')
      ) {
        setIsMagnetic(true);
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsMagnetic(false);
    };

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Inner Dot - Instant follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          duration: 0,
        }}
      >
        <motion.div 
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </motion.div>

      {/* Outer Circle - Smooth trailing */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="rounded-full border-2 transition-colors duration-300"
          animate={{
            width: isHovering ? (isMagnetic ? 60 : 48) : 32,
            height: isHovering ? (isMagnetic ? 60 : 48) : 32,
            x: isHovering ? (isMagnetic ? -30 : -24) : -16,
            y: isHovering ? (isMagnetic ? -30 : -24) : -16,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          style={{
            borderColor: isHovering
              ? 'rgba(139, 92, 246, 1)'
              : 'rgba(139, 92, 246, 0.5)',
            backgroundColor: isHovering
              ? 'rgba(139, 92, 246, 0.1)'
              : 'transparent',
            boxShadow: isHovering
              ? isMagnetic
                ? '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)'
                : '0 0 20px rgba(139, 92, 246, 0.6)'
              : '0 0 10px rgba(139, 92, 246, 0.3)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
