declare module "react-dropzone" {
  declare type ChildrenProps = {
    draggedFiles: Array<File>,
    acceptedFiles: Array<File>,
    rejectedFiles: Array<File>,
    isDragActive: boolean,
    isDragAccept: boolean,
    isDragReject: boolean,
  }

  declare type DropzoneFile = File & {
    preview?: string;
  }

  declare type DropzoneProps = {
    accept?: string,
    children?: React$Node | (ChildrenProps) => React$Node,
    disableClick?: boolean,
    disabled?: boolean,
    disablePreview?: boolean,
    preventDropOnDocument?: boolean,
    inputProps?: Object,
    multiple?: boolean,
    name?: string,
    maxSize?: number,
    minSize?: number,
    className?: string,
    activeClassName?: string,
    acceptClassName?: string,
    rejectClassName?: string,
    disabledClassName?: string,
    style?: Object,
    activeStyle?: Object,
    acceptStyle?: Object,
    rejectStyle?: Object,
    disabledStyle?: Object,
    onClick?: (event: SyntheticMouseEvent<>) => mixed,
    onDrop?: (acceptedFiles: Array<DropzoneFile>, rejectedFiles: Array<DropzoneFile>, event: SyntheticDragEvent<>) => mixed,
    onDropAccepted?: (acceptedFiles: Array<DropzoneFile>, event: SyntheticDragEvent<>) => mixed,
    onDropRejected?: (rejectedFiles: Array<DropzoneFile>, event: SyntheticDragEvent<>) => mixed,
    onDragStart?: (event: SyntheticDragEvent<>) => mixed,
    onDragEnter?: (event: SyntheticDragEvent<>) => mixed,
    onDragOver?: (event: SyntheticDragEvent<>) => mixed,
    onDragLeave?: (event: SyntheticDragEvent<>) => mixed,
    onFileDialogCancel?: () => mixed,
  };

  declare class Dropzone extends React$Component<DropzoneProps> {
    open(): void;
  }

  declare module.exports: typeof Dropzone;
}
