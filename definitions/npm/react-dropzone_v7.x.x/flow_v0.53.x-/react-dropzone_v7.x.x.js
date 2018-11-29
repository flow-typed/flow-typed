declare module "react-dropzone" {
  declare type ChildrenProps = {
    draggedFiles: File[],
    acceptedFiles: File[],
    rejectedFiles: File[],
    isDragActive: boolean,
    isDragAccept: boolean,
    isDragReject: boolean,
    open: () => void,
  }

  declare type DropzoneProps = {
    disableClick?: boolean,
    disabled?: boolean,
    preventDropOnDocument?: boolean,
    inputProps?: {},
    maxSize?: number,
    minSize?: number,
    activeClassName?: string,
    acceptClassName?: string,
    rejectClassName?: string,
    disabledClassName?: string,
    activeStyle?: {},
    acceptStyle?: {},
    rejectStyle?: {},
    onDrop?: (acceptedFiles: File[], rejectedFiles: File[], event: SyntheticDragEvent<>) => mixed,
    onDropAccepted?: (acceptedFiles: File[], event: SyntheticDragEvent<>) => mixed,
    onDropRejected?: (rejectedFiles: File[], event: SyntheticDragEvent<>) => mixed,
    onFileDialogCancel?: () => mixed,
    getDataTransferItems?: (event: SyntheticDragEvent<>) => Promise<Array<File | DataTransferItem>>,

    accept?: string,
    children?: React$Node | (ChildrenProps) => React$Node,
    multiple?: boolean,
    name?: string,
    className?: string,
    style?: {},
    disabledStyle?: {},
    onClick?: (event: SyntheticMouseEvent<>) => mixed,
    onDragStart?: (event: SyntheticDragEvent<>) => mixed,
    onDragEnter?: (event: SyntheticDragEvent<>) => mixed,
    onDragOver?: (event: SyntheticDragEvent<>) => mixed,
    onDragLeave?: (event: SyntheticDragEvent<>) => mixed,
  };

  declare class Dropzone extends React$Component<DropzoneProps> {
    open(): void;
  }

  declare module.exports: typeof Dropzone;
}
