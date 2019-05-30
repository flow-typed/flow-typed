declare module 'expo-image-picker' {
  declare export type MediaTypeOptions = 'All' | 'Videos' | 'Images';
  declare export type ImageInfo = {|
    uri: string,
    width: number,
    height: number,
    type?: 'image' | 'video',
  |};

  declare export type NegativeImagePickerResult = {| cancelled: true |};
  declare export type PositiveImagePickerResult = {|
    ...ImageInfo,
    cancelled: false,
  |};
  declare export type ImagePickerResult =
    | NegativeImagePickerResult
    | PositiveImagePickerResult;

  declare export type ImagePickerOptions = {|
    mediaTypes?: MediaTypeOptions,
    allowsEditing?: boolean,
    aspect?: [number, number],
    quality?: number,
    base64?: boolean,
    exif?: boolean,
  |};

  declare export function launchImageLibraryAsync(
    options?: ImagePickerOptions
  ): Promise<ImagePickerResult>;
  declare export function launchCameraAsync(
    options?: ImagePickerOptions
  ): Promise<ImagePickerResult>;
}
