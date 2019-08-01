declare module 'p-do-whilst' {
  declare export default function PDoWhilst(
    action: () => any,
    condition: () => boolean,
  ): Promise<void>;
}
