type npm$clampJs$ClampOptions = {
  clamp?: number | string,
  useNativeClamp?: boolean,
  truncationChar?: string,
  truncationHTML?: string,
  splitOnChars?: Array<string>,
  animate?: boolean
};

declare module "clamp-js" {
  declare module.exports: (
    element: HTMLElement,
    options?: npm$clampJs$ClampOptions
  ) => void;
}
