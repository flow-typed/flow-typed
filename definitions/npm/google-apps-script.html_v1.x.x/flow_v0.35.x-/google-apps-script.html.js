

declare module 'google-apps-script.html' {
					
}

declare module 'HTML' {
		declare export interface HtmlOutput {
		append(addedContent: string): HtmlOutput,
		appendUntrusted(addedContent: string): HtmlOutput,
		asTemplate(): HtmlTemplate,
		clear(): HtmlOutput,
		getAs(contentType: string): Base.Blob,
		getBlob(): Base.Blob,
		getContent(): string,
		getHeight(): Integer,
		getTitle(): string,
		getWidth(): Integer,
		setContent(content: string): HtmlOutput,
		setHeight(height: Integer): HtmlOutput,
		setSandboxMode(mode: SandboxMode): HtmlOutput,
		setTitle(title: string): HtmlOutput,
		setWidth(width: Integer): HtmlOutput
	}

	declare export interface HtmlService {
		SandboxMode: SandboxMode,
		createHtmlOutput(): HtmlOutput,
		createHtmlOutput(blob: Base.BlobSource): HtmlOutput,
		createHtmlOutput(html: string): HtmlOutput,
		createHtmlOutputFromFile(filename: string): HtmlOutput,
		createTemplate(blob: Base.BlobSource): HtmlTemplate,
		createTemplate(html: string): HtmlTemplate,
		createTemplateFromFile(filename: string): HtmlTemplate,
		getUserAgent(): string
	}

	declare export interface HtmlTemplate {
		evaluate(): HtmlOutput,
		getCode(): string,
		getCodeWithComments(): string,
		getRawContent(): string
	}

			
}