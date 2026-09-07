import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function EngineeringBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId = 0;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const particles: Particle[] = [];

    let width = window.innerWidth;
    let height = window.innerHeight;

    const CONNECTION_DISTANCE = 130;
    const CONNECTION_DISTANCE_SQUARED =
      CONNECTION_DISTANCE * CONNECTION_DISTANCE;

    const MOUSE_DISTANCE = 170;
    const MOUSE_DISTANCE_SQUARED =
      MOUSE_DISTANCE * MOUSE_DISTANCE;

    const createParticles = () => {
      particles.length = 0;

      const area = width * height;

      const count = Math.min(
        110,
        Math.max(45, Math.floor(area / 16000)),
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.4 + 0.4,
        });
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const drawGrid = () => {
      const spacing = 70;

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.035)";

      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      ctx.fillStyle = "rgba(125,211,252,0.65)";

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) {
          particle.x = width + 20;
        } else if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        } else if (particle.y > height + 20) {
          particle.y = -20;
        }

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared < MOUSE_DISTANCE_SQUARED) {
          const distance = Math.sqrt(distanceSquared);

          const force =
            (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;

          particle.x -= dx * force * 0.008;
          particle.y -= dy * force * 0.008;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );

        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < CONNECTION_DISTANCE_SQUARED) {
            const distance = Math.sqrt(distanceSquared);

            const opacity =
              (1 - distance / CONNECTION_DISTANCE) * 0.14;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(125,211,252,${opacity})`;
            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      }
    };

    const drawMouseGlow = () => {
      if (mouse.x < 0 || mouse.y < 0) {
        return;
      }

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        220,
      );

      gradient.addColorStop(
        0,
        "rgba(56,189,248,0.07)",
      );

      gradient.addColorStop(
        0.5,
        "rgba(56,189,248,0.025)",
      );

      gradient.addColorStop(
        1,
        "rgba(56,189,248,0)",
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        mouse.x - 220,
        mouse.y - 220,
        440,
        440,
      );
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#050608";

      ctx.fillRect(
        0,
        0,
        width,
        height,
      );

      /*
       * The grid is part of the visible background,
       * so it must be rendered after clearing the canvas.
       */
      drawGrid();

      drawParticles();

      drawMouseGlow();

      animationFrameId =
        requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      } else if (animationFrameId === 0) {
        animationFrameId =
          requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();

    render();

    window.addEventListener(
      "resize",
      handleResize,
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        handleResize,
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}

export default EngineeringBackground;