type ShortIdModule = {
  (): string,
  generate(): string,
  seed(seed: number): ShortIdModule,
  worker(workerId: number): ShortIdModule,
  characters(characters: string): string,
  decode(id: string): { version: number, worker: number },
  isValid(id: mixed): boolean,
};

declare module 'shortid' {
  declare module.exports: ShortIdModule;
};
