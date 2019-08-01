import React from "react";
import Lightbox from "react-image-lightbox";

function BadLightbox1() {
  // $ExpectError
  return <Lightbox />
}

function BadLightbox2() {
  // $ExpectError
  return <Lightbox mainSrc={1} />
}

function BadLightbox2() {
  // $ExpectError
  return <Lightbox mainSrc={1} onCloseRequest="close" />
}

function GoodLightbox1() {
  return <Lightbox mainSrc="1.png" onCloseRequest={() => console.log('close')} />
}

function GoodLightbox2() {
  return (
    <Lightbox
      imageTitle="image"
      imageCaption="caption"
      toolbarButtons={[null, <button>Click Me</button>]}
      reactModalProps={{}}
      animationDisabled
      animationDuration={300}
      animationOnKeyInput
      clickOutsideToClose
      closeLabel="close lightbox"
      discourageDownloads
      enableZoom
      imagePadding={10}
      imageCrossOrigin="cross origin"
      keyRepeatKeyupBonus={40}
      keyRepeatLimit={180}
      mainSrc="2.png"
      mainSrcThumbnail="thumbnail"
      nextLabel="next image"
      nextSrc="3.png"
      nextSrcThumbnail="next thumbnail"
      onAfterOpen={() => {}}
      onCloseRequest={() => console.log('close')}
      onImageLoadError={(img: string, srcType: string, err: Error) => { console.error(err) }}
      onMoveNextRequest={() => console.log('next')}
      onMovePrevRequest={() => console.log('prev')}
      prevLabel="previous image"
      prevSrc="1.png"
      prevSrcThumbnail="prev thumbnail"
      reactModalStyle={{}}
      wrapperClassName=""
      zoomInLabel="zoom in"
      zoomOutLabel="zoom out"
      imageLoadErrorMessage="this image failed to load"
    />
  )
}
