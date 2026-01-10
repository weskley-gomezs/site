
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  z: number;
  originX: number;
  originY: number;
  originZ: number;
  px: number;
  py: number;
}

export const ThreeDCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Mouse and Animation refs
  const mousePos = useRef({ x: 0.5, y: 0.5 }); // Normalized 0-1
  const rotation = useRef({ x: 0, y: 0 });
  const currentVelocity = useRef({ x: 0.001, y: 0.002 });
  const ambientRotation = { x: 0.0005, y: 0.0015 };

  // Motion Values for Parallax Tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 120, damping: 35 });
  const tiltY = useSpring(useTransform(x, [0, 1], [-12, 12]), { stiffness: 120, damping: 35 });

  // Scroll Effects
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scrollRotationBoost = useTransform(scrollYProgress, [0, 1], [1, 6]);
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

      mousePos.current = { x: normX, y: normY };
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
    const numPoints = window.innerWidth < 768 ? 120 : 450;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.38;

    // Fibonacci Sphere Distribution
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      const rx = radius * Math.cos(theta) * Math.sin(phi);
      const ry = radius * Math.sin(theta) * Math.sin(phi);
      const rz = radius * Math.cos(phi);
      points.push({
        x: rx, y: ry, z: rz,
        originX: rx, originY: ry, originZ: rz,
        px: 0, py: 0
      });
    }

    let animationFrame: number;

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const boost = scrollRotationBoost.get();
      // Mouse interaction influence on rotation speed
      const targetVelX = (mousePos.current.y - 0.5) * 0.03 + ambientRotation.x * boost;
      const targetVelY = (mousePos.current.x - 0.5) * 0.03 + ambientRotation.y * boost;
      
      currentVelocity.current.x += (targetVelX - currentVelocity.current.x) * 0.05;
      currentVelocity.current.y += (targetVelY - currentVelocity.current.y) * 0.05;
      
      rotation.current.x += currentVelocity.current.x;
      rotation.current.y += currentVelocity.current.y;

      const cosX = Math.cos(rotation.current.x);
      const sinX = Math.sin(rotation.current.x);
      const cosY = Math.cos(rotation.current.y);
      const sinY = Math.sin(rotation.current.y);

      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const focalLength = 800;

      // Mouse position in local canvas coords for gravity effect
      const mx = mousePos.current.x * dimensions.width;
      const my = mousePos.current.y * dimensions.height;

      // Projection with slight dynamic drift
      const projectedPoints = points.map(p => {
        // Base rotation
        let y1 = p.originY * cosX - p.originZ * sinX;
        let z1 = p.originY * sinX + p.originZ * cosX;
        let x2 = p.originX * cosY + z1 * sinY;
        let z2 = -p.originX * sinY + z1 * cosY;

        const s = focalLength / (focalLength + z2 + radius);
        const px = centerX + x2 * s;
        const py = centerY + y1 * s;

        // Gravity/Magnetic drift towards mouse
        const dx = mx - px;
        const dy = my - py;
        const d = Math.hypot(dx, dy);
        const strength = Math.max(0, (200 - d) / 200) * 8;
        
        return {
          x: px + (dx / (d + 1)) * strength,
          y: py + (dy / (d + 1)) * strength,
          z: z2,
          scale: s,
          distToMouse: d
        };
      });

      // Connections (Neural Web)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 90, 0, 0.04)';
      ctx.lineWidth = 0.3;
      
      const maxDist = window.innerWidth < 768 ? 35 : 55;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.z > radius * 0.4) continue;

        let connections = 0;
        const maxConn = window.innerWidth < 768 ? 1 : 2;
        for (let j = i + 1; j < projectedPoints.length && connections < maxConn; j++) {
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

      // Points with Interactive Bloom
      projectedPoints.forEach((p) => {
        const mouseGlow = Math.max(0, 1 - p.distToMouse / 120);
        const size = Math.max(0.4, p.scale * (1.8 + mouseGlow * 1.5));
        const depthFactor = (radius + p.z) / (2 * radius);
        
        const alpha = Math.max(0.04, depthFactor * 0.6 + mouseGlow * 0.4);
        
        ctx.fillStyle = `rgba(255, 90, 0, ${alpha})`;
        
        if (p.z < -radius * 0.7 || mouseGlow > 0.4) {
           ctx.shadowBlur = 15 * mouseGlow + 4;
           ctx.shadowColor = 'rgba(255, 90, 0, 0.5)';
           ctx.fillStyle = `rgba(255, ${160 + mouseGlow * 95}, ${100 + mouseGlow * 155}, ${alpha + 0.15})`;
        } else {
           ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions, scrollRotationBoost]);

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
        style={{ filter: 'drop-shadow(0 0 50px rgba(255, 90, 0, 0.12))' }}
      />
      
      {/* Dynamic WG Centerpiece - Weskley Gomes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(60px)' }}>
        <motion.div
          animate={{ 
            opacity: [0.1, 0.45, 0.1],
            scale: [0.98, 1.02, 0.98],
            filter: ["blur(3px) brightness(0.8)", "blur(0px) brightness(1.2)", "blur(3px) brightness(0.8)"]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="text-9xl md:text-[16rem] font-black text-[#ff5a00]/5 font-display select-none tracking-tighter"
        >
          WG
        </motion.div>
      </div>
    </motion.div>
  );
};
