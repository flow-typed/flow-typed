

declare module 'bootstrap-fileinput' {
		declare interface JQuery {
		fileinput: (options?: BootstrapFileInput.FileInputOptions) => JQuery
	}

			
}

declare module 'BootstrapFileInput' {
		declare interface FileInputOptions {
		language?: string,
		showCaption?: boolean,
		showPreview?: boolean,
		showRemove?: boolean,
		showUpload?: boolean,
		showCancel?: boolean,
		showClose?: boolean,
		showUploadedThumbs?: boolean,
		autoReplace?: boolean,
		captionClass?: string,
		previewClass?: string,
		mainClass?: string,
		initialPreview?: string | any[],
		initialPreviewCount?: number,
		initialPreviewDelimiter?: string,
		initialPreviewConfig?: PreviewConfig[],
		initialPreviewShowDelete?: boolean,
		removeFromPreviewOnError?: boolean,
		previewThumbTags?: {
		[key: string]: string
	},
		initialPreviewThumbTags?: {
		[key: string]: string
	},
		deleteExtraData?: {
		
	} | {
		(): {
		
	}
	},
		deleteUrl?: string,
		initialCaption?: string,
		overwriteInitial?: boolean,
		layoutTemplates?: LayoutTemplates,
		previewTemplates?: PreviewTemplates,
		allowedFileTypes?: ("image" | "html" | "text" | "video" | "audio" | "flash" | "object")[],
		allowedFileExtensions?: string[],
		allowedPreviewTypes?: ("image" | "html" | "text" | "video" | "audio" | "flash" | "object")[],
		allowedPreviewMimeTypes?: string[],
		defaultPreviewContent?: string,
		customLayoutTags?: {
		
	},
		customPreviewTags?: {
		
	},
		previewSettings?: PreviewSettings,
		fileTypeSettings?: FileTypeSettings,
		previewFileIcon?: string,
		previewFileIconClass?: string,
		previewFileIconSettings?: PreviewFileIconSettings,
		previewFileExtSettings?: PreviewFileExtSettings,
		buttonLabelClass?: string,
		browseLabel?: string,
		browseIcon?: string,
		browseClass?: string,
		removeLabel?: string,
		removeIcon?: string,
		removeClass?: string,
		removeTitle?: string,
		uploadLabel?: string,
		uploadIcon?: string,
		uploadClass?: string,
		uploadTitle?: string,
		uploadUrl?: string,
		uploadAsync?: boolean,
		uploadExtraData?: {
		
	} | ((previewId?: string, index?: number) => {
		
	}),
		minImageHeight?: number,
		maxImageWidth?: number,
		maxImageHeight?: number,
		resizeImage?: boolean,
		resizePreference?: "width" | "height",
		resizeImageQuality?: number,
		resizeDefaultImageType?: string,
		maxFileSize?: number,
		minFileCount?: number,
		maxFileCount?: number,
		validateInitialCount?: boolean,
		msgNo?: string,
		msgCancelled?: string,
		msgZoomTitle?: string,
		msgZoomModalHeading?: string,
		msgSizeTooLarge?: string,
		msgFilesTooLess?: string,
		msgFilesTooMany?: string,
		msgFileNotFound?: string,
		msgFileSecured?: string,
		msgFileNotReadable?: string,
		msgFilePreviewAborted?: string,
		msgFilePreviewError?: string,
		msgInvalidFileType?: string,
		msgInvalidFileExtension?: string,
		msgUploadAborted?: string,
		msgValidationError?: string,
		msgValidationErrorClass?: string,
		msgValidationErrorIcon?: string,
		msgErrorClass?: string,
		msgLoading?: string,
		msgProgress?: string,
		msgSelected?: string,
		msgFoldersNotAllowed?: string,
		msgImageWidthSmall?: string,
		msgImageHeightSmall?: string,
		msgImageWidthLarge?: string,
		msgImageHeightLarge?: string,
		progressClass?: string,
		progressCompleteClass?: string,
		progressErrorClass?: string,
		previewFileType?: "image" | "text" | "any",
		zoomIndicator?: string,
		elErrorContainer?: string,
		elCaptionContainer?: string,
		elCaptionText?: string,
		elPreviewContainer?: string,
		elPreviewImage?: string,
		elPreviewStatus?: string,
		slugCallback?: (filename: string) => string,
		dropZoneEnabled?: boolean,
		dropZoneTitle?: string,
		dropZoneTitleClass?: string,
		fileActionsettings?: FileActionSettings,
		otherActionButtons?: string,
		textEncoding?: string,
		ajaxSettings?: JQueryAjaxSettings,
		ajaxDeleteSettings?: JQueryAjaxSettings,
		showAjaxErrorDetails?: boolean
	}

	declare interface PreviewConfig {
		caption: string,
		width: string,
		url: string,
		key: string | {
		
	},
		frameClass: string,
		frameAttr: {
		
	},
		extra: {
		
	} | Function
	}

	declare interface LayoutTemplates {
		main1?: string,
		main2?: string,
		preview?: string,
		icon?: string,
		caption?: string,
		modal?: string,
		progress?: string,
		footer?: string,
		actions?: string,
		actionDelete?: string,
		actionUpload?: string,
		btnDefault?: string,
		btnLink?: string,
		btnBrowse?: string
	}

	declare interface PreviewTemplates {
		image?: string,
		text?: string,
		html?: string,
		video?: string,
		audio?: string,
		flash?: string,
		object?: string,
		generic?: string
	}

	declare interface PreviewSettings {
		image?: {
		width?: string,
		height?: string
	},
		html?: {
		width?: string,
		height?: string
	},
		text?: {
		width?: string,
		height?: string
	},
		video?: {
		width?: string,
		height?: string
	},
		audio?: {
		width?: string,
		height?: string
	},
		flash?: {
		width?: string,
		height?: string
	},
		object?: {
		width?: string,
		height?: string
	},
		other?: {
		width?: string,
		height?: string
	}
	}

	declare interface FileTypeSettings {
		image: (vType: string, vName: string) => boolean,
		html: (vType: string, vName: string) => boolean,
		text: (vType: string, vName: string) => boolean,
		video: (vType: string, vName: string) => boolean,
		audio: (vType: string, vName: string) => boolean,
		flash: (vType: string, vName: string) => boolean,
		object: (vType: string, vName: string) => boolean,
		other: (vType: string, vName: string) => boolean
	}

	declare interface PreviewFileIconSettings {
		[key: string]: string
	}

	declare interface PreviewFileExtSettings {
		[key: string]: (ext: string) => boolean
	}

	declare interface FileActionSettings {
		removeIcon: string,
		removeClass: string,
		removeTitle: string,
		uploadIcon: string,
		uploadClass: string,
		uploadTitle: string,
		indicatorNew: string,
		indicatorSuccess: string,
		indicatorError: string,
		indicatorLoading: string,
		indicatorNewTitle: string,
		indicatorSuccessTitle: string,
		indicatorErrorTitle: string,
		indicatorLoadingTitle: string
	}

			
}