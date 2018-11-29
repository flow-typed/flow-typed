import React from "react";
import Dropzone, { type ChildrenProps } from "react-dropzone";

<Dropzone />;

<Dropzone>
  <div />
</Dropzone>;

<Dropzone
  accept="image/jpeg, image/png, application/pdf"
  disableClick={true}
  disabled={true}
  preventDropOnDocument={true}
  inputProps={{ className: "input-class" }}
  multiple={true}
  name="name"
  maxSize={1000}
  minSize={100}
  className="className"
  activeClassName="active"
  acceptClassName="accept"
  rejectClassName="reject"
  disabledClassName="disabled"
  style={{ height: '50px' }}
  activeStyle={{ height: '60px' }}
  acceptStyle={{ height: '70px' }}
  rejectStyle={{ height: '80px' }}
  disabledStyle={{ height: '90px' }}
  onClick={(event: SyntheticMouseEvent<>) => {}}
  onDrop={(acceptedFiles: File[], rejectedFiles: File[], event: SyntheticDragEvent<>) => {}}
  onDropAccepted={(acceptedFiles: File[], event: SyntheticDragEvent<>) => {}}
  onDropRejected={(rejectedFiles: File[], event: SyntheticDragEvent<>) => {}}
  onDragStart={(event: SyntheticDragEvent<>) => {}}
  onDragEnter={(event: SyntheticDragEvent<>) => {}}
  onDragOver={(event: SyntheticDragEvent<>) => {}}
  onDragLeave={(event: SyntheticDragEvent<>) => {}}
  onFileDialogCancel={() => {}}
  getDataTransferItems={(event: SyntheticDragEvent<>) => Promise.resolve(Array.from(event.dataTransfer.files))}
  ref={(ref: ?Dropzone) => {
    if (ref) ref.open();
  }}
>
  {
    ({
      draggedFiles,
      acceptedFiles,
      rejectedFiles,
      isDragActive,
      isDragAccept,
      isDragReject,
    }: ChildrenProps) => (
      <div />
    )
  }
</Dropzone>;

<Dropzone
  accept="image/jpeg, image/png, application/pdf"
  onClick={() => {}}
  onDrop={(acceptedFiles: File[]) => {}}
  onDropAccepted={(acceptedFiles: File[]) => {}}
  onDropRejected={(rejectedFiles: File[]) => {}}
  onDragStart={() => {}}
  onDragEnter={() => {}}
  onDragOver={() => {}}
  onDragLeave={() => {}}
>
  {
    ({
      isDragActive,
    }: { isDragActive: boolean }) => (
      <div />
    )
  }
</Dropzone>;

// $ExpectError - Wrong type for function handler
<Dropzone onDrop={(event: SyntheticDragEvent<>) => {}} />;

<Dropzone>
  {
    ({
      acceptedFiles,
    // $ExpectError - Wrong type for children function
    }: { acceptedFiles: string[] }) => (
      <div />
    )
  }
</Dropzone>;

<Dropzone>
  {
    // $ExpectError - Wrong return type for children function
    () => ({})
  }
</Dropzone>;
