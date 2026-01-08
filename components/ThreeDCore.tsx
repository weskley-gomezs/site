
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export const ThreeDCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Mouse and Animation refs
  const mousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });
  const currentVelocity = useRef({ x: 0.001, y: 0.002 });
  const ambientRotation = { x: 0.0005, y: 0.0015 };

  // Motion Values for Parallax Tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 100, damping: 30 });
  const tiltY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 100, damping: 30 });

  // Scroll Effects
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scrollRotationBoost = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = e.clientX / innerWidth;
      const normY = e.clientY / innerHeight;
      
      x.set(normX);
      y.set(normY);

      mousePos.current = {
        x: (normX - 0.5) * 0.02,
        y: (normY - 0.5) * 0.02,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const points: Point[] = [];
    const numPoints = window.innerWidth < 768 ? 100 : 400;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.4;

    // Fibonacci Sphere Distribution
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        px: 0,
        py: 0
      });
    }

    let animationFrame: number;

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Calculate rotation speed with scroll boost
      const boost = scrollRotationBoost.get();
      currentVelocity.current.x += (mousePos.current.y + ambientRotation.x * boost - currentVelocity.current.x) * 0.05;
      currentVelocity.current.y += (mousePos.current.x + ambientRotation.y * boost - currentVelocity.current.y) * 0.05;
      
      rotation.current.x += currentVelocity.current.x;
      rotation.current.y += currentVelocity.current.y;

      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);
      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);

      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const focalLength = 800;

      // Projection
      const projectedPoints = points.map(p => {
        let y1 = p.y * cosX - p.z * sinX;
        let z1 = p.y * sinX + p.z * cosX;
        let x2 = p.x * cosY + z1 * sinY;
        let z2 = -p.x * sinY + z1 * cosY;

        const s = focalLength / (focalLength + z2 + radius);
        return {
          x: centerX + x2 * s,
          y: centerY + y1 * s,
          z: z2,
          scale: s
        };
      });

      // Connections (Dynamic Neural Web)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 90, 0, 0.04)';
      ctx.lineWidth = 0.3;
      
      const maxDist = window.innerWidth < 768 ? 40 : 50;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.z > radius * 0.3) continue;

        let connections = 0;
        for (let j = i + 1; j < projectedPoints.length && connections < 2; j++) {
          const p2 = projectedPoints[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxDist) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            connections++;
          }
        }
      }
      ctx.stroke();

      // Points & Interactive Glow
      projectedPoints.forEach((p) => {
        const size = Math.max(0.4, p.scale * 2);
        const depthFactor = (radius + p.z) / (2 * radius);
        
        // Mouse interaction glow logic
        const mx = x.get() * dimensions.width;
        const my = y.get() * dimensions.height;
        const distToMouse = Math.hypot(p.x - mx, p.y - my);
        const mouseGlow = Math.max(0, 1 - distToMouse / 150);

        const alpha = Math.max(0.05, depthFactor * 0.7 + mouseGlow * 0.3);
        
        ctx.fillStyle = `rgba(255, 90, 0, ${alpha})`;
        
        if (p.z < -radius * 0.6 || mouseGlow > 0.5) {
           ctx.shadowBlur = 10 * mouseGlow + 5;
           ctx.shadowColor = 'rgba(255, 90, 0, 0.4)';
           ctx.fillStyle = `rgba(255, ${150 + mouseGlow * 105}, ${mouseGlow * 255}, ${alpha + 0.1})`;
        } else {
           ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size + mouseGlow * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions, scrollRotationBoost, x, y]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ 
        scale: springScale, 
        opacity,
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-full h-full flex items-center justify-center pointer-events-none perspective-1000"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(255, 90, 0, 0.1))' }}
      />
      
      {/* Central Branding with Depth Pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(50px)' }}>
        <motion.div
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.05, 1],
            filter: ["blur(2px)", "blur(0px)", "blur(2px)"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl md:text-[14rem] font-black text-[#ff5a00]/5 font-display select-none tracking-tighter"
        >
          NX
        </motion.div>
      </div>
    </motion.div>
  );
};
