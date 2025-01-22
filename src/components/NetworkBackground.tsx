"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
  angle: number;
  speed: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodes: Node[] = [];
      const count = Math.floor(
        (window.innerWidth * window.innerHeight) / 25000
      );

      for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        nodes.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 0.3,
        });
      }

      nodesRef.current = nodes;
    };

    const drawNodes = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
      ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
      ctx.lineWidth = 0.5;

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const connectionDistance = 150;
      const mouseRadius = 80;
      const returnForce = 0.02;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Constant circular motion
        node.angle += node.speed * 0.01;
        const circleRadius = 20;
        const targetX = node.originalX + Math.cos(node.angle) * circleRadius;
        const targetY = node.originalY + Math.sin(node.angle) * circleRadius;

        // Mouse repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          node.vx -= (dx / distance) * force * 0.5;
          node.vy -= (dy / distance) * force * 0.5;
        }

        // Move towards target position
        const dxTarget = targetX - node.x;
        const dyTarget = targetY - node.y;
        node.vx += dxTarget * returnForce;
        node.vy += dyTarget * returnForce;

        // Apply friction
        node.vx *= 0.95;
        node.vy *= 0.95;

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
    };

    const animate = () => {
      drawNodes();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    createNodes();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-dark"
    />
  );
}
