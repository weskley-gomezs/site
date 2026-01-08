
import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

export const ThreeDCore: React.FC = () => {
  // Mouse Interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-30deg", "30deg"]);

  // Scroll Interaction (Zoom effect)
  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const smoothScale = useSpring(scaleValue, { stiffness: 50, damping: 20 });

  // Generate Sphere Particles (Fibonacci Sphere Algorithm)
  const particles = useMemo(() => {
    const points = [];
    const n = 42; // Number of "NX" particles
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

    for (let i = 0; i < n; i++) {
      const yPos = 1 - (i / (n - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - yPos * yPos); // radius at y
      const theta = phi * i; // golden angle increment

      const xPos = Math.cos(theta) * radius;
      const zPos = Math.sin(theta) * radius;

      points.push({ x: xPos, y: yPos, z: zPos });
    }
    return points;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set((e.clientX / innerWidth) - 0.5);
      y.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-2000 select-none pointer-events-none">
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          scale: smoothScale,
          transformStyle: "preserve-3d" 
        }}
        className="relative w-72 h-72 md:w-96 md:h-96"
      >
        {/* Central Energy Core */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(0px)" }}>
          <div className="w-32 h-32 bg-[#ff5a00] blur-[80px] rounded-full opacity-40 animate-pulse" />
          <motion.div 
             style={{ opacity: opacityValue }}
             className="text-4xl font-black text-[#ff5a00]/20 font-display absolute z-10"
          >
            NX
          </motion.div>
        </div>

        {/* The NX Sphere Shell */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -ml-4 -mt-2 text-[#ff5a00] font-black font-display text-xs md:text-sm"
            style={{
              x: p.x * 180,
              y: p.y * 180,
              z: p.z * 180,
              transformStyle: "preserve-3d",
              // Subtle fading for deeper particles
              opacity: useTransform(opacityValue, (v) => v * (0.3 + (p.z + 1) / 2))
            }}
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                delay: i * 0.1 
              }}
              style={{
                // Keep the text facing relatively towards the viewer
                rotateY: `${(Math.atan2(p.x, p.z) * 180) / Math.PI}deg`,
                rotateX: `${(Math.asin(-p.y) * 180) / Math.PI}deg`,
              }}
            >
              NX
            </motion.div>
          </motion.div>
        ))}

        {/* Atmospheric Rings */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20%] border border-[#ff5a00]/10 rounded-full"
          style={{ translateZ: -50, rotateX: "70deg" }}
        />
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10%] border border-white/5 rounded-full"
          style={{ translateZ: 20, rotateY: "45deg" }}
        />
      </motion.div>

      {/* Deep Background Glow */}
      <div className="absolute -z-10 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.03)_0%,transparent_60%)]" />
    </div>
  );
};
