

declare module 'google-apps-script.content' {
					
}

declare module 'Content' {
		declare export interface ContentService {
		MimeType: MimeType,
		createTextOutput(): TextOutput,
		createTextOutput(content: string): TextOutput
	}

	declare export interface TextOutput {
		append(addedContent: string): TextOutput,
		clear(): TextOutput,
		downloadAsFile(filename: string): TextOutput,
		getContent(): string,
		getFileName(): string,
		getMimeType(): MimeType,
		setContent(content: string): TextOutput,
		setMimeType(mimeType: MimeType): TextOutput
	}

			
}