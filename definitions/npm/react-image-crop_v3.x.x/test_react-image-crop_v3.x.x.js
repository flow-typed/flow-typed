import { describe, it } from 'flow-typed-test';

import React from 'react';
import ImageCrop, { makeAspectCrop, containCrop, getPixelCrop } from 'react-image-crop';

describe('react-image-crop', () => {

  const noop = () => {};
  const percentCrop = { x: 0, y: 0, width: 100, height: 100 };
  const aspectCrop = { ...percentCrop, aspect: 3 / 2 };

  describe('component', () => {
    it('should not show error when required params are set', () => {
      <ImageCrop
        src=""
        onChange={noop}
      />
    });

    it('should show error when required src param is not set', () => {
      // $ExpectError src param is not set
      <ImageCrop onChange={noop} />
    });

    it('should show error when required onChange param is not set', () => {
      // $ExpectError onChange param is not set
      <ImageCrop src="" />
    });

    it('should not show error when all params are correct', () => {
      <ImageCrop
        src=""
        onChange={noop}
        crop={{
          x: 0, y: 0, height: 100
        }}
        minWidth={100}
        minHeight={100}
        maxWidth={100}
        maxHeight={100}
        keepSelection={true}
        onChange={noop}
        onComplete={noop}
        onImageLoaded={noop}
        onDragStart={noop}
        onDragEnd={noop}
        disabled={true}
        crossorigin={'anonymous'}
        style={{color: '#fff'}}
        imageStyle={{color: '#fff'}}
      />
    });

    it('should show error when crop param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        crop={{x: '3%'}}
      />
    });

    it('should show error when minWidth param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        minWidth={'100px'}
      />
    });

    it('should show error when minHeight param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        minHeight={'100px'}
      />
    });

    it('should show error when maxWidth param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        maxWidth={'100px'}
      />
    });

    it('should show error when maxHeight param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        maxHeight={'100px'}
      />
    });

    it('should show error when keepSelection param is not of correct type', () => {
      // $ExpectError
      <ImageCrop src="" onChange={noop}
        minWidth={'100px'}
      />
    });

    it('should show error when crossorigin param is not of correct type', () => {
      // $ExpectError type should match crossOrigin in HTMLImageElement
      <ImageCrop src="" onChange={noop}
        crossorigin={true}
      />
    });

  });

  describe('makeAspectCrop util', () => {
    it('should not show error when params are correct', () => {
      makeAspectCrop(percentCrop, 3 / 2);
    });

    it('should show error when imageAspect is missing', () => {
      // $ExpectError
      makeAspectCrop(percentCrop);
    });
  });

  describe('containCrop util', () => {
    it('should not show error when params are correct', () => {
      containCrop(percentCrop, 3 / 2);
    });

    it('should show error when imageAspect is missing', () => {
      // $ExpectError
      containCrop(percentCrop);
    });
  });

  describe('getPixelCrop util', () => {
    it('should not show error when params are correct', () => {
      const image = document.createElement('img');
      getPixelCrop(image, aspectCrop);
    });

    it('should show error when parameters are missing', () => {
      // $ExpectError
      getPixelCrop();
    });
  });

});
