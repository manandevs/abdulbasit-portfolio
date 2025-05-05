"use client";
import React, { useRef, useEffect } from "react";
import { ParticlesConfig, Particle } from "./types";

interface ParticleCanvasProps {
  config: ParticlesConfig;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ config }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Initialize particles
  useEffect(() => {
    if (!config.particles.move.enable) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = config.particles.number.value;

      for (let i = 0; i < particleCount; i++) {
        const size =
          typeof config.particles.size.value === 'object'
            ? Math.random() * (config.particles.size.value.max - config.particles.size.value.min) + config.particles.size.value.min
            : config.particles.size.value;

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * config.particles.move.speed,
          speedY: (Math.random() - 0.5) * config.particles.move.speed,
          opacity: config.particles.opacity.value,
          color: config.particles.color.value,
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (config.particles.move.outModes.default === 'bounce') {
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }

          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        } else {
          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Set up event listeners and start animation
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (config.autoPlay) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[1]"
      aria-hidden="true"
    />
  );
};

export default ParticleCanvas;