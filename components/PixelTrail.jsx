"use client"
// components/PixelTrailCanvas.js
import { useEffect, useRef } from 'react';

const PixelTrailCanvas = ({ 
  pixelSize = 5, 
  pixelColor = '0, 0, 0', 
  trailLength = 20, 
  fadeSpeed = 0.05, 
  maxDistance = 100 
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = -100;
    let mouseY = -100;
    let lastX = mouseX;
    let lastY = mouseY;
    const trail = [];

    const drawPixelTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      trail.forEach((p, i) => {
        ctx.fillStyle = `rgba(${pixelColor}, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
        p.alpha -= fadeSpeed;
        if (Math.sqrt((p.x - mouseX) ** 2 + (p.y - mouseY) ** 2) > maxDistance) {
          p.alpha = 0;
        }
      });

      requestAnimationFrame(drawPixelTrail);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const distance = Math.sqrt((mouseX - lastX) ** 2 + (mouseY - lastY) ** 2);
      if (distance > pixelSize) {
        const steps = Math.ceil(distance / pixelSize);
        const xStep = (mouseX - lastX) / steps;
        const yStep = (mouseY - lastY) / steps;

        for (let i = 0; i < steps; i++) {
          lastX += xStep;
          lastY += yStep;
          trail.push({ x: lastX, y: lastY, alpha: 1.0 });
          if (trail.length > trailLength) trail.shift(); // Limit the trail length
        }
      } else {
        trail.push({ x: mouseX, y: mouseY, alpha: 1.0 });
        if (trail.length > trailLength) trail.shift(); // Limit the trail length
      }

      lastX = mouseX;
      lastY = mouseY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    drawPixelTrail(); // Start drawing

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pixelSize, pixelColor, trailLength, fadeSpeed, maxDistance]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }} />;
};

export default PixelTrailCanvas;
