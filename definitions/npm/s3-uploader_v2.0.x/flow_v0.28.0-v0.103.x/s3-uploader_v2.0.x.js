declare module 's3-uploader' {
  declare export type S3UploaderVersion = {
    original?: boolean,
    suffix?: string,
    quality?: number,
    maxWidth?: number,
    maxHeight?: number
  };

  declare export type S3UploaderOptions = {
    awsAccessKeyId?: string,
    awsSecretAccessKey?: string,
    awsBucketRegion?: string,
    awsBucketPath?: string,
    awsBucketAcl?: string,
    awsMaxRetries?: number,
    awsHttpTimeout?: number,
    resizeQuality?: number,
    returnExif?: boolean,
    tmpDir?: string,
    workers?: number,
    url?: string,
    versions?: S3UploaderVersion
  };

  declare export type Meta = {
    format: string,
    fileSize: string,
    imageSize: imageSize,
    orientation: string,
    colorSpace: string,
    compression: string,
    quallity: string
  };

  declare export type imageSize = {
    height: number,
    width: number
  };

  declare export type image = {
    etag: string,
    format: string,
    height: number,
    original: boolean,
    path: string,
    size: string,
    src: string,
    url: string,
    width: number
  };

  declare export default class Upload {
    constructor(awsBucketName: string, opts: S3UploaderOptions): this;
    upload(src: string, opts?: S3UploaderOptions, cb?: (err: string, images: image[], meta: Meta) => void | mixed): void;
  }

}
