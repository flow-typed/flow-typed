declare module 'use-clipboard-copy' {
  declare export type UseClipboardOptions = {|
    copiedTimeout?: number,
    onSuccess?: () => void,
    onError?: () => void,
    selectOnCopy?: boolean,
    selectOnError?: boolean,
  |};

  declare export type ClipboardAPI<
    T: HTMLInputElement | HTMLTextAreaElement
  > = {|
    copied: boolean,
    copy: (text?: string) => void,
    isSupported: () => boolean,
    target: { current: T | null, ... },
  |};

  declare export function useClipboard<T>(
    options?: UseClipboardOptions
  ): ClipboardAPI<T>;
}
