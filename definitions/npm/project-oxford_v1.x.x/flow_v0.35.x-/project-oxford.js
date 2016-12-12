

declare module 'project-oxford' {
				declare export class Client  {
		constructor(apiKey: string): this;
		face: FaceAPI;
		vision: VisionAPI
	}

	declare export class FaceAPI  {
		detect(options: Options.Detect): Promise<[FaceResponses.Detect]>;
		similar(
		sourceFaceId: string, candidateFacesIds: string[]
	): Promise<FaceResponses.Similar>;
		grouping(faces: string[]): Promise<FaceResponses.Grouping>;
		identify(
		faceIDs: string[], options: Options.Identify
	): Promise<FaceResponses.Identify[]>;
		verify(faces: string[]): Promise<FaceResponses.Verify>;
		personGroup: PersonGroup;
		person: Person
	}

	declare export class VisionAPI  {
		analyzeImage(options: Options.Analyze): Promise<VisionResponses.Analyze>;
		thumbnail(options: Options.Thumbnail): Promise<stream.Stream>;
		ocr(options: Options.Ocr): Promise<VisionResponses.Ocr>
	}

	declare export class PersonGroup  {
		create(personGroupId: string, name: string, userData: string): Promise<void>;
		delete(personGroupId: string): Promise<void>;
		get(personGroupId: string): Promise<PersonGroupResponses.PersonGroup>;
		trainingStatus(personGroupId: string): Promise<PersonGroupResponses.TrainingStatus>;
		trainingStart(personGroupId: string): Promise<PersonGroupResponses.TrainingStatus>;
		update(personGroupId: string, name: string, userData: string): Promise<void>;
		list(): Promise<PersonGroupResponses.PersonGroup[]>
	}

	declare export class Person  {
		addFace(
		personGroupId: string, personId: string, faceId: string, userData?: string
	): Promise<void>;
		deleteFace(personGroupId: string, personId: string, faceId: string): Promise<void>;
		updateFace(
		personGroupId: string, personId: string, faceId: string, userData: string
	): Promise<void>;
		getFace(
		personGroupId: string, personId: string, faceId: string
	): Promise<PersonResponses.Face>;
		create(
		personGroupId: string, faces: string[], name: string, userData: string
	): Promise<{
		personId: string
	}>;
		delete(personGroupId: string, personId: string): Promise<void>;
		get(personGroupId: string, personId: string): Promise<PersonResponses.Person>;
		update(
		personGroupId: string, personId: string, faces: string[], name: string, userData: string
	): Promise<void>;
		list(personGroupId: string): Promise<PersonResponses.Person[]>
	}

	
}

declare module 'Options' {
		declare interface Detect {
		url?: string,
		path?: string,
		stream?: stream.Stream,
		analyzesFaceLandmarks?: boolean,
		analyzesAge?: boolean,
		analyzesGender?: boolean,
		analyzesHeadPose?: boolean
	}

	declare interface Identify {
		personGroupId: string,
		maxNumOfCandidatesReturned: number
	}

	declare interface Analyze {
		url?: string,
		path?: string,
		ImageType?: boolean,
		Color?: boolean,
		Faces?: boolean,
		Adult?: boolean,
		Categories?: boolean
	}

	declare interface Thumbnail {
		url?: string,
		path?: string,
		width?: number,
		height?: number,
		smartCropping?: boolean,
		pipe?: stream.Writable
	}

	declare interface Ocr {
		url?: string,
		path?: string,
		language?: string,
		detectOrientation?: boolean
	}

			
}

declare module 'FaceResponses' {
		declare interface FaceRectangle {
		top: number,
		left: number,
		width: number,
		height: number
	}

	declare interface point {
		x: number,
		y: number
	}

	declare interface FaceLandmarks {
		pupilLeft: point,
		pupilRight: point,
		noseTip: point,
		mouthLeft: point,
		mouthRight: point,
		eyebrowLeftOuter: point,
		eyebrowLeftInner: point,
		eyeLeftOuter: point,
		eyeLeftTop: point,
		eyeLeftBottom: point,
		eyeLeftInner: point,
		eyebrowRightInner: point,
		eyebrowRightOuter: point,
		eyeRightInner: point,
		eyeRightTop: point,
		eyeRightBottom: point,
		eyeRightOuter: point,
		noseRootLeft: point,
		noseRootRight: point,
		noseLeftAlarTop: point,
		noseRightAlarTop: point,
		noseLeftAlarOutTip: point,
		noseRightAlarOutTip: point,
		upperLipTop: point,
		upperLipBottom: point,
		underLipTop: point,
		underLipBottom: point
	}

	declare interface Attributes {
		headPose: {
		pitch: number,
		roll: number,
		yaw: number
	},
		gender: string,
		age: number
	}

	declare export interface Detect {
		faceId: string,
		faceRectangle: FaceRectangle,
		faceLandmarks: FaceLandmarks,
		attributes: Attributes
	}

	declare export interface Similar {
		faceIds: string[]
	}

	declare export interface Grouping {
		groups: string[],
		messyGroup: string[]
	}

	declare export interface Identify {
		faceId: string,
		candidates: [{
		personId: string,
		confidence: number
	}]
	}

	declare export interface Verify {
		isIdentical: boolean,
		confidence: number
	}

			
}

declare module 'PersonGroupResponses' {
		declare export interface PersonGroup {
		personGroupId: string,
		name: string,
		userData: string
	}

	declare export interface TrainingStatus {
		personGroupId: string,
		status: string,
		startTime: string,
		endTime: string
	}

			
}

declare module 'PersonResponses' {
		declare export interface Create {
		personId: string
	}

	declare export interface Person {
		personId: string,
		faceIds: string[],
		name: string,
		userData: string
	}

	declare export interface Face {
		faceId: string,
		userData: string
	}

			
}

declare module 'VisionResponses' {
		declare export interface Analyze {
		categories: [{
		name: string,
		score: number
	}],
		adult: {
		isAdultContent: boolean,
		isRacyContent: boolean,
		adultScore: number,
		racyScore: number
	},
		requestId: string,
		metadata: {
		width: number,
		height: number,
		format: string
	},
		faces: [{
		age: number,
		gender: string,
		faceRectangle: {
		left: number,
		top: number,
		width: number,
		height: number
	}
	}],
		color: {
		dominantColorForeground: string,
		dominantColorBackground: string,
		dominantColors: string[],
		accentColor: string,
		isBWImg: boolean
	},
		imageType: {
		clipArtType: number,
		lineDrawingType: number
	}
	}

	declare export interface Ocr {
		language: string,
		textAngle: number,
		orientation: string,
		regions: [{
		boundingBox: string,
		lines: [{
		boundingBox: string,
		words: [{
		boundingBox: string,
		text: string
	}]
	}]
	}]
	}

			
}