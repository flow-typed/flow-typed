import Upload from 's3-uploader';
import type {
  S3UploaderVersion,
  S3UploaderOptions,
  imageSize,
  Meta,
  image,
} from 's3-uploader';

const myS3UploaderVersion: S3UploaderVersion = {
  original: true,
  suffix: '-test',
  quality: 1,
  maxWidth: 1,
  maxHeight: 1
};

const myS3UploaderOptions: S3UploaderOptions = {
  awsAccessKeyId: 'id',
  awsSecretAccessKey: 'awsSecretAccessKey',
  awsBucketRegion: 'awsBucketRegion',
  awsBucketPath: 'awsBucketPath',
  awsBucketAcl: 'awsBucketAcl',
  awsMaxRetries: 1,
  awsHttpTimeout: 1,
  resizeQuality: 1,
  returnExif: true,
  tmpDir: 'tmpDir',
  workers: 1,
  url: 'url',
  versions: myS3UploaderVersion
};

const myImageSize: imageSize = {
  height: 1,
  width: 1
}
// $ExpectError
const myErrorSize: imageSize = { height: '1',
  width: 1
}

const myMeta: Meta = {
  format: 'format',
  fileSize: 'fileSize',
  imageSize: myImageSize,
  orientation: 'orientation',
  colorSpace: 'colorSpace',
  compression: 'compression',
  quallity: 'quallity'
};

const myImage: image = {
  etag: 'etag',
  format: 'format',
  height: 1,
  original: true,
  path: 'path',
  size: 'size',
  src: 'src',
  url: 'url',
  width: 1
};

const myUpload: Upload = new Upload('myAWSBucket', myS3UploaderOptions);

// $ExpectError
myUpload.upload();

myUpload.upload('url');

myUpload.upload('url', myS3UploaderOptions);

myUpload.upload('url', myS3UploaderOptions, (err: string, images: image[], meta: Meta) => console.log('callback'));
