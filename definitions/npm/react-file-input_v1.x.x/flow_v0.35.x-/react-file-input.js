

declare module 'react-file-input' {
		declare interface FileInputProps {
		name: string,
		className: string,
		accept: string,
		placeholder: string,
		disabled?: boolean,
		onChange: (event: React.SyntheticEvent) => void
	}

		declare class FileInput extends React$Component<FileInputProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}