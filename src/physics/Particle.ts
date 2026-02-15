import colormap from "colormap";
import { mapRange } from "../lib/utils";

export default class {
  ix: number;
  iy: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  minDist: number;
  pushFactor: number;
  pullFactor: number;
  dampingFactor: number;
  iRadius: number;
  maxScale: number;
  colors: string[] ;
  color: string;
  constructor({
    radius = 10,
    x = 0,
    y = 0,
    ix,
    iy,
    color
  }: {
    x?: number;
    y?: number;
    ix?: number;
    iy?: number;
    radius?: number;
    color?: string;
  }) {
    this.ix = ix??x;
    this.iy = iy??y;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.minDist = 100;
    this.pushFactor = 0.02;
    this.pullFactor = 0.004;
    this.dampingFactor = 0.95;
    this.iRadius = radius;
    this.maxScale = 10;
    this.colors = colormap({ colormap: "viridis", nshades: 20, format: "hex" }) as string[];
    this.color = color ?? this.colors[0];
  }

  update({ cursorPosition }: { cursorPosition: { x: number; y: number } }) {
    let dx, dy, dd, disDelta;

    // pull force
    dx = this.ix - this.x;
    dy = this.iy - this.y;

    this.ax = dx * this.pullFactor;
    this.ay = dy * this.pullFactor;

    dd = Math.sqrt(dx * dx + dy * dy);

    // varying radius and color by distance from origin
    this.radius = Math.min(
      this.iRadius + dd / 8,
      this.iRadius * this.maxScale,
    );
    // this.color =
    //   this.colors[Math.floor(mapRange(dd, 0, 200, 0, this.colors.length - 1))];

    dx = this.x - cursorPosition.x;
    dy = this.y - cursorPosition.y;
    dd = Math.sqrt(dx * dx + dy * dy);

    if (dd < this.minDist) {
      disDelta = this.minDist - dd;
      this.ax += (dx / dd) * disDelta * this.pushFactor;
      this.ay += (dy / dd) * disDelta * this.pushFactor;
    }

    this.vx += this.ax;
    this.vy += this.ay;

    this.vx *= this.dampingFactor;
    this.vy *= this.dampingFactor;

    this.x += this.vx;
    this.y += this.vy;
  }

  cursorHitTest({ x, y }: { x: number; y: number }) {
    const dx = x - this.x;
    const dy = y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.minDist;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();

    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    // context.rect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);
    context.fillStyle = this.color ?? "white";
    context.strokeStyle = this.color ?? "white";
    context.lineWidth = 1
    context.fill();

    context.restore();
  }
}
