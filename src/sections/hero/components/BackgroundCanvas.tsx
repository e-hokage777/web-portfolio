import { useRef, useEffect } from "react";
import Particle from "../../../physics/Particle";
import { useWindowSize } from "react-use";
import { loadImage } from "../../../lib/utils";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  const cursorRef = useRef({ x: 0, y: 0 });

  // function to prepare imageData from image
  const prepareImageData = (image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);
    return context?.getImageData(0, 0, image.width, image.height);
  };

  // set canvas up
  const setup = async ({
    canvas,
    width,
    height,
    animate = true,
  }: {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    animate?: boolean;
  }) => {
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");

    const particles: Particle[] = [];

    const radius = width / 1.7;
    const numConcentric = 35;
    const particleSpacing = 10;
    const particleRadius = 14;

    // color data
    const imageData = prepareImageData(
      await loadImage("src/assets/images/profile.jpg"),
    );

    // origin points for circles
    const originX = width;
    const originY = height * 0.5;

    // adding particles
    for (let i = 0; i < numConcentric; ++i) {
      const currentRadius = (radius / numConcentric) * i;

      if (currentRadius == 0) {
        particles.push(
          new Particle({
            radius: particleRadius,
            x: originX,
            y: originY,
          }),
        );
      }
      const numParticles = Math.floor(
        (Math.PI * 2 * currentRadius) / (particleRadius + particleSpacing),
      );
      const angleSpacing = (Math.PI * 2) / numParticles;
      for (let angle = 0; angle < Math.PI * 2; angle += angleSpacing) {
        const x = originX + Math.cos(angle) * currentRadius;
        const y = height / 2 + Math.sin(angle) * currentRadius;

        // preparing color
        const ix = Math.floor(((originX + (width/2) - originX) / width) * imageData!.width);
        const iy = Math.floor((y / height) * imageData!.height);

        const index = (iy * imageData!.width + ix) * 4;
        const r = imageData!.data[index + 0];
        const g = imageData!.data[index + 1];
        const b = imageData!.data[index + 2];
        const a = imageData!.data[index + 3];

        const gray = (r + g + b) / 3;

        const color = `rgba(${r + 50}, ${g + 50}, ${b + 50}, ${a + 50})`;

        const particle = new Particle({
          radius: particleRadius * Math.pow(0.94, i),
          x: Math.random() * width,
          y: Math.random() * height,
          ix: x,
          iy: y,
          // color: color,
          color: "white"
        });
        particles.push(particle);
      }
    }

    // defining event listeners
    const handleMousedown = (e: MouseEvent) => {
      canvas.addEventListener("mousemove", handleMousemove);
      canvas.addEventListener("mouseup", handleMouseup);

      handleMousemove(e);
    };

    const handleMouseup = (e: MouseEvent) => {
      canvas.removeEventListener("mousemove", handleMousemove);
      canvas.removeEventListener("mouseup", handleMouseup);

      cursorRef.current.x = 9999;
      cursorRef.current.y = 9999;
    };

    const handleMousemove = (e: MouseEvent) => {
      updateCursorPosition(e);
      for (let particle of particles) {
        if (
          particle.cursorHitTest({
            x: cursorRef.current.x,
            y: cursorRef.current.y,
          })
        ) {
          const dx = particle.x - cursorRef.current.x;
          const dy = particle.y - cursorRef.current.y;

          particle.ax = dx;
          particle.ay = dy;
        }
      }
    };

    const updateCursorPosition = (e: MouseEvent) => {
      cursorRef.current.x = (e.clientX / canvas.offsetWidth) * width;
      cursorRef.current.y = (e.clientY / canvas.offsetHeight) * height;
    };

    // adding event listener
    canvas.addEventListener("mousedown", handleMousedown);

    const draw = ({
      canvas,
      context,
    }: {
      canvas: HTMLCanvasElement;
      context: CanvasRenderingContext2D;
    }) => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // sorting particles based on radius
      particles.sort((a, b) => a.radius - b.radius);

      for (let particle of particles) {
        // particle.draw(context);
        // particle.update({ cursorPosition: cursorRef.current });
      }

      if (animate) {
        requestAnimationFrame(() => draw({ canvas, context }));
      }
    };

    if (context) {
      if (animate) {
        requestAnimationFrame(() => draw({ canvas, context }));
      } else {
        draw({ canvas, context });
      }
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    setup({ canvas: canvasRef.current, width: width, height: height });
  }, [width]);
  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
}
