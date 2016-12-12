

declare module 'vexflow' {
			declare function sanitizeDuration(duration: string): string

		declare module.exports: undefined


}

declare module 'npm$namespace$Vex' {
		declare interface IRenderContext {
		clear(): void,
		setFont(family: string, size: number, weight?: number): IRenderContext,
		setRawFont(font: string): IRenderContext,
		setFillStyle(style: string): IRenderContext,
		setBackgroundFillStyle(style: string): IRenderContext,
		setStrokeStyle(style: string): IRenderContext,
		setShadowColor(color: string): IRenderContext,
		setShadowBlur(blur: string): IRenderContext,
		setLineWidth(width: number): IRenderContext,
		setLineCap(cap_type: string): IRenderContext,
		setLineDash(dash: string): IRenderContext,
		scale(x: number, y: number): IRenderContext,
		resize(width: number, height: number): IRenderContext,
		fillRect(x: number, y: number, width: number, height: number): IRenderContext,
		clearRect(x: number, y: number, width: number, height: number): IRenderContext,
		beginPath(): IRenderContext,
		moveTo(x: number, y: number): IRenderContext,
		lineTo(x: number, y: number): IRenderContext,
		bezierCurveToTo(
		x1: number, y1: number, x2: number, y2: number, x: number, y: number
	): IRenderContext,
		quadraticCurveToTo(x1: number, y1: number, x2: number, y2: number): void,
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean
	): IRenderContext,
		glow(): IRenderContext,
		fill(): IRenderContext,
		stroke(): IRenderContext,
		closePath(): IRenderContext,
		fillText(text: string, x: number, y: number): IRenderContext,
		save(): IRenderContext,
		restore(): IRenderContext,
		measureText(text: string): {
		width: number
	}
	}

	declare interface IFont {
		glyphs: {
		x_min: number,
		x_max: number,
		ha: number,
		o: string[]
	}[],
		cssFontWeight: string,
		ascender: number,
		underlinePosition: number,
		cssFontStyle: string,
		boundingBox: {
		yMin: number,
		xMin: number,
		yMax: number,
		xMax: number
	},
		resolution: number,
		descender: number,
		familyName: string,
		lineHeight: number,
		underlineThickness: number,
		original_font_information?: {
		postscript_name: string,
		version_string: string,
		vendor_url: string,
		full_font_name: string,
		font_family_name: string,
		copyright: string,
		description: string,
		trademark: string,
		designer: string,
		designer_url: string,
		unique_font_identifier: string,
		license_url: string,
		license_description: string,
		manufacturer_name: string,
		font_sub_family_name: string
	}
	}

	declare function L(block: string, args: any[]): void

	declare function Merge<T>(destination: T, source: Object): T

	declare function Min(a: number, b: number): number

	declare function Max(a: number, b: number): number

	declare function RoundN(x: number, n: number): number

	declare function MidLine(a: number, b: number): number

	declare function SortAndUnique<T>(arr: T, cmp: Function, eq: Function): T

	declare function Contains(a: any[], obj: any): boolean

	declare function getCanvasContext(canvas_sel: string): CanvasRenderingContext2D

	declare function drawDot(ctx: IRenderContext, x: number, y: number, color?: string): void

	declare function BM(s: number, f: Function): void

	declare function Inherit<T>(child: T, parent: Object, object: Object): T

	declare class RuntimeError  {
		constructor(code: string, message: string): this
	}

	declare class RERR  {
		constructor(code: string, message: string): this
	}

	
}

declare module 'Flow' {
		declare interface Tickable {
		setContext(context: IRenderContext): void,
		getBoundingBox(): BoundingBox,
		getTicks(): Fraction,
		shouldIgnoreTicks(): boolean,
		getWidth(): number,
		setXShift(x: number): Tickable,
		getCenterXShift(): number,
		isCenterAligned(): boolean,
		setCenterAlignment(align_center: boolean): Tickable,
		getVoice(): Voice,
		setVoice(voice: Voice): void,
		getTuplet(): Tuplet,
		setTuplet(tuplet: Tuplet): Tickable,
		addToModifierContext(mc: ModifierContext): void,
		addModifier(mod: Modifier): Tickable,
		setTickContext(tc: TickContext): void,
		preFormat(): void,
		postFormat(): Tickable,
		getIntrinsicTicks(): Fraction,
		setIntrinsicTicks(intrinsicTicks: Fraction): void,
		getTickMultiplier(): Fraction,
		applyTickMultiplier(numerator: number, denominator: number): void,
		setDuration(duration: Fraction): void
	}

	declare function clefProperties(clef: string): {
		line_shift: number
	}

	declare function keyProperties(
		key: string, clef: string, params: {
		octave_shift?: number
	}
	): {
		key: string,
		octave: number,
		line: number,
		int_value: number,
		accidental: string,
		code: number,
		stroke: number,
		shift_right: number,
		displaced: boolean
	}

	declare function integerToNote(integer: number): string

	declare function tabToGlyph(
		fret: string
	): {
		text: string,
		code: number,
		width: number,
		shift_y: number
	}

	declare function textWidth(text: string): number

	declare function articulationCodes(
		artic: string
	): {
		code: string,
		width: number,
		shift_right: number,
		shift_up: number,
		shift_down: number,
		between_lines: boolean
	}

	declare function accidentalCodes(
		acc: string
	): {
		code: string,
		width: number,
		gracenote_width: number,
		shift_right: number,
		shift_down: number
	}

	declare function ornamentCodes(
		acc: string
	): {
		code: string,
		shift_right: number,
		shift_up: number,
		shift_down: number,
		width: number
	}

	declare function keySignature(spec: string): {
		type: string,
		line: number
	}[]

	declare function parseNoteDurationString(
		durationString: string
	): {
		duration: string,
		dots: number,
		type: string
	}

	declare function parseNoteData(
		noteData: {
		duration: string,
		dots: number,
		type: string
	}
	): {
		duration: string,
		type: string,
		dots: number,
		ticks: number
	}

	declare function durationToFraction(duration: string): Fraction

	declare function durationToNumber(duration: string): number

	declare function durationToTicks(duration: string): number

	declare function durationToGlyph(
		duration: string, type: string
	): {
		head_width: number,
		stem: boolean,
		stem_offset: number,
		flag: boolean,
		stem_up_extension: number,
		stem_down_extension: number,
		gracenote_stem_up_extension: number,
		gracenote_stem_down_extension: number,
		tabnote_stem_up_extension: number,
		tabnote_stem_down_extension: number,
		dot_shiftY: number,
		line_above: number,
		line_below: number,
		code_head?: string,
		rest?: boolean,
		position?: string
	}

	declare function renderGlyph(
		ctx: IRenderContext, x_pos: number, y_pos: number, point: number, val: string, nocache: boolean
	): void

	declare class Accidental extends Modifier {
		setNote(note: Note): Modifier;
		constructor(type: string): this;
		DEBUG: boolean;
		format(
		accidentals: Accidental[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): void;
		setNote(note: StaveNote): void;
		setAsCautionary(): Accidental;
		draw(): void;
		applyAccidentals(voices: Voice[], keySignature?: string): void
	}

	declare class Annotation extends Modifier {
		constructor(text: string): this;
		DEBUG: boolean;
		format(
		annotations: Annotation[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		setTextLine(line: number): Annotation;
		setFont(family: string, size: number, weight: string): Annotation;
		setVerticalJustification(just: Annotation.VerticalJustify): Annotation;
		getJustification(): Annotation.Justify;
		setJustification(justification: Annotation.Justify): Annotation;
		draw(): void
	}

	declare class Articulation extends Modifier {
		constructor(type: string): this;
		DEBUG: boolean;
		format(
		articulations: Articulation[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		draw(): void
	}

	declare class BarNote extends Note {
		DEBUG: boolean;
		getType(): Barline.type;
		setType(type: Barline.type): BarNote;
		getBoundingBox(): BoundingBox;
		addToModifierContext(): BarNote;
		preFormat(): BarNote;
		draw(): void
	}

	declare class Barline extends StaveModifier {
		constructor(type: Barline.type, x: number): this;
		getCategory(): string;
		setX(x: number): Barline;
		draw(stave: Stave, x_shift?: number): void;
		drawVerticalBar(stave: Stave, x: number, double_bar?: boolean): void;
		drawVerticalEndBar(stave: Stave, x: number): void;
		drawRepeatBar(stave: Stave, x: number, begin: boolean): void
	}

	declare class Beam  {
		constructor(notes: StemmableNote[], auto_stem?: boolean): this;
		setContext(context: IRenderContext): Beam;
		getNotes(): StemmableNote[];
		getBeamCount(): number;
		breakSecondaryAt(indices: number[]): Beam;
		getSlopeY(): number;
		calculateSlope(): void;
		applyStemExtensions(): void;
		getBeamLines(duration: string): {
		start: number,
		end: number
	}[];
		drawStems(): void;
		drawBeamLines(): void;
		preFormat(): Beam;
		postFormat(): Beam;
		draw(): boolean;
		calculateStemDirection(notes: Note): number;
		getDefaultBeamGroups(time_sig: string): Fraction[];
		applyAndGetBeams(voice: Voice, stem_direction: number, groups: Fraction[]): Beam[];
		generateBeams(
		notes: StemmableNote[], config?: {
		groups?: Fraction[],
		stem_direction?: number,
		beam_rests?: boolean,
		beam_middle_only?: boolean,
		show_stemlets?: boolean,
		maintain_stem_directions?: boolean
	}
	): Beam[]
	}

	declare class Bend extends Modifier {
		constructor(text: string, release?: boolean, phrase?: {
		type: number,
		text: string,
		width: number
	}[]): this;
		UP: number;
		DOWN: number;
		format(
		bends: Bend[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		setXShift(value: number): void;
		setFont(font: string): Bend;
		getText(): string;
		updateWidth(): Bend;
		draw(): void
	}

	declare class BoundingBox  {
		constructor(x: number, y: number, w: number, h: number): this;
		copy(that: BoundingBox): BoundingBox;
		getX(): number;
		getY(): number;
		getW(): number;
		getH(): number;
		setX(x: number): BoundingBox;
		setY(y: number): BoundingBox;
		setW(w: number): BoundingBox;
		setH(h: number): BoundingBox;
		move(x: number, y: number): void;
		clone(): BoundingBox;
		mergeWith(boundingBox: BoundingBox, ctx?: IRenderContext): BoundingBox;
		draw(ctx: IRenderContext, x: number, y: number): void
	}

	declare class CanvasContext extends IRenderContext {
		setLineDash(dash: string): CanvasContext;
		scale(x: number, y: number): CanvasContext;
		resize(width: number, height: number): CanvasContext;
		fillRect(x: number, y: number, width: number, height: number): CanvasContext;
		clearRect(x: number, y: number, width: number, height: number): CanvasContext;
		beginPath(): CanvasContext;
		moveTo(x: number, y: number): CanvasContext;
		lineTo(x: number, y: number): CanvasContext;
		bezierCurveToTo(
		x1: number, y1: number, x2: number, y2: number, x: number, y: number
	): CanvasContext;
		quadraticCurveToTo(x1: number, y1: number, x2: number, y2: number): CanvasContext;
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean
	): CanvasContext;
		glow(): CanvasContext;
		fill(): CanvasContext;
		stroke(): CanvasContext;
		closePath(): CanvasContext;
		fillText(text: string, x: number, y: number): CanvasContext;
		save(): CanvasContext;
		restore(): CanvasContext;
		constructor(context: CanvasRenderingContext2D): this;
		WIDTH: number;
		HEIGHT: number;
		clear(): void;
		setFont(family: string, size: number, weight?: number): CanvasContext;
		setRawFont(font: string): CanvasContext;
		setFillStyle(style: string): CanvasContext;
		setBackgroundFillStyle(style: string): CanvasContext;
		setStrokeStyle(style: string): CanvasContext;
		setShadowColor(style: string): CanvasContext;
		setShadowBlur(blur: string): CanvasContext;
		setLineWidth(width: number): CanvasContext;
		setLineCap(cap_type: string): CanvasContext;
		setLineDash(dash: string): void;
		scale(x: number, y: number): void;
		resize(width: number, height: number): void;
		fillRect(x: number, y: number, width: number, height: number): void;
		clearRect(x: number, y: number, width: number, height: number): void;
		beginPath(): void;
		moveTo(x: number, y: number): void;
		lineTo(x: number, y: number): void;
		bezierCurveToTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
		quadraticCurveToTo(x1: number, y1: number, x: number, y: number): void;
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean
	): void;
		glow(): void;
		fill(): void;
		stroke(): void;
		closePath(): void;
		measureText(text: string): TextMetrics;
		fillText(text: string, x: number, y: number): void;
		save(): void;
		restore(): void
	}

	declare class Clef extends StaveModifier {
		addModifier(): void;
		addEndModifier(): void;
		constructor(clef: string, size?: string, annotation?: string): this;
		DEBUG: boolean;
		addModifier(stave: Stave): void;
		addEndModifier(stave: Stave): void
	}

	declare class ClefNote extends Note {
		setStave(stave: Stave): Note;
		constructor(clef: string, size?: string, annotation?: string): this;
		setClef(clef: string, size?: string, annotation?: string): ClefNote;
		getClef(): string;
		setStave(stave: Stave): void;
		getBoundingBox(): BoundingBox;
		addToModifierContext(): ClefNote;
		getCategory(): string;
		preFormat(): ClefNote;
		draw(): void
	}

	declare class Crescendo extends Note {
		constructor(note_struct: {
		duration: number,
		line?: number
	}): this;
		DEBUG: boolean;
		setLine(line: number): Crescendo;
		setHeight(height: number): Crescendo;
		setDecrescendo(decresc: boolean): Crescendo;
		preFormat(): Crescendo;
		draw(): void
	}

	declare class Curve  {
		constructor(from: Note, to: Note, options?: {
		spacing?: number,
		thickness?: number,
		x_shift?: number,
		y_shift: number,
		position: Curve.Position,
		invert: boolean,
		cps?: {
		x: number,
		y: number
	}[]
	}): this;
		DEBUG: boolean;
		setContext(context: IRenderContext): Curve;
		setNotes(from: Note, to: Note): Curve;
		isPartial(): boolean;
		renderCurve(
		params: {
		first_x: number,
		first_y: number,
		last_x: number,
		last_y: number,
		direction: number
	}
	): void;
		draw(): boolean
	}

	declare class Dot extends Modifier {
		setNote(note: Note): Dot;
		format(
		dots: number, state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): void;
		setNote(note: Note): void;
		setDotShiftY(y: number): Dot;
		draw(): void
	}

	declare class Formatter  {
		DEBUG: boolean;
		FormatAndDraw(
		ctx: IRenderContext, stave: Stave, notes: Note[], params?: {
		auto_beam: boolean,
		align_rests: boolean
	}
	): BoundingBox;
		FormatAndDraw(
		ctx: IRenderContext, stave: Stave, notes: Note[], params?: boolean
	): BoundingBox;
		FormatAndDrawTab(
		ctx: IRenderContext, tabstave: TabStave, stave: Stave, tabnotes: TabNote[], notes: Note[], autobeam?: boolean, params?: {
		auto_beam: boolean,
		align_rests: boolean
	}
	): void;
		FormatAndDrawTab(
		ctx: IRenderContext, tabstave: TabStave, stave: Stave, tabnotes: TabNote[], notes: Note[], autobeam?: boolean, params?: boolean
	): void;
		AlignRestsToNotes(notes: Note[], align_all_notes?: boolean, align_tuplets?: boolean): Formatter;
		alignRests(voices: Voice[], align_all_notes: boolean): void;
		preCalculateMinTotalWidth(voices: Voice[]): number;
		getMinTotalWidth(): number;
		createModifierContexts(voices: Voice[]): ModifierContext[];
		createTickContexts(voices: Voice[]): TickContext[];
		preFormat(
		justifyWidth?: number, rendering_context?: IRenderContext, voices?: Voice[], stave?: Stave
	): void;
		postFormat(): Formatter;
		joinVoices(voices: Voice[]): Formatter;
		format(
		voices: Voice[], justifyWidth: number, options?: {
		align_rests?: boolean,
		context: IRenderContext
	}
	): Formatter;
		formatToStave(
		voices: Voice[], stave: Stave, options?: {
		align_rests?: boolean,
		context: IRenderContext
	}
	): Formatter
	}

	declare class Fraction  {
		constructor(numerator: number, denominator: number): this;
		GCD(a: number, b: number): number;
		LCM(a: number, b: number): number;
		LCMM(a: number, b: number): number;
		set(numerator: number, denominator: number): Fraction;
		value(): number;
		simplify(): Fraction;
		add(param1: Fraction, param2: Fraction): Fraction;
		add(param1: number, param2: number): Fraction;
		subtract(param1: Fraction, param2: Fraction): Fraction;
		subtract(param1: number, param2: number): Fraction;
		multiply(param1: Fraction, param2: Fraction): Fraction;
		multiply(param1: number, param2: number): Fraction;
		divide(param1: Fraction, param2: Fraction): Fraction;
		divide(param1: number, param2: number): Fraction;
		equals(compare: Fraction): boolean;
		greaterThan(compare: Fraction): boolean;
		greaterThanEquals(compare: Fraction): boolean;
		lessThan(compare: Fraction): boolean;
		lessThanEquals(compare: Fraction): boolean;
		clone(): Fraction;
		copy(copy: Fraction): Fraction;
		quotient(): number;
		fraction(): number;
		abs(): Fraction;
		toString(): string;
		toSimplifiedString(): string;
		toMixedString(): string;
		parse(str: string): Fraction
	}

	declare class FretHandFinger extends Modifier {
		constructor(number: number): this;
		format(
		nums: FretHandFinger[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): void;
		getNote(): Note;
		setNote(note: Note): FretHandFinger;
		getIndex(): number;
		setIndex(index: number): FretHandFinger;
		getPosition(): Modifier.Position;
		setPosition(position: Modifier.Position): FretHandFinger;
		setFretHandFinger(number: number): FretHandFinger;
		setOffsetX(x: number): FretHandFinger;
		setOffsetY(y: number): FretHandFinger;
		draw(): void
	}

	declare class GhostNote extends StemmableNote {
		setStave(stave: Stave): Note;
		constructor(duration: string): this;
		constructor(note_struct: {
		type?: string,
		dots?: number,
		duration: string
	}): this;
		isRest(): boolean;
		setStave(stave: Stave): void;
		addToModifierContext(): GhostNote;
		preFormat(): GhostNote;
		draw(): void
	}

	declare class Glyph  {
		constructor(code: string, point: number, options?: {
		cache?: boolean,
		font?: IFont
	}): this;
		setOptions(options: {
		cache?: boolean,
		font?: IFont
	}): void;
		setStave(stave: Stave): Glyph;
		setXShift(x_shift: number): Glyph;
		setYShift(y_shift: number): Glyph;
		setContext(context: IRenderContext): Glyph;
		getContext(): IRenderContext;
		reset(): void;
		setWidth(width: number): Glyph;
		getMetrics(): {
		x_min: number,
		x_max: number,
		width: number,
		height: number
	};
		render(ctx: IRenderContext, x_pos: number, y_pos: number): void;
		renderToStave(x: number): void;
		loadMetrics(
		font: IFont, code: string, cache: boolean
	): {
		x_min: number,
		x_max: number,
		ha: number,
		outline: number[]
	};
		renderOutline(
		ctx: IRenderContext, outline: number[], scale: number, x_pos: number, y_pos: number
	): void
	}

	declare class GraceNote extends StaveNote {
		constructor(note_struct: {
		slash?: boolean,
		type?: string,
		dots?: number,
		duration: string,
		clef?: string,
		keys: string[],
		octave_shift?: number,
		auto_stem?: boolean,
		stem_direction?: number
	}): this;
		getStemExtension(): number;
		getCategory(): string;
		draw(): void
	}

	declare class GraceNoteGroup extends Modifier {
		setWidth(width: number): Modifier;
		setNote(note: StaveNote): Modifier;
		constructor(grace_notes: GraceNote[], show_slur?: boolean): this;
		DEBUG: boolean;
		format(
		gracenote_groups: GraceNoteGroup[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		preFormat(): void;
		beamNotes(): GraceNoteGroup;
		setNote(note: Note): void;
		setWidth(width: number): void;
		getWidth(): number;
		setXShift(x_shift: number): void;
		draw(): void
	}

	declare class KeyManager  {
		constructor(key: string): this;
		setKey(key: string): KeyManager;
		getKey(): string;
		reset(): KeyManager;
		getAccidental(key: string): {
		note: string,
		accidental: string
	};
		selectNote(note: string): {
		note: string,
		accidental: string,
		change: boolean
	}
	}

	declare class KeySignature extends StaveModifier {
		addModifier(): void;
		constructor(key_spec: string): this;
		addAccToStave(
		stave: Stave, acc: {
		type: string,
		line: number
	}, next?: {
		type: string,
		line: number
	}
	): void;
		cancelKey(spec: string): KeySignature;
		addModifier(stave: Stave): KeySignature;
		addToStave(stave: Stave, firstGlyph?: boolean): KeySignature;
		convertAccLines(clef: string, type: string): void
	}

	declare class Modifier  {
		DEBUG: boolean;
		getCategory(): string;
		getWidth(): number;
		setWidth(width: number): Modifier;
		getNote(): Note;
		setNote(note: Note): Modifier;
		getIndex(): number;
		setIndex(index: number): Modifier;
		getContext(): IRenderContext;
		setContext(context: IRenderContext): Modifier;
		getModifierContext(): ModifierContext;
		setModifierContext(c: ModifierContext): Modifier;
		getPosition(): Modifier.Position;
		setPosition(position: Modifier.Position): Modifier;
		setTextLine(line: number): Modifier;
		setYShift(y: number): Modifier;
		setXShift(x: number): void;
		draw(): void
	}

	declare class ModifierContext  {
		DEBUG: boolean;
		addModifier(modifier: Modifier): ModifierContext;
		getModifiers(type: string): Modifier[];
		getWidth(): number;
		getExtraLeftPx(): number;
		getExtraRightPx(): number;
		getState(): {
		left_shift: number,
		right_shift: number,
		text_line: number
	};
		getMetrics(
		
	): {
		width: number,
		spacing: number,
		extra_left_px: number,
		extra_right_px: number
	};
		preFormat(): void;
		postFormat(): void
	}

	declare class Music  {
		isValidNoteValue(note: number): boolean;
		isValidIntervalValue(interval: number): boolean;
		getNoteParts(noteString: string): {
		root: string,
		accidental: string
	};
		getKeyParts(noteString: string): {
		root: string,
		accidental: string,
		type: string
	};
		getNoteValue(noteString: string): number;
		getIntervalValue(intervalString: string): number;
		getCanonicalNoteName(noteValue: number): string;
		getCanonicalIntervalName(intervalValue: number): string;
		getRelativeNoteValue(noteValue: number, intervalValue: number, direction?: number): number;
		getRelativeNoteName(root: string, noteValue: number): string;
		getScaleTones(key: string, intervals: number[]): number;
		getIntervalBetween(note1: number, note2: number, direction?: number): number;
		createScaleMap(keySignature: string): {
		[rootName: string]: string
	}
	}

	declare class Note extends Tickable {
		getTicks(): Fraction;
		getCenterXShift(): number;
		isCenterAligned(): boolean;
		setCenterAlignment(align_center: boolean): Note;
		getTuplet(): Tuplet;
		setTuplet(tuplet: Tuplet): Note;
		addToModifierContext(mc: ModifierContext): void;
		preFormat(): void;
		postFormat(): Note;
		getIntrinsicTicks(): Fraction;
		setIntrinsicTicks(intrinsicTicks: Fraction): void;
		getTickMultiplier(): Fraction;
		applyTickMultiplier(numerator: number, denominator: number): void;
		setDuration(duration: Fraction): void;
		constructor(note_struct: {
		type?: string,
		dots?: number,
		duration: string
	}): this;
		getPlayNote(): any;
		setPlayNote(note: any): Note;
		isRest(): boolean;
		addStroke(index: number, stroke: Stroke): Note;
		getStave(): Stave;
		setStave(stave: Stave): Note;
		getCategory(): string;
		setContext(context: IRenderContext): Note;
		getExtraLeftPx(): number;
		getExtraRightPx(): number;
		setExtraLeftPx(x: number): Note;
		setExtraRightPx(x: number): Note;
		shouldIgnoreTicks(): boolean;
		getLineNumber(): number;
		getLineForRest(): number;
		getGlyph(): Glyph;
		setYs(ys: number[]): Note;
		getYs(): number[];
		getYForTopText(text_line: number): number;
		getBoundingBox(): BoundingBox;
		getVoice(): Voice;
		setVoice(voice: Voice): Note;
		getTickContext(): TickContext;
		setTickContext(tc: TickContext): Note;
		getDuration(): string;
		isDotted(): boolean;
		hasStem(): boolean;
		getDots(): number;
		getNoteType(): string;
		setBeam(): Note;
		setModifierContext(mc: ModifierContext): Note;
		addModifier(modifier: Modifier, index?: number): Note;
		getModifierStartXY(): {
		x: number,
		y: number
	};
		getMetrics(
		
	): {
		width: number,
		noteWidth: number,
		left_shift: number,
		modLeftPx: number,
		modRightPx: number,
		extraLeftPx: number,
		extraRightPx: number
	};
		setWidth(width: number): void;
		getWidth(): number;
		setXShift(x: number): Note;
		getX(): number;
		getAbsoluteX(): number;
		setPreFormatted(value: boolean): void
	}

	declare class NoteHead extends Note {
		constructor(head_options: {
		x?: number,
		y?: number,
		note_type?: string,
		duration: string,
		displaced?: boolean,
		stem_direction?: number,
		line: number,
		x_shift: number,
		custom_glyph_code?: string,
		style?: string,
		slashed?: boolean,
		glyph_font_scale?: number
	}): this;
		DEBUG: boolean;
		getCategory(): string;
		setContext(context: IRenderContext): NoteHead;
		getWidth(): number;
		isDisplaced(): boolean;
		getStyle(
		
	): {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	};
		setStyle(
		style: {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	}
	): NoteHead;
		getGlyph(): Glyph;
		setX(x: number): NoteHead;
		getY(): number;
		setY(y: number): NoteHead;
		getLine(): number;
		setLine(line: number): NoteHead;
		getAbsoluteX(): number;
		getBoundingBox(): BoundingBox;
		applyStyle(context: IRenderContext): NoteHead;
		setStave(stave: Stave): NoteHead;
		preFormat(): NoteHead;
		draw(): void
	}

	declare class Ornament extends Modifier {
		constructor(type: string): this;
		DEBUG: boolean;
		format(
		ornaments: Ornament[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		setDelayed(delayed: boolean): Ornament;
		setUpperAccidental(acc: string): Ornament;
		setLowerAccidental(acc: string): Ornament;
		draw(): void
	}

	declare class PedalMarking  {
		constructor(notes: Note[]): this;
		DEBUG: boolean;
		createSustain(notes: Note[]): PedalMarking;
		createSostenuto(notes: Note[]): PedalMarking;
		createUnaCorda(notes: Note[]): PedalMarking;
		setCustomText(depress?: string, release?: string): PedalMarking;
		setStyle(style: PedalMarking.Styles): PedalMarking;
		setLine(line: number): PedalMarking;
		setContext(context: IRenderContext): PedalMarking;
		drawBracketed(): void;
		drawText(): void;
		draw(): void
	}

	declare class RaphaelContext extends IRenderContext {
		setLineWidth(width: number): RaphaelContext;
		glow(): RaphaelContext;
		constructor(element: HTMLElement): this;
		setFont(family: string, size: number, weight?: number): RaphaelContext;
		setRawFont(font: string): RaphaelContext;
		setFillStyle(style: string): RaphaelContext;
		setBackgroundFillStyle(style: string): RaphaelContext;
		setStrokeStyle(style: string): RaphaelContext;
		setShadowColor(style: string): RaphaelContext;
		setShadowBlur(blur: string): RaphaelContext;
		setLineWidth(width: number): void;
		setLineDash(dash: string): RaphaelContext;
		setLineCap(cap_type: string): RaphaelContext;
		scale(x: number, y: number): RaphaelContext;
		clear(): void;
		resize(width: number, height: number): RaphaelContext;
		setViewBox(viewBox: string): void;
		rect(x: number, y: number, width: number, height: number): void;
		fillRect(x: number, y: number, width: number, height: number): RaphaelContext;
		clearRect(x: number, y: number, width: number, height: number): RaphaelContext;
		beginPath(): RaphaelContext;
		moveTo(x: number, y: number): RaphaelContext;
		lineTo(x: number, y: number): RaphaelContext;
		bezierCurveToTo(
		x1: number, y1: number, x2: number, y2: number, x: number, y: number
	): RaphaelContext;
		quadraticCurveToTo(x1: number, y1: number, x: number, y: number): RaphaelContext;
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean
	): RaphaelContext;
		glow(
		
	): {
		width: number,
		fill: boolean,
		opacity: number,
		offsetx: number,
		offsety: number,
		color: string
	};
		fill(): RaphaelContext;
		stroke(): RaphaelContext;
		closePath(): RaphaelContext;
		measureText(text: string): {
		width: number,
		height: number
	};
		fillText(text: string, x: number, y: number): RaphaelContext;
		save(): RaphaelContext;
		restore(): RaphaelContext
	}

	declare class Renderer  {
		constructor(sel: HTMLElement, backend: Renderer.Backends): this;
		USE_CANVAS_PROXY: boolean;
		buildContext(
		sel: HTMLElement, backend: Renderer.Backends, width?: number, height?: number, background?: string
	): IRenderContext;
		getCanvasContext(
		sel: HTMLElement, backend: Renderer.Backends, width?: number, height?: number, background?: string
	): CanvasContext;
		getRaphaelContext(
		sel: HTMLElement, backend: Renderer.Backends, width?: number, height?: number, background?: string
	): RaphaelContext;
		getSVGContext(
		sel: HTMLElement, backend: Renderer.Backends, width?: number, height?: number, background?: string
	): SVGContext;
		bolsterCanvasContext(ctx: CanvasRenderingContext2D): CanvasContext;
		drawDashedLine(
		context: IRenderContext, fromX: number, fromY: number, toX: number, toY: number, dashPattern: number[]
	): void;
		resize(width: number, height: number): Renderer;
		getContext(): IRenderContext
	}

	declare class Repetition extends StaveModifier {
		constructor(type: Repetition.type, x: number, y_shift: number): this;
		getCategory(): string;
		setShiftX(x: number): Repetition;
		setShiftY(y: number): Repetition;
		draw(stave: Stave, x: number): Repetition;
		drawCodaFixed(stave: Stave, x: number): Repetition;
		drawSignoFixed(stave: Stave, x: number): Repetition;
		drawSymbolText(stave: Stave, x: number, text: string, draw_coda: boolean): Repetition
	}

	declare class Stave  {
		constructor(x: number, y: number, width: number, options?: {
		vertical_bar_width?: number,
		glyph_spacing_px?: number,
		num_lines?: number,
		fill_style?: string,
		spacing_between_lines_px?: number,
		space_above_staff_ln?: number,
		space_below_staff_ln?: number,
		top_text_position?: number
	}): this;
		resetLines(): void;
		setNoteStartX(x: number): Stave;
		getNoteStartX(): number;
		getNoteEndX(): number;
		getTieStartX(): number;
		getTieEndX(): number;
		setContext(context: IRenderContext): Stave;
		getContext(): IRenderContext;
		getX(): number;
		getNumLines(): number;
		setY(y: number): Stave;
		setWidth(width: number): Stave;
		getWidth(): number;
		setMeasure(measure: number): Stave;
		setBegBarType(type: Barline.type): Stave;
		setEndBarType(type: Barline.type): Stave;
		getModifierXShift(index: number): number;
		setRepetitionTypeLeft(type: Repetition.type, y: number): Stave;
		setRepetitionTypeRight(type: Repetition.type, y: number): Stave;
		setVoltaType(type: Volta.type, number_t: number, y: number): Stave;
		setSection(section: string, y: number): Stave;
		setTempo(
		tempo: {
		name?: string,
		duration: string,
		dots: number,
		bpm: number
	}, y: number
	): Stave;
		setText(
		text: string, position: Modifier.Position, options?: {
		shift_x?: number,
		shift_y?: number,
		justification?: TextNote.Justification
	}
	): Stave;
		getHeight(): number;
		getSpacingBetweenLines(): number;
		getBoundingBix(): BoundingBox;
		getBottomY(): number;
		getBottomLineY(): number;
		getYForLine(line: number): number;
		getYForTopText(line?: number): number;
		getYForBottomText(line?: number): number;
		getYForNote(line?: number): number;
		getYForGlyphs(): number;
		addGlyph(glypg: Glyph): Stave;
		addEndGlyph(glypg: Glyph): Stave;
		addModifier(modifier: StaveModifier): Stave;
		addEndModifier(modifier: StaveModifier): Stave;
		addKeySignature(keySpec: string): Stave;
		addClef(clef: string, size?: string, annotation?: string): Stave;
		addEndClef(clef: string, size?: string, annotation?: string): Stave;
		addTimeSignature(timeSpec: string, customPadding?: number): void;
		addTrebleGlyph(): Stave;
		draw(): void;
		drawVertical(x: number, isDouble: boolean): void;
		drawVerticalFixed(x: number, isDouble: boolean): void;
		drawVerticalBar(x: number): void;
		drawVerticalBarFixed(x: number): void;
		getConfigForLines(): {
		visible: boolean
	}[];
		setConfigForLine(line_number: number, line_config: {
		visible: boolean
	}): Stave;
		setConfigForLines(lines_configuration: {
		visible: boolean
	}[]): Stave
	}

	declare class StaveConnector  {
		constructor(top_stave: Stave, bottom_stave: Stave): this;
		setContext(ctx: IRenderContext): StaveConnector;
		setType(type: StaveConnector.type): StaveConnector;
		setText(
		text: string, text_options?: {
		shift_x?: number,
		shift_y?: number
	}
	): StaveConnector;
		setFont(font: {
		family?: string,
		size?: number,
		weight?: string
	}): void;
		setXShift(x_shift: number): StaveConnector;
		draw(): void;
		drawBoldDoubleLine(
		ctx: Object, type: StaveConnector.type, topX: number, topY: number, botY: number
	): void
	}

	declare class StaveHairpin  {
		constructor(notes: {
		first_note: Note,
		last_note: Note
	}, type: StaveHairpin.type): this;
		FormatByTicksAndDraw(
		ctx: IRenderContext, formatter: Formatter, notes: {
		first_note: Note,
		last_note: Note
	}, type: StaveHairpin.type, position: Modifier.Position, options?: {
		height: number,
		y_shift: number,
		left_shift_ticks: number,
		right_shift_ticks: number
	}
	): void;
		setContext(context: IRenderContext): StaveHairpin;
		setPosition(position: Modifier.Position): StaveHairpin;
		setRenderOptions(
		options: {
		height?: number,
		y_shift: number,
		left_shift_px: number,
		right_shift_px: number
	}
	): StaveHairpin;
		setNotes(notes: {
		first_note: Note,
		last_note: Note
	}): StaveHairpin;
		renderHairpin(
		params: {
		first_x: number,
		last_x: number,
		first_y: number,
		last_y: number,
		staff_height: number
	}
	): void;
		draw(): boolean
	}

	declare class StaveLine  {
		constructor(notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}): this;
		setContext(context: Object): StaveLine;
		setFont(font: {
		family: string,
		size: number,
		weight: string
	}): StaveLine;
		setText(text: string): StaveLine;
		setNotes(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices?: number[],
		last_indices?: number[]
	}
	): StaveLine;
		applyLineStyle(): void;
		applyFontStyle(): void;
		draw(): StaveLine;
		render_options: {
		padding_left: number,
		padding_right: number,
		line_width: number,
		line_dash: number[],
		rounded_end: boolean,
		color: string,
		draw_start_arrow: boolean,
		draw_end_arrow: boolean,
		arrowhead_length: number,
		arrowhead_angle: number,
		text_position_vertical: StaveLine.TextVerticalPosition,
		text_justification: StaveLine.TextJustification
	}
	}

	declare class StaveModifier  {
		getCategory(): string;
		makeSpacer(
		padding: number
	): {
		getContext: Function,
		setStave: Function,
		renderToStave: Function,
		getMetrics: Function
	};
		placeGlyphOnLine(glyph: Glyph, stave: Stave, line: number): void;
		setPadding(padding: number): void;
		addToStave(stave: Stave, firstGlyph: boolean): StaveModifier;
		addToStaveEnd(stave: Stave, firstGlyph: boolean): StaveModifier;
		addModifier(): void;
		addEndModifier(): void
	}

	declare class StaveNote extends StemmableNote {
		buildStem(): StemmableNote;
		setStave(stave: Stave): Note;
		addModifier(modifier: Modifier, index?: number): Note;
		getModifierStartXY(): {
		x: number,
		y: number
	};
		getDots(): number;
		constructor(note_struct: {
		type?: string,
		dots?: number,
		duration: string,
		clef?: string,
		keys: string[],
		octave_shift?: number,
		auto_stem?: boolean,
		stem_direction?: number
	}): this;
		DEBUG: boolean;
		format(
		notes: StaveNote[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		formatByY(
		notes: StaveNote[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): void;
		postFormat(notes: StaveNote[]): boolean;
		buildStem(): void;
		buildNoteHeads(): void;
		autoStem(): void;
		calculateKeyProps(): void;
		getBoundingBox(): BoundingBox;
		getLineNumber(): number;
		isRest(): boolean;
		isChord(): boolean;
		hasStem(): boolean;
		getYForTopText(text_line: number): number;
		getYForBottomText(text_line: number): number;
		setStave(stave: Stave): StaveNote;
		getKeys(): string[];
		getKeyProps(
		
	): {
		key: string,
		octave: number,
		line: number,
		int_value: number,
		accidental: string,
		code: number,
		stroke: number,
		shift_right: number,
		displaced: boolean
	}[];
		isDisplaced(): boolean;
		setNoteDisplaced(displaced: boolean): StaveNote;
		getTieRightX(): number;
		getTieLeftX(): number;
		getLineForRest(): number;
		getModifierStartXY(position: Modifier.Position, index: number): {
		x: number,
		y: number
	};
		setStyle(
		style: {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	}
	): void;
		setKeyStyle(
		index: number, style: {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	}
	): StaveNote;
		setKeyLine(index: number, line: number): StaveNote;
		getKeyLine(index: number): number;
		addToModifierContext(mContext: ModifierContext): StaveNote;
		addModifier(index: number, modifier: Modifier): StaveNote;
		addAccidental(index: number, accidental: Accidental): StaveNote;
		addArticulation(index: number, articulation: Articulation): StaveNote;
		addAnnotation(index: number, annotation: Annotation): StaveNote;
		addDot(index: number): StaveNote;
		addDotToAll(): StaveNote;
		getAccidentals(): Accidental[];
		getDots(): Dot[];
		getVoiceShiftWidth(): number;
		calcExtraPx(): void;
		preFormat(): void;
		getNoteHeadBounds(
		
	): {
		y_top: number,
		y_bottom: number,
		highest_line: number,
		lowest_line: number
	};
		getNoteHeadBeginX(): number;
		getNoteHeadEndX(): number;
		drawLedgerLines(): void;
		drawModifiers(): void;
		drawFlag(): void;
		drawNoteHeads(): void;
		drawStem(
		struct: {
		x_begin?: number,
		x_end?: number,
		y_top?: number,
		y_bottom?: number,
		y_extend?: number,
		stem_extension?: number,
		stem_direction?: number
	}
	): void;
		draw(): void
	}

	declare class StaveSection extends Modifier {
		draw(): void;
		constructor(section: string, x: number, shift_y: number): this;
		getCategory(): string;
		setStaveSection(section: string): StaveSection;
		setShiftX(x: number): StaveSection;
		setShiftY(y: number): StaveSection;
		draw(stave: Stave, shift_x: number): StaveSection
	}

	declare class StaveTempo extends StaveModifier {
		constructor(tempo: {
		name?: string,
		duration: string,
		dots: number,
		bpm: number
	}, x: number, shift_y: number): this;
		getCategory(): string;
		setTempo(
		tempo: {
		name?: string,
		duration: string,
		dots: number,
		bpm: number
	}
	): StaveTempo;
		setShiftX(x: number): StaveTempo;
		setShiftY(y: number): StaveTempo;
		draw(stave: Stave, shift_x: number): StaveTempo
	}

	declare class StaveText extends Modifier {
		draw(): void;
		constructor(text: string, position: Modifier.Position, options?: {
		shift_x?: number,
		shift_y?: number,
		justification?: TextNote.Justification
	}): this;
		getCategory(): string;
		setStaveText(text: string): StaveText;
		setShiftX(x: number): StaveText;
		setShiftY(y: number): StaveText;
		setFont(font: {
		family?: string,
		size?: number,
		weight?: number
	}): void;
		setText(text: string): void;
		draw(stave: Stave): StaveText
	}

	declare class StaveTie  {
		constructor(notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}, text?: string): this;
		setContext(context: IRenderContext): StaveTie;
		setFont(font: {
		family: string,
		size: number,
		weight: string
	}): StaveTie;
		setNotes(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}
	): StaveTie;
		isPartial(): boolean;
		renderTie(
		params: {
		first_ys: number[],
		last_ys: number[],
		last_x_px: number,
		first_x_px: number,
		direction: number
	}
	): void;
		renderText(first_x_px: number, last_x_px: number): void;
		draw(): boolean
	}

	declare class Stem  {
		constructor(options: {
		x_begin?: number,
		x_end?: number,
		y_top?: number,
		y_bottom?: number,
		y_extend?: number,
		stem_extension?: number,
		stem_direction?: number
	}): this;
		DEBUG: boolean;
		setNoteHeadXBounds(x_begin: number, x_end: number): Stem;
		setDirection(direction: number): void;
		setExtension(extension: number): void;
		setYBounds(y_top: number, y_bottom: number): void;
		getCategory(): string;
		setContext(context: IRenderContext): Stem;
		getHeight(): number;
		getBoundingBox(): BoundingBox;
		getExtents(): {
		topY: number,
		baseY: number
	};
		setStyle(
		style: {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	}
	): void;
		getStyle(
		
	): {
		shadowColor?: string,
		shadowBlur?: string,
		fillStyle?: string,
		strokeStyle?: string
	};
		applyStyle(context: IRenderContext): Stem;
		draw(): void;
		hide: boolean
	}

	declare class StemmableNote extends Note {
		setBeam(): Note;
		constructor(note_struct: {
		type?: string,
		dots?: number,
		duration: string
	}): this;
		DEBUG: boolean;
		getStem(): Stem;
		setStem(stem: Stem): StemmableNote;
		buildStem(): StemmableNote;
		getStemLength(): number;
		getBeamCount(): number;
		getStemMinumumLength(): number;
		getStemDirection(): number;
		setStemDirection(direction: number): StemmableNote;
		getStemX(): number;
		getCenterGlyphX(): number;
		getStemExtension(): number;
		setStemLength(): number;
		getStemExtents(): {
		topY: number,
		baseY: number
	};
		setBeam(beam: Beam): StemmableNote;
		getYForTopText(text_line: number): number;
		getYForBottomText(text_line: number): number;
		postFormat(): StemmableNote;
		drawStem(
		stem_struct: {
		x_begin?: number,
		x_end?: number,
		y_top?: number,
		y_bottom?: number,
		y_extend?: number,
		stem_extension?: number,
		stem_direction?: number
	}
	): void
	}

	declare class StringNumber extends Modifier {
		setNote(note: Note): StringNumber;
		constructor(number: number): this;
		format(
		nums: StringNumber[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		getNote(): Note;
		setNote(note: StemmableNote): StringNumber;
		getIndex(): number;
		setIndex(index: number): StringNumber;
		setLineEndType(leg: Renderer.LineEndType): StringNumber;
		getPosition(): Modifier.Position;
		setPosition(position: Modifier.Position): StringNumber;
		setStringNumber(number: number): StringNumber;
		setOffsetX(x: number): StringNumber;
		setOffsetY(y: number): StringNumber;
		setLastNote(note: StemmableNote): StringNumber;
		setDashed(dashed: boolean): StringNumber;
		draw(): void
	}

	declare class Stroke extends Modifier {
		constructor(type: Stroke.Type, options: {
		all_voices?: boolean
	}): this;
		format(
		strokes: Stroke[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}
	): boolean;
		getPosition(): Modifier.Position;
		addEndNote(note: Note): Stroke;
		draw(): void
	}

	declare class SVGContext extends IRenderContext {
		constructor(element: HTMLElement): this;
		iePolyfill(): boolean;
		setFont(family: string, size: number, weight?: number): SVGContext;
		setRawFont(font: string): SVGContext;
		setFillStyle(style: string): SVGContext;
		setBackgroundFillStyle(style: string): SVGContext;
		setStrokeStyle(style: string): SVGContext;
		setShadowColor(style: string): SVGContext;
		setShadowBlur(blur: string): SVGContext;
		setLineWidth(width: number): SVGContext;
		setLineDash(dash: string): SVGContext;
		setLineCap(cap_type: string): SVGContext;
		resize(width: number, height: number): SVGContext;
		scale(x: number, y: number): SVGContext;
		setViewBox(xMin: number, yMin: number, width: number, height: number): void;
		clear(): void;
		rect(x: number, y: number, width: number, height: number): SVGContext;
		fillRect(x: number, y: number, width: number, height: number): SVGContext;
		clearRect(x: number, y: number, width: number, height: number): SVGContext;
		beginPath(): SVGContext;
		moveTo(x: number, y: number): SVGContext;
		lineTo(x: number, y: number): SVGContext;
		bezierCurveToTo(
		x1: number, y1: number, x2: number, y2: number, x: number, y: number
	): SVGContext;
		quadraticCurveToTo(x1: number, y1: number, x: number, y: number): SVGContext;
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, antiClockwise: boolean
	): SVGContext;
		closePath(): SVGContext;
		glow(): SVGContext;
		fill(): SVGContext;
		stroke(): SVGContext;
		measureText(text: string): SVGRect;
		ieMeasureTextFix(
		bbox: SVGRect, text: string
	): {
		x: number,
		y: number,
		width: number,
		height: number
	};
		fillText(text: string, x: number, y: number): SVGContext;
		save(): SVGContext;
		restore(): SVGContext
	}

	declare class TabNote extends StemmableNote {
		setStave(stave: Stave): Note;
		getModifierStartXY(): {
		x: number,
		y: number
	};
		constructor(tab_struct: {
		positions: {
		str: number,
		fret: number
	}[],
		type?: string,
		dots?: number,
		duration: string,
		stem_direction?: boolean
	}, draw_stem?: boolean): this;
		getCategory(): string;
		setGhost(ghost: boolean): TabNote;
		hasStem(): boolean;
		getStemExtension(): number;
		addDot(): TabNote;
		updateWidth(): void;
		setStave(stave: Stave): TabNote;
		getPositions(): {
		str: number,
		fret: number
	}[];
		addToModifierContext(mc: ModifierContext): TabNote;
		getTieRightX(): number;
		getTieLeftX(): number;
		getModifierStartXY(position: Modifier.Position, index: number): {
		x: number,
		y: number
	};
		getLineForRest(): number;
		preFormat(): void;
		getStemX(): number;
		getStemY(): number;
		getStemExtents(): {
		topY: number,
		baseY: number
	};
		drawFlag(): void;
		drawModifiers(): void;
		drawStemThrough(): void;
		draw(): void
	}

	declare class TabSlide extends TabTie {
		constructor(notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}, direction?: number): this;
		createSlideUp(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}
	): TabSlide;
		createSlideDown(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}
	): TabSlide;
		renderTie(
		params: {
		first_ys: number[],
		last_ys: number[],
		last_x_px: number,
		first_x_px: number,
		direction: number
	}
	): void
	}

	declare class TabStave extends Stave {
		constructor(x: number, y: number, width: number, options?: {
		vertical_bar_width?: number,
		glyph_spacing_px?: number,
		num_lines?: number,
		fill_style?: string,
		spacing_between_lines_px?: number,
		space_above_staff_ln?: number,
		space_below_staff_ln?: number,
		top_text_position?: number
	}): this;
		getYForGlyphs(): number;
		addTabGlyph(): TabStave
	}

	declare class TabTie extends StaveTie {
		constructor(notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}, text?: string): this;
		createHammeron(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}
	): TabTie;
		createPulloff(
		notes: {
		first_note: Note,
		last_note: Note,
		first_indices: number[],
		last_indices: number[]
	}
	): TabTie;
		draw(): boolean
	}

	declare class TextBracket  {
		constructor(bracket_data: {
		start: Note,
		stop: Note,
		text?: string,
		superscript?: string,
		position?: TextBracket.Positions
	}): this;
		DEBUG: boolean;
		applyStyle(context: IRenderContext): TextBracket;
		setDashed(dashed: boolean, dash?: number[]): TextBracket;
		setFont(font: {
		family: string,
		size: number,
		weight: string
	}): TextBracket;
		setContext(context: IRenderContext): TextBracket;
		setLine(line: number): TextBracket;
		draw(): void
	}

	declare class TextDynamics extends Note {
		constructor(text_struct: {
		duration: string,
		text: string,
		line?: number
	}): this;
		DEBUG: boolean;
		setLine(line: number): TextDynamics;
		preFormat(): TextDynamics;
		draw(): void
	}

	declare class TextNote extends Note {
		constructor(text_struct: {
		duration: string,
		text?: string,
		superscript?: boolean,
		subscript?: boolean,
		glyph?: string,
		font?: {
		family: string,
		size: number,
		weight: string
	},
		line?: number,
		smooth?: boolean,
		ignore_ticks?: boolean
	}): this;
		setJustification(just: TextNote.Justification): TextNote;
		setLine(line: number): TextNote;
		preFormat(): void;
		draw(): void
	}

	declare class TickContext  {
		setContext(context: IRenderContext): void;
		getContext(): IRenderContext;
		shouldIgnoreTicks(): boolean;
		getWidth(): number;
		getX(): number;
		setX(x: number): TickContext;
		getPixelsUsed(): number;
		setPixelsUsed(pixelsUsed: number): TickContext;
		setPadding(padding: number): TickContext;
		getMaxTicks(): number;
		getMinTicks(): number;
		getTickables(): Tickable[];
		getCenterAlignedTickables(): Tickable[];
		getMetrics(
		
	): {
		width: number,
		notePx: number,
		extraLeftPx: number,
		extraRightPx: number
	};
		getCurrentTick(): Fraction;
		setCurrentTick(tick: Fraction): void;
		getExtraPx(
		
	): {
		left: number,
		right: number,
		extraLeft: number,
		extraRight: number
	};
		addTickable(tickable: Tickable): TickContext;
		preFormat(): TickContext;
		postFormat(): TickContext;
		getNextContext(tContext: TickContext): TickContext
	}

	declare class TimeSignature extends StaveModifier {
		addModifier(): void;
		addEndModifier(): void;
		constructor(timeSpec: string, customPadding?: number): this;
		parseTimeSpec(timeSpec: string): {
		num: number,
		glyph: Glyph
	};
		makeTimeSignatureGlyph(topNums: number[], botNums: number[]): Glyph;
		getTimeSig(): {
		num: number,
		glyph: Glyph
	};
		addModifier(stave: Stave): void;
		addEndModifier(stave: Stave): void
	}

	declare class TimeSigNote extends Note {
		setStave(stave: Stave): Note;
		constructor(timeSpec: string, customPadding: number): this;
		setStave(stave: Stave): void;
		getBoundingBox(): BoundingBox;
		addToModifierContext(): TimeSigNote;
		preFormat(): TimeSigNote;
		draw(): void
	}

	declare class Tremolo extends Modifier {
		constructor(num: number): this;
		getCategory(): string;
		draw(): void
	}

	declare class Tuning  {
		constructor(tuningString?: string): this;
		noteToInteger(noteString: string): number;
		setTuning(tuningString: string): void;
		getValueForString(stringNum: string): number;
		getValueForFret(fretNum: string, stringNum: string): number;
		getNoteForFret(fretNum: string, stringNum: string): string
	}

	declare class Tuplet  {
		constructor(notes: StaveNote[], options: {
		num_notes?: number,
		beats_occupied?: number
	}): this;
		attach(): void;
		detach(): void;
		setContext(context: IRenderContext): Tuplet;
		setBracketed(bracketed: boolean): Tuplet;
		setRatioed(ratioed: boolean): Tuplet;
		setTupletLocation(location: number): Tuplet;
		getNotes(): StaveNote[];
		getNoteCount(): number;
		getBeatsOccupied(): number;
		setBeatsOccupied(beats: number): void;
		resolveGlyphs(): void;
		draw(): void
	}

	declare class Vibrato extends Modifier {
		format(
		vibratos: Vibrato[], state: {
		left_shift: number,
		right_shift: number,
		text_line: number
	}, context: ModifierContext
	): boolean;
		setHarsh(harsh: boolean): Vibrato;
		setVibratoWidth(width: number): Vibrato;
		draw(): void
	}

	declare class Voice  {
		constructor(time: {
		num_beats?: number,
		beat_value?: number,
		resolution?: number
	}): this;
		getTotalTicks(): Fraction;
		getTicksUsed(): Fraction;
		getLargestTickWidth(): number;
		getSmallestTickCount(): Fraction;
		getTickables(): Tickable[];
		getMode(): number;
		setMode(mode: number): Voice;
		getResolutionMultiplier(): number;
		getActualResolution(): number;
		setStave(stave: Stave): Voice;
		getBoundingBox(): BoundingBox;
		getVoiceGroup(): VoiceGroup;
		setVoiceGroup(g: VoiceGroup): Voice;
		setStrict(strict: boolean): Voice;
		isComplete(): boolean;
		addTickable(tickable: Tickable): Voice;
		addTickables(tickables: Tickable[]): Voice;
		preFormat(): Voice;
		draw(context: IRenderContext, stave?: Stave): void
	}

	declare class VoiceGroup  {
		getVoices(): Voice[];
		getModifierContexts(): ModifierContext[];
		addVoice(voice: Voice): void
	}

	declare class Volta extends StaveModifier {
		constructor(type: Volta.type, number: number, x: number, y_shift: number): this;
		getCategory(): string;
		setShiftY(y: number): Volta;
		draw(stave: Stave, x: number): Volta
	}

	
}