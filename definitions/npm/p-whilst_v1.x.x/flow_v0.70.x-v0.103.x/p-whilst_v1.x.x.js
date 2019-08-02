declare module 'p-whilst' {
  declare export default function PWhilst(
    condition: () => boolean,
    action: () => any,
  ): Promise<void>;
}
