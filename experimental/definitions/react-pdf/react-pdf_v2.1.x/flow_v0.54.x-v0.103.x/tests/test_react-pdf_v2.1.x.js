import React from "react";
import { Document, Page, Outline, setOptions } from "react-pdf";
import { Document as WebpackDocument } from "react-pdf/build/entry.webpack";
import { Page as NoWorkerPage } from "react-pdf/build/entry.noworker";

function WebpackReactPDF() {
  // $ExpectError
  return <WebpackDocument />;
}

function NoWorkerReactPDF() {
  // $ExpectError
  return <Page pageNumber="2" />;
}

function ReactPDF1() {
  // $ExpectError
  return <Document />;
}

function ReactPDF2() {
  // $ExpectError
  return <Document file="file.pdf" />;
}

function ReactPDF3() {
  return (
    <Document file="file.pdf">
      {/* $ExpectError */}
      <Page rotate="30" />
    </Document>
  );
}

function ReactPDF4() {
  return (
    <Document file="file.pdf">
      {/* $ExpectError */}
      <Page rotate="30" pageNumber="1" />
    </Document>
  );
}

function ReactPDF5() {
  return (
    <Document file="file.pdf">
      <Page rotate={30} pageNumber={1} />
      {/* $ExpectError */}
      <Outline onLoadSuccess={console.log("Success")} />
    </Document>
  );
}

function ReactPDF6() {
  return (
    <Document file="file.pdf">
      <Page rotate={30} pageNumber={1} />
      {/* $ExpectError */}
      <Outline onLoadSuccess={() => console.log("Success")} className={1} />
    </Document>
  );
}

// $ExpectError
setOptions({
  invalidKey: "value"
});

// $ExpectError
setOptions({
  disabledWorker: "invalid value"
});

setOptions({
  cMapUrl: "./cmaps",
  cMapPacked: true,
  disableWorker: true,
  workerSrc: "./src"
});

class ReactPDF extends React.Component<*, *> {
  pdf: ?HTMLElement;
  page: ?HTMLElement;

  render() {
    return (
      <Document
        file="file.pdf"
        className="doc"
        error={<div>Error!</div>}
        loading={<div>Loading!</div>}
        noData={<div>No PDF!</div>}
        inputRef={pdf => (this.pdf = pdf)}
        onItemClick={page => console.log(page)}
        onLoadError={err => console.error(err)}
        onLoadSuccess={pdf => console.log(pdf)}
        onSourceError={err => console.error(err)}
        onSourceSuccess={() => console.log("Success")}
        rotate={10}
      >
        <Page
          pageNumber={1}
          className="page"
          inputRef={page => (this.page = page)}
          onLoadError={err => console.error(err)}
          onLoadSuccess={pdf => console.log(pdf)}
          onRenderError={err => console.error(err)}
          onRenderSuccess={() => console.log("Success")}
          onGetAnnotationsError={err => console.error(err)}
          onGetAnnotationsSuccess={annotations => console.log(annotations)}
          onGetTextError={err => console.error(err)}
          onGetTextSuccess={items => console.log(items)}
          pageIndex={10}
          renderAnnotations
          renderTextLayer
          rotate={10}
          scale={2}
          width={600}
        />

        <Outline
          className="outline"
          onItemClick={page => console.log(page)}
          onLoadError={err => console.error(err)}
          onLoadSuccess={() => console.log("Success")}
          onParseError={err => console.error(err)}
          onParseSuccess={outline => console.log(outline)}
        />
      </Document>
    );
  }
}
