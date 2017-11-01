declare module "canvas-starfield" {
  declare class Starfield {
    constructor(config: {
      canvas: string | HTMLCanvasElement,
      vx?: number,
      vy?: number,
      maxStars?: number,
      maxRadius?: number,
      shootingStarInterval?: number
    }): Starfield;
    start(): void;
  }

  declare var exports: Starfield;
}
