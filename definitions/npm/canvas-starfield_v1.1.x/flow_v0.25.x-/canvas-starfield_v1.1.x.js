declare module "canvas-starfield" {
  declare class Starfield {
    constructor(config: {
      canvas: string | HTMLCanvasElement,
      vx?: number,
      vy?: number,
      maxStars?: number,
      maxRadius?: number,
      shootingStarInterval?: number
    }): this;
    start(): void;
  }

  declare var exports: Starfield;
}
