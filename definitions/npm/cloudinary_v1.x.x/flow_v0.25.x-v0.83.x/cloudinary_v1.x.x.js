/**
 * Flow libdef for 'cloudinary'
 * by Vincent Driessen, 2019-01-08
 *
 * See https://www.npmjs.com/package/cloudinary
 */

declare module 'cloudinary' {
  declare type __TODO__ = any;

  // Source: https://cloudinary.com/documentation/image_transformation_reference
  declare type Crop =
    | 'scale' // default
    | 'fit'
    | 'limit'
    | 'mfit'
    | 'fill'
    | 'lfill'
    | 'pad'
    | 'lpad'
    | 'mpad'
    | 'fill_pad'
    | 'crop'
    | 'thumb'
    | 'imagga_crop'
    | 'imagga_scale';

  // Source: https://cloudinary.com/documentation/image_transformation_reference
  declare type Gravity =
    | 'north_west'
    | 'north'
    | 'north_east'
    | 'west'
    | 'center' // default
    | 'east'
    | 'south_west'
    | 'south'
    | 'south_east'
    | 'xy_center'
    | 'face'
    | 'face:center'
    | 'face:auto'
    | 'faces'
    | 'faces:center'
    | 'faces:auto'
    | 'body'
    | 'body:face'
    | 'liquid'
    | 'ocr_text'
    | 'adv_face'
    | 'adv_faces'
    | 'adv_eyes'
    | 'custom'
    | 'custom:face'
    | 'custom:faces'
    | 'custom:adv_face'
    | 'custom:adv_faces';

  declare type Transformation = {|
    angle?: number,
    crop?: Crop,
    effect?: string,
    gravity?: Gravity,
    height?: number,
    opacity?: number,
    overlay?: string,
    quality?: number,
    width?: number,
    x?: number,
    y?: number,
    zoom?: number,
  |};

  declare type Options = {|
    secure?: boolean,
    width?: number,
    height?: number,
    crop?: Crop,
    quality?: number,
    transformation?: Array<Transformation>,
  |};

  declare type Config = {|
    cloud_name: string,
    api_key: string,
    api_secret: string,
  |};

  declare export default {|
    CF_SHARED_CDN: string,
    AKAMAI_SHARED_CDN: string,
    SHARED_CDN: string,
    BLANK: string,

    config: Config => void,
    url: (public_id: string, options?: Options) => string,

    // The following exported fields haven't been typed yet
    utils: __TODO__,
    uploader: __TODO__,
    api: __TODO__,
    PreloadedFile: __TODO__,
    Cache: __TODO__,
    image: __TODO__,
    video: __TODO__,
    source: __TODO__,
    picture: __TODO__,
    cloudinary_js_config: __TODO__,
    v2: __TODO__,
  |};
}
