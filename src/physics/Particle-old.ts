export default class Particle {
  x: number;
  y: number;
  ix: number;
  iy: number;
  radius: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  dampingFactor: number;
  friction: number;
  minDist: number;
  constructor({
    x,
    y,
    radius = 10,
    ax = 0,
    ay = 0,
    vx = 0,
    vy = 0,
  }: {
    x: number;
    y: number;
    radius: number;
    ax?: number;
    ay?: number;
    vx?: number;
    vy?: number;
    dampingFactor?: number;
    friction?: number;
  }) {
    this.x = x;
    this.y = y;
    this.ix = x;
    this.iy = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.dampingFactor = 0.05;
    this.friction = 0.78;
    this.minDist = 100;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();

    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();

    context.restore();
  }

  update({ deltaTime }: { deltaTime: number }) {
    // // pull force

    // accelerating
    this.vx += this.ax;
    this.vy += this.ay;

    // moving
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;
  }

  // cursor hit test
  cursorHitTest({ x, y }: { x: number; y: number }) {
    const dx = x - this.x;
    const dy = y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.minDist;
  }
}
