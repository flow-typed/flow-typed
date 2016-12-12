

declare module 'fhir' {
					
}

declare module 'npm$namespace$fhir' {
	declare type id = string;

	declare type uri = string;

	declare type integer = number;

	declare type decimal = number;

	declare type base64Binary = string;

	declare type instant = string;

	declare type date = string;

	declare type dateTime = string;

	declare type time = string;

	declare type code = string;

	declare type oid = string;

	declare type unsignedInt = number;

	declare type positiveInt = number;

	declare type markdown = string;

	declare type Resource = (DomainResource | Organization | Location | HealthcareService | Practitioner | Patient | RelatedPerson | Device | Account | AllergyIntolerance | Schedule | Slot | Appointment | AppointmentResponse | AuditEvent | Basic | BodySite | Substance | Medication | Group | Specimen | DeviceComponent | DeviceMetric | ValueSet | Questionnaire | QuestionnaireResponse | Observation | FamilyMemberHistory | DocumentReference | DiagnosticOrder | ProcedureRequest | ReferralRequest | Procedure | ImagingStudy | ImagingObjectSelection | Media | DiagnosticReport | CommunicationRequest | DeviceUseRequest | MedicationOrder | NutritionOrder | Order | ProcessRequest | SupplyRequest | VisionPrescription | ClinicalImpression | Condition | EpisodeOfCare | Encounter | MedicationStatement | RiskAssessment | Goal | CarePlan | Composition | Contract | Coverage | ClaimResponse | Claim | Communication | StructureDefinition | ConceptMap | OperationDefinition | Conformance | DataElement | DetectedIssue | DeviceUseStatement | DocumentManifest | EligibilityRequest | EligibilityResponse | EnrollmentRequest | EnrollmentResponse | ExplanationOfBenefit | Flag | Immunization | ImmunizationRecommendation | ImplementationGuide | List | MedicationAdministration | MedicationDispense | OperationOutcome | MessageHeader | NamingSystem | OrderResponse | PaymentNotice | PaymentReconciliation | Person | ProcessResponse | Provenance | SearchParameter | Subscription | SupplyDelivery | TestScript | Binary | Bundle | Parameters);

	declare interface Reference {
		reference?: string,
		_reference?: Element,
		display?: string,
		_display?: Element
	}

	declare interface Coding {
		system?: uri,
		_system?: Element,
		version?: string,
		_version?: Element,
		code?: code,
		_code?: Element,
		display?: string,
		_display?: Element,
		userSelected?: boolean,
		_userSelected?: Element
	}

	declare interface CodeableConcept {
		coding?: Coding[],
		text?: string,
		_text?: Element
	}

	declare interface Period {
		start?: dateTime,
		_start?: Element,
		end?: dateTime,
		_end?: Element
	}

	declare interface ContactPoint {
		system?: code,
		_system?: Element,
		value?: string,
		_value?: Element,
		use?: code,
		_use?: Element,
		rank?: positiveInt,
		_rank?: Element,
		period?: Period
	}

	declare interface Address {
		use?: code,
		_use?: Element,
		type?: code,
		_type?: Element,
		text?: string,
		_text?: Element,
		line?: string[],
		_line?: Element[],
		city?: string,
		_city?: Element,
		district?: string,
		_district?: Element,
		state?: string,
		_state?: Element,
		postalCode?: string,
		_postalCode?: Element,
		country?: string,
		_country?: Element,
		period?: Period
	}

	declare interface OrganizationContact {
		purpose?: CodeableConcept,
		name?: HumanName,
		telecom?: ContactPoint[],
		address?: Address
	}

	declare interface HumanName {
		use?: code,
		_use?: Element,
		text?: string,
		_text?: Element,
		family?: string[],
		_family?: Element[],
		given?: string[],
		_given?: Element[],
		prefix?: string[],
		_prefix?: Element[],
		suffix?: string[],
		_suffix?: Element[],
		period?: Period
	}

	declare interface Organization {
		identifier?: Identifier[],
		active?: boolean,
		_active?: Element,
		type?: CodeableConcept,
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[],
		address?: Address[],
		partOf?: Reference,
		contact?: OrganizationContact[]
	}

	declare interface Identifier {
		use?: code,
		_use?: Element,
		type?: CodeableConcept,
		system?: uri,
		_system?: Element,
		value?: string,
		_value?: Element,
		period?: Period,
		assigner?: Reference
	}

	declare interface Attachment {
		contentType?: code,
		_contentType?: Element,
		language?: code,
		_language?: Element,
		data?: base64Binary,
		_data?: Element,
		url?: uri,
		_url?: Element,
		size?: unsignedInt,
		_size?: Element,
		hash?: base64Binary,
		_hash?: Element,
		title?: string,
		_title?: Element,
		creation?: dateTime,
		_creation?: Element
	}

	declare interface PractitionerPractitionerRole {
		managingOrganization?: Reference,
		role?: CodeableConcept,
		specialty?: CodeableConcept[],
		period?: Period,
		location?: Reference[],
		healthcareService?: Reference[]
	}

	declare interface LocationPosition {
		longitude: decimal,
		_longitude?: Element,
		latitude: decimal,
		_latitude?: Element,
		altitude?: decimal,
		_altitude?: Element
	}

	declare interface Location {
		identifier?: Identifier[],
		status?: code,
		_status?: Element,
		name?: string,
		_name?: Element,
		description?: string,
		_description?: Element,
		mode?: code,
		_mode?: Element,
		type?: CodeableConcept,
		telecom?: ContactPoint[],
		address?: Address,
		physicalType?: CodeableConcept,
		position?: LocationPosition,
		managingOrganization?: Reference,
		partOf?: Reference
	}

	declare interface HealthcareServiceServiceType {
		type: CodeableConcept,
		specialty?: CodeableConcept[]
	}

	declare interface HealthcareServiceAvailableTime {
		daysOfWeek?: code[],
		_daysOfWeek?: Element[],
		allDay?: boolean,
		_allDay?: Element,
		availableStartTime?: time,
		_availableStartTime?: Element,
		availableEndTime?: time,
		_availableEndTime?: Element
	}

	declare interface HealthcareServiceNotAvailable {
		description: string,
		_description?: Element,
		during?: Period
	}

	declare interface HealthcareService {
		identifier?: Identifier[],
		providedBy?: Reference,
		serviceCategory?: CodeableConcept,
		serviceType?: HealthcareServiceServiceType[],
		location: Reference,
		serviceName?: string,
		_serviceName?: Element,
		comment?: string,
		_comment?: Element,
		extraDetails?: string,
		_extraDetails?: Element,
		photo?: Attachment,
		telecom?: ContactPoint[],
		coverageArea?: Reference[],
		serviceProvisionCode?: CodeableConcept[],
		eligibility?: CodeableConcept,
		eligibilityNote?: string,
		_eligibilityNote?: Element,
		programName?: string[],
		_programName?: Element[],
		characteristic?: CodeableConcept[],
		referralMethod?: CodeableConcept[],
		publicKey?: string,
		_publicKey?: Element,
		appointmentRequired?: boolean,
		_appointmentRequired?: Element,
		availableTime?: HealthcareServiceAvailableTime[],
		notAvailable?: HealthcareServiceNotAvailable[],
		availabilityExceptions?: string,
		_availabilityExceptions?: Element
	}

	declare interface PractitionerQualification {
		identifier?: Identifier[],
		code: CodeableConcept,
		period?: Period,
		issuer?: Reference
	}

	declare interface Practitioner {
		identifier?: Identifier[],
		active?: boolean,
		_active?: Element,
		name?: HumanName,
		telecom?: ContactPoint[],
		address?: Address[],
		gender?: code,
		_gender?: Element,
		birthDate?: date,
		_birthDate?: Element,
		photo?: Attachment[],
		practitionerRole?: PractitionerPractitionerRole[],
		qualification?: PractitionerQualification[],
		communication?: CodeableConcept[]
	}

	declare interface PatientContact {
		relationship?: CodeableConcept[],
		name?: HumanName,
		telecom?: ContactPoint[],
		address?: Address,
		gender?: code,
		_gender?: Element,
		organization?: Reference,
		period?: Period
	}

	declare interface PatientAnimal {
		species: CodeableConcept,
		breed?: CodeableConcept,
		genderStatus?: CodeableConcept
	}

	declare interface PatientCommunication {
		language: CodeableConcept,
		preferred?: boolean,
		_preferred?: Element
	}

	declare interface PatientLink {
		other: Reference,
		type: code,
		_type?: Element
	}

	declare interface Patient {
		identifier?: Identifier[],
		active?: boolean,
		_active?: Element,
		name?: HumanName[],
		telecom?: ContactPoint[],
		gender?: code,
		_gender?: Element,
		birthDate?: date,
		_birthDate?: Element,
		deceasedBoolean?: boolean,
		_deceasedBoolean?: Element,
		deceasedDateTime?: dateTime,
		_deceasedDateTime?: Element,
		address?: Address[],
		maritalStatus?: CodeableConcept,
		multipleBirthBoolean?: boolean,
		_multipleBirthBoolean?: Element,
		multipleBirthInteger?: integer,
		_multipleBirthInteger?: Element,
		photo?: Attachment[],
		contact?: PatientContact[],
		animal?: PatientAnimal,
		communication?: PatientCommunication[],
		careProvider?: Reference[],
		managingOrganization?: Reference,
		link?: PatientLink[]
	}

	declare interface RelatedPerson {
		identifier?: Identifier[],
		patient: Reference,
		relationship?: CodeableConcept,
		name?: HumanName,
		telecom?: ContactPoint[],
		gender?: code,
		_gender?: Element,
		birthDate?: date,
		_birthDate?: Element,
		address?: Address[],
		photo?: Attachment[],
		period?: Period
	}

	declare interface Annotation {
		authorReference?: Reference,
		authorString?: string,
		_authorString?: Element,
		time?: dateTime,
		_time?: Element,
		text: string,
		_text?: Element
	}

	declare interface Quantity {
		value?: decimal,
		_value?: Element,
		comparator?: code,
		_comparator?: Element,
		unit?: string,
		_unit?: Element,
		system?: uri,
		_system?: Element,
		code?: code,
		_code?: Element
	}

	declare interface SimpleQuantity {
		
	}

	declare interface Range {
		low?: Quantity,
		high?: Quantity
	}

	declare interface Ratio {
		numerator?: Quantity,
		denominator?: Quantity
	}

	declare interface SampledData {
		origin: Quantity,
		period: decimal,
		_period?: Element,
		factor?: decimal,
		_factor?: Element,
		lowerLimit?: decimal,
		_lowerLimit?: Element,
		upperLimit?: decimal,
		_upperLimit?: Element,
		dimensions: positiveInt,
		_dimensions?: Element,
		data: string,
		_data?: Element
	}

	declare interface Device {
		identifier?: Identifier[],
		type: CodeableConcept,
		note?: Annotation[],
		status?: code,
		_status?: Element,
		manufacturer?: string,
		_manufacturer?: Element,
		model?: string,
		_model?: Element,
		version?: string,
		_version?: Element,
		manufactureDate?: dateTime,
		_manufactureDate?: Element,
		expiry?: dateTime,
		_expiry?: Element,
		udi?: string,
		_udi?: Element,
		lotNumber?: string,
		_lotNumber?: Element,
		owner?: Reference,
		location?: Reference,
		patient?: Reference,
		contact?: ContactPoint[],
		url?: uri,
		_url?: Element
	}

	declare interface Signature {
		type: Coding[],
		when: instant,
		_when?: Element,
		whoUri?: uri,
		_whoUri?: Element,
		whoReference?: Reference,
		contentType: code,
		_contentType?: Element,
		blob: base64Binary,
		_blob?: Element
	}

	declare interface TimingRepeat {
		boundsQuantity?: Quantity,
		boundsRange?: Range,
		boundsPeriod?: Period,
		count?: integer,
		_count?: Element,
		duration?: decimal,
		_duration?: Element,
		durationMax?: decimal,
		_durationMax?: Element,
		durationUnits?: code,
		_durationUnits?: Element,
		frequency?: integer,
		_frequency?: Element,
		frequencyMax?: integer,
		_frequencyMax?: Element,
		period?: decimal,
		_period?: Element,
		periodMax?: decimal,
		_periodMax?: Element,
		periodUnits?: code,
		_periodUnits?: Element,
		when?: code,
		_when?: Element
	}

	declare interface Duration {
		
	}

	declare interface Timing {
		event?: dateTime[],
		_event?: Element[],
		repeat?: TimingRepeat,
		code?: CodeableConcept
	}

	declare interface Extension {
		url: uri,
		_url?: Element,
		valueBoolean?: boolean,
		_valueBoolean?: Element,
		valueInteger?: integer,
		_valueInteger?: Element,
		valueDecimal?: decimal,
		_valueDecimal?: Element,
		valueBase64Binary?: base64Binary,
		_valueBase64Binary?: Element,
		valueInstant?: instant,
		_valueInstant?: Element,
		valueString?: string,
		_valueString?: Element,
		valueUri?: uri,
		_valueUri?: Element,
		valueDate?: date,
		_valueDate?: Element,
		valueDateTime?: dateTime,
		_valueDateTime?: Element,
		valueTime?: time,
		_valueTime?: Element,
		valueCode?: code,
		_valueCode?: Element,
		valueOid?: oid,
		_valueOid?: Element,
		valueId?: id,
		_valueId?: Element,
		valueUnsignedInt?: unsignedInt,
		_valueUnsignedInt?: Element,
		valuePositiveInt?: positiveInt,
		_valuePositiveInt?: Element,
		valueMarkdown?: markdown,
		_valueMarkdown?: Element,
		valueAnnotation?: Annotation,
		valueAttachment?: Attachment,
		valueIdentifier?: Identifier,
		valueCodeableConcept?: CodeableConcept,
		valueCoding?: Coding,
		valueQuantity?: Quantity,
		valueRange?: Range,
		valuePeriod?: Period,
		valueRatio?: Ratio,
		valueSampledData?: SampledData,
		valueSignature?: Signature,
		valueHumanName?: HumanName,
		valueAddress?: Address,
		valueContactPoint?: ContactPoint,
		valueTiming?: Timing,
		valueReference?: Reference,
		valueMeta?: Meta
	}

	declare interface Element {
		fhir_comments?: string[],
		_fhir_comments?: Element[],
		id?: id,
		_id?: Element,
		extension?: Extension[]
	}

	declare interface Meta {
		versionId?: id,
		_versionId?: Element,
		lastUpdated?: instant,
		_lastUpdated?: Element,
		profile?: uri[],
		_profile?: Element[],
		security?: Coding[],
		tag?: Coding[]
	}

	declare interface ResourceBase {
		resourceType?: code,
		_resourceType?: Element,
		id?: id,
		_id?: Element,
		meta?: Meta,
		implicitRules?: uri,
		_implicitRules?: Element,
		language?: code,
		_language?: Element
	}

	declare interface Narrative {
		status: code,
		_status?: Element,
		div: string,
		_div?: Element
	}

	declare interface DomainResource {
		text?: Narrative,
		contained?: Resource[],
		extension?: Extension[],
		modifierExtension?: Extension[]
	}

	declare interface Money {
		
	}

	declare interface Account {
		identifier?: Identifier[],
		name?: string,
		_name?: Element,
		type?: CodeableConcept,
		status?: code,
		_status?: Element,
		activePeriod?: Period,
		currency?: Coding,
		balance?: Quantity,
		coveragePeriod?: Period,
		subject?: Reference,
		owner?: Reference,
		description?: string,
		_description?: Element
	}

	declare interface AllergyIntoleranceReaction {
		substance?: CodeableConcept,
		certainty?: code,
		_certainty?: Element,
		manifestation: CodeableConcept[],
		description?: string,
		_description?: Element,
		onset?: dateTime,
		_onset?: Element,
		severity?: code,
		_severity?: Element,
		exposureRoute?: CodeableConcept,
		note?: Annotation
	}

	declare interface AllergyIntolerance {
		identifier?: Identifier[],
		onset?: dateTime,
		_onset?: Element,
		recordedDate?: dateTime,
		_recordedDate?: Element,
		recorder?: Reference,
		patient: Reference,
		reporter?: Reference,
		substance: CodeableConcept,
		status?: code,
		_status?: Element,
		criticality?: code,
		_criticality?: Element,
		type?: code,
		_type?: Element,
		category?: code,
		_category?: Element,
		lastOccurence?: dateTime,
		_lastOccurence?: Element,
		note?: Annotation,
		reaction?: AllergyIntoleranceReaction[]
	}

	declare interface Schedule {
		identifier?: Identifier[],
		type?: CodeableConcept[],
		actor: Reference,
		planningHorizon?: Period,
		comment?: string,
		_comment?: Element
	}

	declare interface Slot {
		identifier?: Identifier[],
		type?: CodeableConcept,
		schedule: Reference,
		freeBusyType: code,
		_freeBusyType?: Element,
		start: instant,
		_start?: Element,
		end: instant,
		_end?: Element,
		overbooked?: boolean,
		_overbooked?: Element,
		comment?: string,
		_comment?: Element
	}

	declare interface AppointmentParticipant {
		type?: CodeableConcept[],
		actor?: Reference,
		required?: code,
		_required?: Element,
		status: code,
		_status?: Element
	}

	declare interface Appointment {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		type?: CodeableConcept,
		reason?: CodeableConcept,
		priority?: unsignedInt,
		_priority?: Element,
		description?: string,
		_description?: Element,
		start?: instant,
		_start?: Element,
		end?: instant,
		_end?: Element,
		minutesDuration?: positiveInt,
		_minutesDuration?: Element,
		slot?: Reference[],
		comment?: string,
		_comment?: Element,
		participant: AppointmentParticipant[]
	}

	declare interface AppointmentResponse {
		identifier?: Identifier[],
		appointment: Reference,
		start?: instant,
		_start?: Element,
		end?: instant,
		_end?: Element,
		participantType?: CodeableConcept[],
		actor?: Reference,
		participantStatus: code,
		_participantStatus?: Element,
		comment?: string,
		_comment?: Element
	}

	declare interface AuditEventEvent {
		type: Coding,
		subtype?: Coding[],
		action?: code,
		_action?: Element,
		dateTime: instant,
		_dateTime?: Element,
		outcome?: code,
		_outcome?: Element,
		outcomeDesc?: string,
		_outcomeDesc?: Element,
		purposeOfEvent?: Coding[]
	}

	declare interface AuditEventParticipant {
		role?: CodeableConcept[],
		reference?: Reference,
		userId?: Identifier,
		altId?: string,
		_altId?: Element,
		name?: string,
		_name?: Element,
		requestor: boolean,
		_requestor?: Element,
		location?: Reference,
		policy?: uri[],
		_policy?: Element[],
		media?: Coding,
		network?: AuditEventParticipantNetwork,
		purposeOfUse?: Coding[]
	}

	declare interface AuditEventParticipantNetwork {
		address?: string,
		_address?: Element,
		type?: code,
		_type?: Element
	}

	declare interface AuditEventSource {
		site?: string,
		_site?: Element,
		identifier: Identifier,
		type?: Coding[]
	}

	declare interface AuditEventObject {
		identifier?: Identifier,
		reference?: Reference,
		type?: Coding,
		role?: Coding,
		lifecycle?: Coding,
		securityLabel?: Coding[],
		name?: string,
		_name?: Element,
		description?: string,
		_description?: Element,
		query?: base64Binary,
		_query?: Element,
		detail?: AuditEventObjectDetail[]
	}

	declare interface AuditEventObjectDetail {
		type: string,
		_type?: Element,
		value: base64Binary,
		_value?: Element
	}

	declare interface AuditEvent {
		event: AuditEventEvent,
		participant: AuditEventParticipant[],
		source: AuditEventSource,
		object?: AuditEventObject[]
	}

	declare interface Basic {
		identifier?: Identifier[],
		code: CodeableConcept,
		subject?: Reference,
		author?: Reference,
		created?: date,
		_created?: Element
	}

	declare interface Binary {
		contentType: code,
		_contentType?: Element,
		content: base64Binary,
		_content?: Element
	}

	declare interface BodySite {
		patient: Reference,
		identifier?: Identifier[],
		code?: CodeableConcept,
		modifier?: CodeableConcept[],
		description?: string,
		_description?: Element,
		image?: Attachment[]
	}

	declare interface BundleLink {
		relation: string,
		_relation?: Element,
		url: uri,
		_url?: Element
	}

	declare interface BundleEntry {
		link?: BundleLink[],
		fullUrl?: uri,
		_fullUrl?: Element,
		resource?: Resource,
		search?: BundleEntrySearch,
		request?: BundleEntryRequest,
		response?: BundleEntryResponse
	}

	declare interface BundleEntrySearch {
		mode?: code,
		_mode?: Element,
		score?: decimal,
		_score?: Element
	}

	declare interface BundleEntryRequest {
		method: code,
		_method?: Element,
		url: uri,
		_url?: Element,
		ifNoneMatch?: string,
		_ifNoneMatch?: Element,
		ifModifiedSince?: instant,
		_ifModifiedSince?: Element,
		ifMatch?: string,
		_ifMatch?: Element,
		ifNoneExist?: string,
		_ifNoneExist?: Element
	}

	declare interface BundleEntryResponse {
		status: string,
		_status?: Element,
		location?: uri,
		_location?: Element,
		etag?: string,
		_etag?: Element,
		lastModified?: instant,
		_lastModified?: Element
	}

	declare interface Bundle {
		type: code,
		_type?: Element,
		total?: unsignedInt,
		_total?: Element,
		link?: BundleLink[],
		entry?: BundleEntry[],
		signature?: Signature
	}

	declare interface GroupCharacteristic {
		code: CodeableConcept,
		valueCodeableConcept?: CodeableConcept,
		valueBoolean?: boolean,
		_valueBoolean?: Element,
		valueQuantity?: Quantity,
		valueRange?: Range,
		exclude: boolean,
		_exclude?: Element,
		period?: Period
	}

	declare interface GroupMember {
		entity: Reference,
		period?: Period,
		inactive?: boolean,
		_inactive?: Element
	}

	declare interface MedicationProduct {
		form?: CodeableConcept,
		ingredient?: MedicationProductIngredient[],
		batch?: MedicationProductBatch[]
	}

	declare interface MedicationProductIngredient {
		item: Reference,
		amount?: Ratio
	}

	declare interface SubstanceInstance {
		identifier?: Identifier,
		expiry?: dateTime,
		_expiry?: Element,
		quantity?: Quantity
	}

	declare interface SubstanceIngredient {
		quantity?: Ratio,
		substance: Reference
	}

	declare interface Substance {
		identifier?: Identifier[],
		category?: CodeableConcept[],
		code: CodeableConcept,
		description?: string,
		_description?: Element,
		instance?: SubstanceInstance[],
		ingredient?: SubstanceIngredient[]
	}

	declare interface MedicationProductBatch {
		lotNumber?: string,
		_lotNumber?: Element,
		expirationDate?: dateTime,
		_expirationDate?: Element
	}

	declare interface MedicationPackage {
		container?: CodeableConcept,
		content?: MedicationPackageContent[]
	}

	declare interface MedicationPackageContent {
		item: Reference,
		amount?: Quantity
	}

	declare interface Medication {
		code?: CodeableConcept,
		isBrand?: boolean,
		_isBrand?: Element,
		manufacturer?: Reference,
		product?: MedicationProduct,
		package?: MedicationPackage
	}

	declare interface Group {
		identifier?: Identifier[],
		type: code,
		_type?: Element,
		actual: boolean,
		_actual?: Element,
		code?: CodeableConcept,
		name?: string,
		_name?: Element,
		quantity?: unsignedInt,
		_quantity?: Element,
		characteristic?: GroupCharacteristic[],
		member?: GroupMember[]
	}

	declare interface EncounterStatusHistory {
		status: code,
		_status?: Element,
		period: Period
	}

	declare interface EpisodeOfCareStatusHistory {
		status: code,
		_status?: Element,
		period: Period
	}

	declare interface Age {
		
	}

	declare interface ConditionStage {
		summary?: CodeableConcept,
		assessment?: Reference[]
	}

	declare interface ClinicalImpressionInvestigations {
		code: CodeableConcept,
		item?: Reference[]
	}

	declare interface SpecimenCollection {
		collector?: Reference,
		comment?: string[],
		_comment?: Element[],
		collectedDateTime?: dateTime,
		_collectedDateTime?: Element,
		collectedPeriod?: Period,
		quantity?: Quantity,
		method?: CodeableConcept,
		bodySite?: CodeableConcept
	}

	declare interface SpecimenTreatment {
		description?: string,
		_description?: Element,
		procedure?: CodeableConcept,
		additive?: Reference[]
	}

	declare interface SpecimenContainer {
		identifier?: Identifier[],
		description?: string,
		_description?: Element,
		type?: CodeableConcept,
		capacity?: Quantity,
		specimenQuantity?: Quantity,
		additiveCodeableConcept?: CodeableConcept,
		additiveReference?: Reference
	}

	declare interface Specimen {
		identifier?: Identifier[],
		status?: code,
		_status?: Element,
		type?: CodeableConcept,
		parent?: Reference[],
		subject: Reference,
		accessionIdentifier?: Identifier,
		receivedTime?: dateTime,
		_receivedTime?: Element,
		collection?: SpecimenCollection,
		treatment?: SpecimenTreatment[],
		container?: SpecimenContainer[]
	}

	declare interface DeviceComponentProductionSpecification {
		specType?: CodeableConcept,
		componentId?: Identifier,
		productionSpec?: string,
		_productionSpec?: Element
	}

	declare interface DeviceComponent {
		type: CodeableConcept,
		identifier: Identifier,
		lastSystemChange: instant,
		_lastSystemChange?: Element,
		source?: Reference,
		parent?: Reference,
		operationalStatus?: CodeableConcept[],
		parameterGroup?: CodeableConcept,
		measurementPrinciple?: code,
		_measurementPrinciple?: Element,
		productionSpecification?: DeviceComponentProductionSpecification[],
		languageCode?: CodeableConcept
	}

	declare interface DeviceMetricCalibration {
		type?: code,
		_type?: Element,
		state?: code,
		_state?: Element,
		time?: instant,
		_time?: Element
	}

	declare interface DeviceMetric {
		type: CodeableConcept,
		identifier: Identifier,
		unit?: CodeableConcept,
		source?: Reference,
		parent?: Reference,
		operationalStatus?: code,
		_operationalStatus?: Element,
		color?: code,
		_color?: Element,
		category: code,
		_category?: Element,
		measurementPeriod?: Timing,
		calibration?: DeviceMetricCalibration[]
	}

	declare interface ObservationReferenceRange {
		low?: Quantity,
		high?: Quantity,
		meaning?: CodeableConcept,
		age?: Range,
		text?: string,
		_text?: Element
	}

	declare interface ObservationRelated {
		type?: code,
		_type?: Element,
		target: Reference
	}

	declare interface QuestionnaireGroup {
		linkId?: string,
		_linkId?: Element,
		title?: string,
		_title?: Element,
		concept?: Coding[],
		text?: string,
		_text?: Element,
		required?: boolean,
		_required?: Element,
		repeats?: boolean,
		_repeats?: Element,
		group?: QuestionnaireGroup[],
		question?: QuestionnaireGroupQuestion[]
	}

	declare interface QuestionnaireGroupQuestion {
		linkId?: string,
		_linkId?: Element,
		concept?: Coding[],
		text?: string,
		_text?: Element,
		type?: code,
		_type?: Element,
		required?: boolean,
		_required?: Element,
		repeats?: boolean,
		_repeats?: Element,
		options?: Reference,
		option?: Coding[],
		group?: QuestionnaireGroup[]
	}

	declare interface ValueSetContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface ValueSetCodeSystem {
		system: uri,
		_system?: Element,
		version?: string,
		_version?: Element,
		caseSensitive?: boolean,
		_caseSensitive?: Element,
		concept: ValueSetCodeSystemConcept[]
	}

	declare interface ValueSetCodeSystemConcept {
		code: code,
		_code?: Element,
		abstract?: boolean,
		_abstract?: Element,
		display?: string,
		_display?: Element,
		definition?: string,
		_definition?: Element,
		designation?: ValueSetCodeSystemConceptDesignation[],
		concept?: ValueSetCodeSystemConcept[]
	}

	declare interface ValueSetCodeSystemConceptDesignation {
		language?: code,
		_language?: Element,
		use?: Coding,
		value: string,
		_value?: Element
	}

	declare interface ValueSetCompose {
		import?: uri[],
		_import?: Element[],
		include?: ValueSetComposeInclude[],
		exclude?: ValueSetComposeInclude[]
	}

	declare interface ValueSetComposeInclude {
		system: uri,
		_system?: Element,
		version?: string,
		_version?: Element,
		concept?: ValueSetComposeIncludeConcept[],
		filter?: ValueSetComposeIncludeFilter[]
	}

	declare interface ValueSetComposeIncludeConcept {
		code: code,
		_code?: Element,
		display?: string,
		_display?: Element,
		designation?: ValueSetCodeSystemConceptDesignation[]
	}

	declare interface ValueSetComposeIncludeFilter {
		property: code,
		_property?: Element,
		op: code,
		_op?: Element,
		value: code,
		_value?: Element
	}

	declare interface ValueSetExpansion {
		identifier: uri,
		_identifier?: Element,
		timestamp: dateTime,
		_timestamp?: Element,
		total?: integer,
		_total?: Element,
		offset?: integer,
		_offset?: Element,
		parameter?: ValueSetExpansionParameter[],
		contains?: ValueSetExpansionContains[]
	}

	declare interface ValueSetExpansionParameter {
		name: string,
		_name?: Element,
		valueString?: string,
		_valueString?: Element,
		valueBoolean?: boolean,
		_valueBoolean?: Element,
		valueInteger?: integer,
		_valueInteger?: Element,
		valueDecimal?: decimal,
		_valueDecimal?: Element,
		valueUri?: uri,
		_valueUri?: Element,
		valueCode?: code,
		_valueCode?: Element
	}

	declare interface ValueSetExpansionContains {
		system?: uri,
		_system?: Element,
		abstract?: boolean,
		_abstract?: Element,
		version?: string,
		_version?: Element,
		code?: code,
		_code?: Element,
		display?: string,
		_display?: Element,
		contains?: ValueSetExpansionContains[]
	}

	declare interface ValueSet {
		url?: uri,
		_url?: Element,
		identifier?: Identifier,
		version?: string,
		_version?: Element,
		name?: string,
		_name?: Element,
		status: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: ValueSetContact[],
		date?: dateTime,
		_date?: Element,
		lockedDate?: date,
		_lockedDate?: Element,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		immutable?: boolean,
		_immutable?: Element,
		requirements?: string,
		_requirements?: Element,
		copyright?: string,
		_copyright?: Element,
		extensible?: boolean,
		_extensible?: Element,
		codeSystem?: ValueSetCodeSystem,
		compose?: ValueSetCompose,
		expansion?: ValueSetExpansion
	}

	declare interface Questionnaire {
		identifier?: Identifier[],
		version?: string,
		_version?: Element,
		status: code,
		_status?: Element,
		date?: dateTime,
		_date?: Element,
		publisher?: string,
		_publisher?: Element,
		telecom?: ContactPoint[],
		subjectType?: code[],
		_subjectType?: Element[],
		group: QuestionnaireGroup
	}

	declare interface QuestionnaireResponseGroup {
		linkId?: string,
		_linkId?: Element,
		title?: string,
		_title?: Element,
		text?: string,
		_text?: Element,
		subject?: Reference,
		group?: QuestionnaireResponseGroup[],
		question?: QuestionnaireResponseGroupQuestion[]
	}

	declare interface QuestionnaireResponseGroupQuestion {
		linkId?: string,
		_linkId?: Element,
		text?: string,
		_text?: Element,
		answer?: QuestionnaireResponseGroupQuestionAnswer[]
	}

	declare interface QuestionnaireResponseGroupQuestionAnswer {
		valueBoolean?: boolean,
		_valueBoolean?: Element,
		valueDecimal?: decimal,
		_valueDecimal?: Element,
		valueInteger?: integer,
		_valueInteger?: Element,
		valueDate?: date,
		_valueDate?: Element,
		valueDateTime?: dateTime,
		_valueDateTime?: Element,
		valueInstant?: instant,
		_valueInstant?: Element,
		valueTime?: time,
		_valueTime?: Element,
		valueString?: string,
		_valueString?: Element,
		valueUri?: uri,
		_valueUri?: Element,
		valueAttachment?: Attachment,
		valueCoding?: Coding,
		valueQuantity?: Quantity,
		valueReference?: Reference,
		group?: QuestionnaireResponseGroup[]
	}

	declare interface QuestionnaireResponse {
		identifier?: Identifier,
		questionnaire?: Reference,
		status: code,
		_status?: Element,
		subject?: Reference,
		author?: Reference,
		authored?: dateTime,
		_authored?: Element,
		source?: Reference,
		encounter?: Reference,
		group?: QuestionnaireResponseGroup
	}

	declare interface ObservationComponent {
		code: CodeableConcept,
		valueQuantity?: Quantity,
		valueCodeableConcept?: CodeableConcept,
		valueString?: string,
		_valueString?: Element,
		valueRange?: Range,
		valueRatio?: Ratio,
		valueSampledData?: SampledData,
		valueAttachment?: Attachment,
		valueTime?: time,
		_valueTime?: Element,
		valueDateTime?: dateTime,
		_valueDateTime?: Element,
		valuePeriod?: Period,
		dataAbsentReason?: CodeableConcept,
		referenceRange?: ObservationReferenceRange[]
	}

	declare interface Observation {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		category?: CodeableConcept,
		code: CodeableConcept,
		subject?: Reference,
		encounter?: Reference,
		effectiveDateTime?: dateTime,
		_effectiveDateTime?: Element,
		effectivePeriod?: Period,
		issued?: instant,
		_issued?: Element,
		performer?: Reference[],
		valueQuantity?: Quantity,
		valueCodeableConcept?: CodeableConcept,
		valueString?: string,
		_valueString?: Element,
		valueRange?: Range,
		valueRatio?: Ratio,
		valueSampledData?: SampledData,
		valueAttachment?: Attachment,
		valueTime?: time,
		_valueTime?: Element,
		valueDateTime?: dateTime,
		_valueDateTime?: Element,
		valuePeriod?: Period,
		dataAbsentReason?: CodeableConcept,
		interpretation?: CodeableConcept,
		comments?: string,
		_comments?: Element,
		bodySite?: CodeableConcept,
		method?: CodeableConcept,
		specimen?: Reference,
		device?: Reference,
		referenceRange?: ObservationReferenceRange[],
		related?: ObservationRelated[],
		component?: ObservationComponent[]
	}

	declare interface FamilyMemberHistoryCondition {
		code: CodeableConcept,
		outcome?: CodeableConcept,
		onsetQuantity?: Quantity,
		onsetRange?: Range,
		onsetPeriod?: Period,
		onsetString?: string,
		_onsetString?: Element,
		note?: Annotation
	}

	declare interface FamilyMemberHistory {
		identifier?: Identifier[],
		patient: Reference,
		date?: dateTime,
		_date?: Element,
		status: code,
		_status?: Element,
		name?: string,
		_name?: Element,
		relationship: CodeableConcept,
		gender?: code,
		_gender?: Element,
		bornPeriod?: Period,
		bornDate?: date,
		_bornDate?: Element,
		bornString?: string,
		_bornString?: Element,
		ageQuantity?: Quantity,
		ageRange?: Range,
		ageString?: string,
		_ageString?: Element,
		deceasedBoolean?: boolean,
		_deceasedBoolean?: Element,
		deceasedQuantity?: Quantity,
		deceasedRange?: Range,
		deceasedDate?: date,
		_deceasedDate?: Element,
		deceasedString?: string,
		_deceasedString?: Element,
		note?: Annotation,
		condition?: FamilyMemberHistoryCondition[]
	}

	declare interface DocumentReferenceRelatesTo {
		code: code,
		_code?: Element,
		target: Reference
	}

	declare interface DocumentReferenceContent {
		attachment: Attachment,
		format?: Coding[]
	}

	declare interface DocumentReferenceContext {
		encounter?: Reference,
		event?: CodeableConcept[],
		period?: Period,
		facilityType?: CodeableConcept,
		practiceSetting?: CodeableConcept,
		sourcePatientInfo?: Reference,
		related?: DocumentReferenceContextRelated[]
	}

	declare interface DocumentReferenceContextRelated {
		identifier?: Identifier,
		ref?: Reference
	}

	declare interface DocumentReference {
		masterIdentifier?: Identifier,
		identifier?: Identifier[],
		subject?: Reference,
		type: CodeableConcept,
		class?: CodeableConcept,
		author?: Reference[],
		custodian?: Reference,
		authenticator?: Reference,
		created?: dateTime,
		_created?: Element,
		indexed: instant,
		_indexed?: Element,
		status: code,
		_status?: Element,
		docStatus?: CodeableConcept,
		relatesTo?: DocumentReferenceRelatesTo[],
		description?: string,
		_description?: Element,
		securityLabel?: CodeableConcept[],
		content: DocumentReferenceContent[],
		context?: DocumentReferenceContext
	}

	declare interface DiagnosticOrderEvent {
		status: code,
		_status?: Element,
		description?: CodeableConcept,
		dateTime: dateTime,
		_dateTime?: Element,
		actor?: Reference
	}

	declare interface DiagnosticOrderItem {
		code: CodeableConcept,
		specimen?: Reference[],
		bodySite?: CodeableConcept,
		status?: code,
		_status?: Element,
		event?: DiagnosticOrderEvent[]
	}

	declare interface DiagnosticOrder {
		subject: Reference,
		orderer?: Reference,
		identifier?: Identifier[],
		encounter?: Reference,
		reason?: CodeableConcept[],
		supportingInformation?: Reference[],
		specimen?: Reference[],
		status?: code,
		_status?: Element,
		priority?: code,
		_priority?: Element,
		event?: DiagnosticOrderEvent[],
		item?: DiagnosticOrderItem[],
		note?: Annotation[]
	}

	declare interface ProcedureRequest {
		identifier?: Identifier[],
		subject: Reference,
		code: CodeableConcept,
		bodySite?: CodeableConcept[],
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		scheduledDateTime?: dateTime,
		_scheduledDateTime?: Element,
		scheduledPeriod?: Period,
		scheduledTiming?: Timing,
		encounter?: Reference,
		performer?: Reference,
		status?: code,
		_status?: Element,
		notes?: Annotation[],
		asNeededBoolean?: boolean,
		_asNeededBoolean?: Element,
		asNeededCodeableConcept?: CodeableConcept,
		orderedOn?: dateTime,
		_orderedOn?: Element,
		orderer?: Reference,
		priority?: code,
		_priority?: Element
	}

	declare interface ReferralRequest {
		status: code,
		_status?: Element,
		identifier?: Identifier[],
		date?: dateTime,
		_date?: Element,
		type?: CodeableConcept,
		specialty?: CodeableConcept,
		priority?: CodeableConcept,
		patient?: Reference,
		requester?: Reference,
		recipient?: Reference[],
		encounter?: Reference,
		dateSent?: dateTime,
		_dateSent?: Element,
		reason?: CodeableConcept,
		description?: string,
		_description?: Element,
		serviceRequested?: CodeableConcept[],
		supportingInformation?: Reference[],
		fulfillmentTime?: Period
	}

	declare interface ProcedurePerformer {
		actor?: Reference,
		role?: CodeableConcept
	}

	declare interface ProcedureFocalDevice {
		action?: CodeableConcept,
		manipulated: Reference
	}

	declare interface Procedure {
		identifier?: Identifier[],
		subject: Reference,
		status: code,
		_status?: Element,
		category?: CodeableConcept,
		code: CodeableConcept,
		notPerformed?: boolean,
		_notPerformed?: Element,
		reasonNotPerformed?: CodeableConcept[],
		bodySite?: CodeableConcept[],
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		performer?: ProcedurePerformer[],
		performedDateTime?: dateTime,
		_performedDateTime?: Element,
		performedPeriod?: Period,
		encounter?: Reference,
		location?: Reference,
		outcome?: CodeableConcept,
		report?: Reference[],
		complication?: CodeableConcept[],
		followUp?: CodeableConcept[],
		request?: Reference,
		notes?: Annotation[],
		focalDevice?: ProcedureFocalDevice[],
		used?: Reference[]
	}

	declare interface ImagingStudySeries {
		number?: unsignedInt,
		_number?: Element,
		modality: Coding,
		uid: oid,
		_uid?: Element,
		description?: string,
		_description?: Element,
		numberOfInstances: unsignedInt,
		_numberOfInstances?: Element,
		availability?: code,
		_availability?: Element,
		url?: uri,
		_url?: Element,
		bodySite?: Coding,
		laterality?: Coding,
		started?: dateTime,
		_started?: Element,
		instance?: ImagingStudySeriesInstance[]
	}

	declare interface ImagingStudySeriesInstance {
		number?: unsignedInt,
		_number?: Element,
		uid: oid,
		_uid?: Element,
		sopClass: oid,
		_sopClass?: Element,
		type?: string,
		_type?: Element,
		title?: string,
		_title?: Element,
		content?: Attachment[]
	}

	declare interface ImagingStudy {
		started?: dateTime,
		_started?: Element,
		patient: Reference,
		uid: oid,
		_uid?: Element,
		accession?: Identifier,
		identifier?: Identifier[],
		order?: Reference[],
		modalityList?: Coding[],
		referrer?: Reference,
		availability?: code,
		_availability?: Element,
		url?: uri,
		_url?: Element,
		numberOfSeries: unsignedInt,
		_numberOfSeries?: Element,
		numberOfInstances: unsignedInt,
		_numberOfInstances?: Element,
		procedure?: Reference[],
		interpreter?: Reference,
		description?: string,
		_description?: Element,
		series?: ImagingStudySeries[]
	}

	declare interface ImagingObjectSelectionStudy {
		uid: oid,
		_uid?: Element,
		url?: uri,
		_url?: Element,
		imagingStudy?: Reference,
		series: ImagingObjectSelectionStudySeries[]
	}

	declare interface ImagingObjectSelectionStudySeries {
		uid?: oid,
		_uid?: Element,
		url?: uri,
		_url?: Element,
		instance: ImagingObjectSelectionStudySeriesInstance[]
	}

	declare interface ImagingObjectSelectionStudySeriesInstance {
		sopClass: oid,
		_sopClass?: Element,
		uid: oid,
		_uid?: Element,
		url: uri,
		_url?: Element,
		frames?: ImagingObjectSelectionStudySeriesInstanceFrames[]
	}

	declare interface ImagingObjectSelectionStudySeriesInstanceFrames {
		frameNumbers: unsignedInt[],
		_frameNumbers?: Element[],
		url: uri,
		_url?: Element
	}

	declare interface ImagingObjectSelection {
		uid: oid,
		_uid?: Element,
		patient: Reference,
		title: CodeableConcept,
		description?: string,
		_description?: Element,
		author?: Reference,
		authoringTime?: dateTime,
		_authoringTime?: Element,
		study: ImagingObjectSelectionStudy[]
	}

	declare interface DiagnosticReportImage {
		comment?: string,
		_comment?: Element,
		link: Reference
	}

	declare interface Media {
		type: code,
		_type?: Element,
		subtype?: CodeableConcept,
		identifier?: Identifier[],
		subject?: Reference,
		operator?: Reference,
		view?: CodeableConcept,
		deviceName?: string,
		_deviceName?: Element,
		height?: positiveInt,
		_height?: Element,
		width?: positiveInt,
		_width?: Element,
		frames?: positiveInt,
		_frames?: Element,
		duration?: unsignedInt,
		_duration?: Element,
		content: Attachment
	}

	declare interface DiagnosticReport {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		category?: CodeableConcept,
		code: CodeableConcept,
		subject: Reference,
		encounter?: Reference,
		effectiveDateTime?: dateTime,
		_effectiveDateTime?: Element,
		effectivePeriod?: Period,
		issued: instant,
		_issued?: Element,
		performer: Reference,
		request?: Reference[],
		specimen?: Reference[],
		result?: Reference[],
		imagingStudy?: Reference[],
		image?: DiagnosticReportImage[],
		conclusion?: string,
		_conclusion?: Element,
		codedDiagnosis?: CodeableConcept[],
		presentedForm?: Attachment[]
	}

	declare interface ClinicalImpressionFinding {
		item: CodeableConcept,
		cause?: string,
		_cause?: Element
	}

	declare interface ClinicalImpressionRuledOut {
		item: CodeableConcept,
		reason?: string,
		_reason?: Element
	}

	declare interface CommunicationRequestPayload {
		contentString?: string,
		_contentString?: Element,
		contentAttachment?: Attachment,
		contentReference?: Reference
	}

	declare interface CommunicationRequest {
		identifier?: Identifier[],
		category?: CodeableConcept,
		sender?: Reference,
		recipient?: Reference[],
		payload?: CommunicationRequestPayload[],
		medium?: CodeableConcept[],
		requester?: Reference,
		status?: code,
		_status?: Element,
		encounter?: Reference,
		scheduledDateTime?: dateTime,
		_scheduledDateTime?: Element,
		scheduledPeriod?: Period,
		reason?: CodeableConcept[],
		requestedOn?: dateTime,
		_requestedOn?: Element,
		subject?: Reference,
		priority?: CodeableConcept
	}

	declare interface DeviceUseRequest {
		bodySiteCodeableConcept?: CodeableConcept,
		bodySiteReference?: Reference,
		status?: code,
		_status?: Element,
		device: Reference,
		encounter?: Reference,
		identifier?: Identifier[],
		indication?: CodeableConcept[],
		notes?: string[],
		_notes?: Element[],
		prnReason?: CodeableConcept[],
		orderedOn?: dateTime,
		_orderedOn?: Element,
		recordedOn?: dateTime,
		_recordedOn?: Element,
		subject: Reference,
		timingTiming?: Timing,
		timingPeriod?: Period,
		timingDateTime?: dateTime,
		_timingDateTime?: Element,
		priority?: code,
		_priority?: Element
	}

	declare interface MedicationOrderDosageInstruction {
		text?: string,
		_text?: Element,
		additionalInstructions?: CodeableConcept,
		timing?: Timing,
		asNeededBoolean?: boolean,
		_asNeededBoolean?: Element,
		asNeededCodeableConcept?: CodeableConcept,
		siteCodeableConcept?: CodeableConcept,
		siteReference?: Reference,
		route?: CodeableConcept,
		method?: CodeableConcept,
		doseRange?: Range,
		doseQuantity?: Quantity,
		rateRatio?: Ratio,
		rateRange?: Range,
		maxDosePerPeriod?: Ratio
	}

	declare interface MedicationOrderDispenseRequest {
		medicationCodeableConcept?: CodeableConcept,
		medicationReference?: Reference,
		validityPeriod?: Period,
		numberOfRepeatsAllowed?: positiveInt,
		_numberOfRepeatsAllowed?: Element,
		quantity?: Quantity,
		expectedSupplyDuration?: Quantity
	}

	declare interface MedicationOrderSubstitution {
		type: CodeableConcept,
		reason?: CodeableConcept
	}

	declare interface MedicationOrder {
		identifier?: Identifier[],
		dateWritten?: dateTime,
		_dateWritten?: Element,
		status?: code,
		_status?: Element,
		dateEnded?: dateTime,
		_dateEnded?: Element,
		reasonEnded?: CodeableConcept,
		patient?: Reference,
		prescriber?: Reference,
		encounter?: Reference,
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		note?: string,
		_note?: Element,
		medicationCodeableConcept?: CodeableConcept,
		medicationReference?: Reference,
		dosageInstruction?: MedicationOrderDosageInstruction[],
		dispenseRequest?: MedicationOrderDispenseRequest,
		substitution?: MedicationOrderSubstitution,
		priorPrescription?: Reference
	}

	declare interface NutritionOrderOralDiet {
		type?: CodeableConcept[],
		schedule?: Timing[],
		nutrient?: NutritionOrderOralDietNutrient[],
		texture?: NutritionOrderOralDietTexture[],
		fluidConsistencyType?: CodeableConcept[],
		instruction?: string,
		_instruction?: Element
	}

	declare interface NutritionOrderOralDietNutrient {
		modifier?: CodeableConcept,
		amount?: Quantity
	}

	declare interface NutritionOrderOralDietTexture {
		modifier?: CodeableConcept,
		foodType?: CodeableConcept
	}

	declare interface NutritionOrderSupplement {
		type?: CodeableConcept,
		productName?: string,
		_productName?: Element,
		schedule?: Timing[],
		quantity?: Quantity,
		instruction?: string,
		_instruction?: Element
	}

	declare interface NutritionOrderEnteralFormula {
		baseFormulaType?: CodeableConcept,
		baseFormulaProductName?: string,
		_baseFormulaProductName?: Element,
		additiveType?: CodeableConcept,
		additiveProductName?: string,
		_additiveProductName?: Element,
		caloricDensity?: Quantity,
		routeofAdministration?: CodeableConcept,
		administration?: NutritionOrderEnteralFormulaAdministration[],
		maxVolumeToDeliver?: Quantity,
		administrationInstruction?: string,
		_administrationInstruction?: Element
	}

	declare interface NutritionOrderEnteralFormulaAdministration {
		schedule?: Timing,
		quantity?: Quantity,
		rateQuantity?: Quantity,
		rateRatio?: Ratio
	}

	declare interface NutritionOrder {
		patient: Reference,
		orderer?: Reference,
		identifier?: Identifier[],
		encounter?: Reference,
		dateTime: dateTime,
		_dateTime?: Element,
		status?: code,
		_status?: Element,
		allergyIntolerance?: Reference[],
		foodPreferenceModifier?: CodeableConcept[],
		excludeFoodModifier?: CodeableConcept[],
		oralDiet?: NutritionOrderOralDiet,
		supplement?: NutritionOrderSupplement[],
		enteralFormula?: NutritionOrderEnteralFormula
	}

	declare interface OrderWhen {
		code?: CodeableConcept,
		schedule?: Timing
	}

	declare interface Order {
		identifier?: Identifier[],
		date?: dateTime,
		_date?: Element,
		subject?: Reference,
		source?: Reference,
		target?: Reference,
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		when?: OrderWhen,
		detail: Reference[]
	}

	declare interface ProcessRequestItem {
		sequenceLinkId: integer,
		_sequenceLinkId?: Element
	}

	declare interface ProcessRequest {
		action: code,
		_action?: Element,
		identifier?: Identifier[],
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		target?: Reference,
		provider?: Reference,
		organization?: Reference,
		request?: Reference,
		response?: Reference,
		nullify?: boolean,
		_nullify?: Element,
		reference?: string,
		_reference?: Element,
		item?: ProcessRequestItem[],
		include?: string[],
		_include?: Element[],
		exclude?: string[],
		_exclude?: Element[],
		period?: Period
	}

	declare interface SupplyRequestWhen {
		code?: CodeableConcept,
		schedule?: Timing
	}

	declare interface SupplyRequest {
		patient?: Reference,
		source?: Reference,
		date?: dateTime,
		_date?: Element,
		identifier?: Identifier,
		status?: code,
		_status?: Element,
		kind?: CodeableConcept,
		orderedItem?: Reference,
		supplier?: Reference[],
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		when?: SupplyRequestWhen
	}

	declare interface VisionPrescriptionDispense {
		product: Coding,
		eye?: code,
		_eye?: Element,
		sphere?: decimal,
		_sphere?: Element,
		cylinder?: decimal,
		_cylinder?: Element,
		axis?: integer,
		_axis?: Element,
		prism?: decimal,
		_prism?: Element,
		base?: code,
		_base?: Element,
		add?: decimal,
		_add?: Element,
		power?: decimal,
		_power?: Element,
		backCurve?: decimal,
		_backCurve?: Element,
		diameter?: decimal,
		_diameter?: Element,
		duration?: Quantity,
		color?: string,
		_color?: Element,
		brand?: string,
		_brand?: Element,
		notes?: string,
		_notes?: Element
	}

	declare interface VisionPrescription {
		identifier?: Identifier[],
		dateWritten?: dateTime,
		_dateWritten?: Element,
		patient?: Reference,
		prescriber?: Reference,
		encounter?: Reference,
		reasonCodeableConcept?: CodeableConcept,
		reasonReference?: Reference,
		dispense?: VisionPrescriptionDispense[]
	}

	declare interface ClinicalImpression {
		patient: Reference,
		assessor?: Reference,
		status: code,
		_status?: Element,
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		previous?: Reference,
		problem?: Reference[],
		triggerCodeableConcept?: CodeableConcept,
		triggerReference?: Reference,
		investigations?: ClinicalImpressionInvestigations[],
		protocol?: uri,
		_protocol?: Element,
		summary?: string,
		_summary?: Element,
		finding?: ClinicalImpressionFinding[],
		resolved?: CodeableConcept[],
		ruledOut?: ClinicalImpressionRuledOut[],
		prognosis?: string,
		_prognosis?: Element,
		plan?: Reference[],
		action?: Reference[]
	}

	declare interface ConditionEvidence {
		code?: CodeableConcept,
		detail?: Reference[]
	}

	declare interface Condition {
		identifier?: Identifier[],
		patient: Reference,
		encounter?: Reference,
		asserter?: Reference,
		dateRecorded?: date,
		_dateRecorded?: Element,
		code: CodeableConcept,
		category?: CodeableConcept,
		clinicalStatus?: code,
		_clinicalStatus?: Element,
		verificationStatus: code,
		_verificationStatus?: Element,
		severity?: CodeableConcept,
		onsetDateTime?: dateTime,
		_onsetDateTime?: Element,
		onsetQuantity?: Quantity,
		onsetPeriod?: Period,
		onsetRange?: Range,
		onsetString?: string,
		_onsetString?: Element,
		abatementDateTime?: dateTime,
		_abatementDateTime?: Element,
		abatementQuantity?: Quantity,
		abatementBoolean?: boolean,
		_abatementBoolean?: Element,
		abatementPeriod?: Period,
		abatementRange?: Range,
		abatementString?: string,
		_abatementString?: Element,
		stage?: ConditionStage,
		evidence?: ConditionEvidence[],
		bodySite?: CodeableConcept[],
		notes?: string,
		_notes?: Element
	}

	declare interface EpisodeOfCareCareTeam {
		role?: CodeableConcept[],
		period?: Period,
		member?: Reference
	}

	declare interface EpisodeOfCare {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		statusHistory?: EpisodeOfCareStatusHistory[],
		type?: CodeableConcept[],
		condition?: Reference[],
		patient: Reference,
		managingOrganization?: Reference,
		period?: Period,
		referralRequest?: Reference[],
		careManager?: Reference,
		careTeam?: EpisodeOfCareCareTeam[]
	}

	declare interface EncounterParticipant {
		type?: CodeableConcept[],
		period?: Period,
		individual?: Reference
	}

	declare interface EncounterHospitalization {
		preAdmissionIdentifier?: Identifier,
		origin?: Reference,
		admitSource?: CodeableConcept,
		admittingDiagnosis?: Reference[],
		reAdmission?: CodeableConcept,
		dietPreference?: CodeableConcept[],
		specialCourtesy?: CodeableConcept[],
		specialArrangement?: CodeableConcept[],
		destination?: Reference,
		dischargeDisposition?: CodeableConcept,
		dischargeDiagnosis?: Reference[]
	}

	declare interface EncounterLocation {
		location: Reference,
		status?: code,
		_status?: Element,
		period?: Period
	}

	declare interface Encounter {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		statusHistory?: EncounterStatusHistory[],
		class?: code,
		_class?: Element,
		type?: CodeableConcept[],
		priority?: CodeableConcept,
		patient?: Reference,
		episodeOfCare?: Reference[],
		incomingReferral?: Reference[],
		participant?: EncounterParticipant[],
		appointment?: Reference,
		period?: Period,
		length?: Quantity,
		reason?: CodeableConcept[],
		indication?: Reference[],
		hospitalization?: EncounterHospitalization,
		location?: EncounterLocation[],
		serviceProvider?: Reference,
		partOf?: Reference
	}

	declare interface CarePlanRelatedPlan {
		code?: code,
		_code?: Element,
		plan: Reference
	}

	declare interface CarePlanParticipant {
		role?: CodeableConcept,
		member?: Reference
	}

	declare interface MedicationStatementDosage {
		text?: string,
		_text?: Element,
		timing?: Timing,
		asNeededBoolean?: boolean,
		_asNeededBoolean?: Element,
		asNeededCodeableConcept?: CodeableConcept,
		siteCodeableConcept?: CodeableConcept,
		siteReference?: Reference,
		route?: CodeableConcept,
		method?: CodeableConcept,
		quantityQuantity?: Quantity,
		quantityRange?: Range,
		rateRatio?: Ratio,
		rateRange?: Range,
		maxDosePerPeriod?: Ratio
	}

	declare interface MedicationStatement {
		identifier?: Identifier[],
		patient: Reference,
		informationSource?: Reference,
		dateAsserted?: dateTime,
		_dateAsserted?: Element,
		status: code,
		_status?: Element,
		wasNotTaken?: boolean,
		_wasNotTaken?: Element,
		reasonNotTaken?: CodeableConcept[],
		reasonForUseCodeableConcept?: CodeableConcept,
		reasonForUseReference?: Reference,
		effectiveDateTime?: dateTime,
		_effectiveDateTime?: Element,
		effectivePeriod?: Period,
		note?: string,
		_note?: Element,
		supportingInformation?: Reference[],
		medicationCodeableConcept?: CodeableConcept,
		medicationReference?: Reference,
		dosage?: MedicationStatementDosage[]
	}

	declare interface RiskAssessmentPrediction {
		outcome: CodeableConcept,
		probabilityDecimal?: decimal,
		_probabilityDecimal?: Element,
		probabilityRange?: Range,
		probabilityCodeableConcept?: CodeableConcept,
		relativeRisk?: decimal,
		_relativeRisk?: Element,
		whenPeriod?: Period,
		whenRange?: Range,
		rationale?: string,
		_rationale?: Element
	}

	declare interface RiskAssessment {
		subject?: Reference,
		date?: dateTime,
		_date?: Element,
		condition?: Reference,
		encounter?: Reference,
		performer?: Reference,
		identifier?: Identifier,
		method?: CodeableConcept,
		basis?: Reference[],
		prediction?: RiskAssessmentPrediction[],
		mitigation?: string,
		_mitigation?: Element
	}

	declare interface GoalOutcome {
		resultCodeableConcept?: CodeableConcept,
		resultReference?: Reference
	}

	declare interface Goal {
		identifier?: Identifier[],
		subject?: Reference,
		startDate?: date,
		_startDate?: Element,
		startCodeableConcept?: CodeableConcept,
		targetDate?: date,
		_targetDate?: Element,
		targetQuantity?: Quantity,
		category?: CodeableConcept[],
		description: string,
		_description?: Element,
		status: code,
		_status?: Element,
		statusDate?: date,
		_statusDate?: Element,
		statusReason?: CodeableConcept,
		author?: Reference,
		priority?: CodeableConcept,
		addresses?: Reference[],
		note?: Annotation[],
		outcome?: GoalOutcome[]
	}

	declare interface CarePlanActivity {
		actionResulting?: Reference[],
		progress?: Annotation[],
		reference?: Reference,
		detail?: CarePlanActivityDetail
	}

	declare interface CarePlanActivityDetail {
		category?: CodeableConcept,
		code?: CodeableConcept,
		reasonCode?: CodeableConcept[],
		reasonReference?: Reference[],
		goal?: Reference[],
		status?: code,
		_status?: Element,
		statusReason?: CodeableConcept,
		prohibited: boolean,
		_prohibited?: Element,
		scheduledTiming?: Timing,
		scheduledPeriod?: Period,
		scheduledString?: string,
		_scheduledString?: Element,
		location?: Reference,
		performer?: Reference[],
		productCodeableConcept?: CodeableConcept,
		productReference?: Reference,
		dailyAmount?: Quantity,
		quantity?: Quantity,
		description?: string,
		_description?: Element
	}

	declare interface CarePlan {
		identifier?: Identifier[],
		subject?: Reference,
		status: code,
		_status?: Element,
		context?: Reference,
		period?: Period,
		author?: Reference[],
		modified?: dateTime,
		_modified?: Element,
		category?: CodeableConcept[],
		description?: string,
		_description?: Element,
		addresses?: Reference[],
		support?: Reference[],
		relatedPlan?: CarePlanRelatedPlan[],
		participant?: CarePlanParticipant[],
		goal?: Reference[],
		activity?: CarePlanActivity[],
		note?: Annotation
	}

	declare interface ClaimPayee {
		type?: Coding,
		provider?: Reference,
		organization?: Reference,
		person?: Reference
	}

	declare interface ClaimDiagnosis {
		sequence: positiveInt,
		_sequence?: Element,
		diagnosis: Coding
	}

	declare interface ClaimCoverage {
		sequence: positiveInt,
		_sequence?: Element,
		focal: boolean,
		_focal?: Element,
		coverage: Reference,
		businessArrangement?: string,
		_businessArrangement?: Element,
		relationship: Coding,
		preAuthRef?: string[],
		_preAuthRef?: Element[],
		claimResponse?: Reference,
		originalRuleset?: Coding
	}

	declare interface ContractActor {
		entity: Reference,
		role?: CodeableConcept[]
	}

	declare interface ContractValuedItem {
		entityCodeableConcept?: CodeableConcept,
		entityReference?: Reference,
		identifier?: Identifier,
		effectiveTime?: dateTime,
		_effectiveTime?: Element,
		quantity?: Quantity,
		unitPrice?: Quantity,
		factor?: decimal,
		_factor?: Element,
		points?: decimal,
		_points?: Element,
		net?: Quantity
	}

	declare interface ContractSigner {
		type: Coding,
		party: Reference,
		signature: string,
		_signature?: Element
	}

	declare interface ContractTerm {
		identifier?: Identifier,
		issued?: dateTime,
		_issued?: Element,
		applies?: Period,
		type?: CodeableConcept,
		subType?: CodeableConcept,
		subject?: Reference,
		action?: CodeableConcept[],
		actionReason?: CodeableConcept[],
		actor?: ContractTermActor[],
		text?: string,
		_text?: Element,
		valuedItem?: ContractTermValuedItem[],
		group?: ContractTerm[]
	}

	declare interface ContractTermActor {
		entity: Reference,
		role?: CodeableConcept[]
	}

	declare interface ContractTermValuedItem {
		entityCodeableConcept?: CodeableConcept,
		entityReference?: Reference,
		identifier?: Identifier,
		effectiveTime?: dateTime,
		_effectiveTime?: Element,
		quantity?: Quantity,
		unitPrice?: Quantity,
		factor?: decimal,
		_factor?: Element,
		points?: decimal,
		_points?: Element,
		net?: Quantity
	}

	declare interface CompositionAttester {
		mode: code[],
		_mode?: Element[],
		time?: dateTime,
		_time?: Element,
		party?: Reference
	}

	declare interface CompositionEvent {
		code?: CodeableConcept[],
		period?: Period,
		detail?: Reference[]
	}

	declare interface CompositionSection {
		title?: string,
		_title?: Element,
		code?: CodeableConcept,
		text?: Narrative,
		mode?: code,
		_mode?: Element,
		orderedBy?: CodeableConcept,
		entry?: Reference[],
		emptyReason?: CodeableConcept,
		section?: CompositionSection[]
	}

	declare interface Composition {
		identifier?: Identifier,
		date: dateTime,
		_date?: Element,
		type: CodeableConcept,
		class?: CodeableConcept,
		title: string,
		_title?: Element,
		status: code,
		_status?: Element,
		confidentiality?: code,
		_confidentiality?: Element,
		subject: Reference,
		author: Reference[],
		attester?: CompositionAttester[],
		custodian?: Reference,
		event?: CompositionEvent[],
		encounter?: Reference,
		section?: CompositionSection[]
	}

	declare interface ContractFriendly {
		contentAttachment?: Attachment,
		contentReference?: Reference
	}

	declare interface ContractLegal {
		contentAttachment?: Attachment,
		contentReference?: Reference
	}

	declare interface ContractRule {
		contentAttachment?: Attachment,
		contentReference?: Reference
	}

	declare interface Contract {
		identifier?: Identifier,
		issued?: dateTime,
		_issued?: Element,
		applies?: Period,
		subject?: Reference[],
		authority?: Reference[],
		domain?: Reference[],
		type?: CodeableConcept,
		subType?: CodeableConcept[],
		action?: CodeableConcept[],
		actionReason?: CodeableConcept[],
		actor?: ContractActor[],
		valuedItem?: ContractValuedItem[],
		signer?: ContractSigner[],
		term?: ContractTerm[],
		bindingAttachment?: Attachment,
		bindingReference?: Reference,
		friendly?: ContractFriendly[],
		legal?: ContractLegal[],
		rule?: ContractRule[]
	}

	declare interface Coverage {
		issuer?: Reference,
		bin?: Identifier,
		period?: Period,
		type?: Coding,
		subscriberId?: Identifier,
		identifier?: Identifier[],
		group?: string,
		_group?: Element,
		plan?: string,
		_plan?: Element,
		subPlan?: string,
		_subPlan?: Element,
		dependent?: positiveInt,
		_dependent?: Element,
		sequence?: positiveInt,
		_sequence?: Element,
		subscriber?: Reference,
		network?: Identifier,
		contract?: Reference[]
	}

	declare interface ClaimResponseItem {
		sequenceLinkId: positiveInt,
		_sequenceLinkId?: Element,
		noteNumber?: positiveInt[],
		_noteNumber?: Element[],
		adjudication?: ClaimResponseItemAdjudication[],
		detail?: ClaimResponseItemDetail[]
	}

	declare interface ClaimResponseItemAdjudication {
		code: Coding,
		amount?: Quantity,
		value?: decimal,
		_value?: Element
	}

	declare interface ClaimResponseItemDetail {
		sequenceLinkId: positiveInt,
		_sequenceLinkId?: Element,
		adjudication?: ClaimResponseItemDetailAdjudication[],
		subDetail?: ClaimResponseItemDetailSubDetail[]
	}

	declare interface ClaimResponseItemDetailAdjudication {
		code: Coding,
		amount?: Quantity,
		value?: decimal,
		_value?: Element
	}

	declare interface ClaimResponseItemDetailSubDetail {
		sequenceLinkId: positiveInt,
		_sequenceLinkId?: Element,
		adjudication?: ClaimResponseItemDetailSubDetailAdjudication[]
	}

	declare interface ClaimResponseItemDetailSubDetailAdjudication {
		code: Coding,
		amount?: Quantity,
		value?: decimal,
		_value?: Element
	}

	declare interface ClaimResponseAddItem {
		sequenceLinkId?: positiveInt[],
		_sequenceLinkId?: Element[],
		service: Coding,
		fee?: Quantity,
		noteNumberLinkId?: positiveInt[],
		_noteNumberLinkId?: Element[],
		adjudication?: ClaimResponseAddItemAdjudication[],
		detail?: ClaimResponseAddItemDetail[]
	}

	declare interface ClaimResponseAddItemAdjudication {
		code: Coding,
		amount?: Quantity,
		value?: decimal,
		_value?: Element
	}

	declare interface ClaimResponseAddItemDetail {
		service: Coding,
		fee?: Quantity,
		adjudication?: ClaimResponseAddItemDetailAdjudication[]
	}

	declare interface ClaimResponseAddItemDetailAdjudication {
		code: Coding,
		amount?: Quantity,
		value?: decimal,
		_value?: Element
	}

	declare interface ClaimResponseError {
		sequenceLinkId?: positiveInt,
		_sequenceLinkId?: Element,
		detailSequenceLinkId?: positiveInt,
		_detailSequenceLinkId?: Element,
		subdetailSequenceLinkId?: positiveInt,
		_subdetailSequenceLinkId?: Element,
		code: Coding
	}

	declare interface ClaimResponseNote {
		number?: positiveInt,
		_number?: Element,
		type?: Coding,
		text?: string,
		_text?: Element
	}

	declare interface ClaimResponseCoverage {
		sequence: positiveInt,
		_sequence?: Element,
		focal: boolean,
		_focal?: Element,
		coverage: Reference,
		businessArrangement?: string,
		_businessArrangement?: Element,
		relationship: Coding,
		preAuthRef?: string[],
		_preAuthRef?: Element[],
		claimResponse?: Reference,
		originalRuleset?: Coding
	}

	declare interface ClaimResponse {
		identifier?: Identifier[],
		request?: Reference,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference,
		outcome?: code,
		_outcome?: Element,
		disposition?: string,
		_disposition?: Element,
		payeeType?: Coding,
		item?: ClaimResponseItem[],
		addItem?: ClaimResponseAddItem[],
		error?: ClaimResponseError[],
		totalCost?: Quantity,
		unallocDeductable?: Quantity,
		totalBenefit?: Quantity,
		paymentAdjustment?: Quantity,
		paymentAdjustmentReason?: Coding,
		paymentDate?: date,
		_paymentDate?: Element,
		paymentAmount?: Quantity,
		paymentRef?: Identifier,
		reserved?: Coding,
		form?: Coding,
		note?: ClaimResponseNote[],
		coverage?: ClaimResponseCoverage[]
	}

	declare interface ClaimItem {
		sequence: positiveInt,
		_sequence?: Element,
		type: Coding,
		provider?: Reference,
		diagnosisLinkId?: positiveInt[],
		_diagnosisLinkId?: Element[],
		service: Coding,
		serviceDate?: date,
		_serviceDate?: Element,
		quantity?: Quantity,
		unitPrice?: Quantity,
		factor?: decimal,
		_factor?: Element,
		points?: decimal,
		_points?: Element,
		net?: Quantity,
		udi?: Coding,
		bodySite?: Coding,
		subSite?: Coding[],
		modifier?: Coding[],
		detail?: ClaimItemDetail[],
		prosthesis?: ClaimItemProsthesis
	}

	declare interface ClaimItemDetail {
		sequence: positiveInt,
		_sequence?: Element,
		type: Coding,
		service: Coding,
		quantity?: Quantity,
		unitPrice?: Quantity,
		factor?: decimal,
		_factor?: Element,
		points?: decimal,
		_points?: Element,
		net?: Quantity,
		udi?: Coding,
		subDetail?: ClaimItemDetailSubDetail[]
	}

	declare interface ClaimItemDetailSubDetail {
		sequence: positiveInt,
		_sequence?: Element,
		type: Coding,
		service: Coding,
		quantity?: Quantity,
		unitPrice?: Quantity,
		factor?: decimal,
		_factor?: Element,
		points?: decimal,
		_points?: Element,
		net?: Quantity,
		udi?: Coding
	}

	declare interface ClaimItemProsthesis {
		initial?: boolean,
		_initial?: Element,
		priorDate?: date,
		_priorDate?: Element,
		priorMaterial?: Coding
	}

	declare interface ClaimMissingTeeth {
		tooth: Coding,
		reason?: Coding,
		extractionDate?: date,
		_extractionDate?: Element
	}

	declare interface Claim {
		type: code,
		_type?: Element,
		identifier?: Identifier[],
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		target?: Reference,
		provider?: Reference,
		organization?: Reference,
		use?: code,
		_use?: Element,
		priority?: Coding,
		fundsReserve?: Coding,
		enterer?: Reference,
		facility?: Reference,
		prescription?: Reference,
		originalPrescription?: Reference,
		payee?: ClaimPayee,
		referral?: Reference,
		diagnosis?: ClaimDiagnosis[],
		condition?: Coding[],
		patient: Reference,
		coverage?: ClaimCoverage[],
		exception?: Coding[],
		school?: string,
		_school?: Element,
		accident?: date,
		_accident?: Element,
		accidentType?: Coding,
		interventionException?: Coding[],
		item?: ClaimItem[],
		additionalMaterials?: Coding[],
		missingTeeth?: ClaimMissingTeeth[]
	}

	declare interface CommunicationPayload {
		contentString?: string,
		_contentString?: Element,
		contentAttachment?: Attachment,
		contentReference?: Reference
	}

	declare interface Communication {
		identifier?: Identifier[],
		category?: CodeableConcept,
		sender?: Reference,
		recipient?: Reference[],
		payload?: CommunicationPayload[],
		medium?: CodeableConcept[],
		status?: code,
		_status?: Element,
		encounter?: Reference,
		sent?: dateTime,
		_sent?: Element,
		received?: dateTime,
		_received?: Element,
		reason?: CodeableConcept[],
		subject?: Reference,
		requestDetail?: Reference
	}

	declare interface ConceptMapContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface StructureDefinitionContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface StructureDefinitionMapping {
		identity: id,
		_identity?: Element,
		uri?: uri,
		_uri?: Element,
		name?: string,
		_name?: Element,
		comments?: string,
		_comments?: Element
	}

	declare interface StructureDefinitionSnapshot {
		element: ElementDefinition[]
	}

	declare interface ElementDefinitionSlicing {
		discriminator?: string[],
		_discriminator?: Element[],
		description?: string,
		_description?: Element,
		ordered?: boolean,
		_ordered?: Element,
		rules: code,
		_rules?: Element
	}

	declare interface ElementDefinitionBase {
		path: string,
		_path?: Element,
		min: integer,
		_min?: Element,
		max: string,
		_max?: Element
	}

	declare interface ElementDefinitionType {
		code: code,
		_code?: Element,
		profile?: uri[],
		_profile?: Element[],
		aggregation?: code[],
		_aggregation?: Element[]
	}

	declare interface ElementDefinitionConstraint {
		key: id,
		_key?: Element,
		requirements?: string,
		_requirements?: Element,
		severity: code,
		_severity?: Element,
		human: string,
		_human?: Element,
		xpath: string,
		_xpath?: Element
	}

	declare interface ElementDefinitionBinding {
		strength: code,
		_strength?: Element,
		description?: string,
		_description?: Element,
		valueSetUri?: uri,
		_valueSetUri?: Element,
		valueSetReference?: Reference
	}

	declare interface ElementDefinitionMapping {
		identity: id,
		_identity?: Element,
		language?: code,
		_language?: Element,
		map: string,
		_map?: Element
	}

	declare interface ElementDefinition {
		path: string,
		_path?: Element,
		representation?: code[],
		_representation?: Element[],
		name?: string,
		_name?: Element,
		label?: string,
		_label?: Element,
		code?: Coding[],
		slicing?: ElementDefinitionSlicing,
		short?: string,
		_short?: Element,
		definition?: markdown,
		_definition?: Element,
		comments?: markdown,
		_comments?: Element,
		requirements?: markdown,
		_requirements?: Element,
		alias?: string[],
		_alias?: Element[],
		min?: integer,
		_min?: Element,
		max?: string,
		_max?: Element,
		base?: ElementDefinitionBase,
		type?: ElementDefinitionType[],
		nameReference?: string,
		_nameReference?: Element,
		defaultValueBoolean?: boolean,
		_defaultValueBoolean?: Element,
		defaultValueInteger?: integer,
		_defaultValueInteger?: Element,
		defaultValueDecimal?: decimal,
		_defaultValueDecimal?: Element,
		defaultValueBase64Binary?: base64Binary,
		_defaultValueBase64Binary?: Element,
		defaultValueInstant?: instant,
		_defaultValueInstant?: Element,
		defaultValueString?: string,
		_defaultValueString?: Element,
		defaultValueUri?: uri,
		_defaultValueUri?: Element,
		defaultValueDate?: date,
		_defaultValueDate?: Element,
		defaultValueDateTime?: dateTime,
		_defaultValueDateTime?: Element,
		defaultValueTime?: time,
		_defaultValueTime?: Element,
		defaultValueCode?: code,
		_defaultValueCode?: Element,
		defaultValueOid?: oid,
		_defaultValueOid?: Element,
		defaultValueId?: id,
		_defaultValueId?: Element,
		defaultValueUnsignedInt?: unsignedInt,
		_defaultValueUnsignedInt?: Element,
		defaultValuePositiveInt?: positiveInt,
		_defaultValuePositiveInt?: Element,
		defaultValueMarkdown?: markdown,
		_defaultValueMarkdown?: Element,
		defaultValueAnnotation?: Annotation,
		defaultValueAttachment?: Attachment,
		defaultValueIdentifier?: Identifier,
		defaultValueCodeableConcept?: CodeableConcept,
		defaultValueCoding?: Coding,
		defaultValueQuantity?: Quantity,
		defaultValueRange?: Range,
		defaultValuePeriod?: Period,
		defaultValueRatio?: Ratio,
		defaultValueSampledData?: SampledData,
		defaultValueSignature?: Signature,
		defaultValueHumanName?: HumanName,
		defaultValueAddress?: Address,
		defaultValueContactPoint?: ContactPoint,
		defaultValueTiming?: Timing,
		defaultValueReference?: Reference,
		defaultValueMeta?: Meta,
		meaningWhenMissing?: markdown,
		_meaningWhenMissing?: Element,
		fixedBoolean?: boolean,
		_fixedBoolean?: Element,
		fixedInteger?: integer,
		_fixedInteger?: Element,
		fixedDecimal?: decimal,
		_fixedDecimal?: Element,
		fixedBase64Binary?: base64Binary,
		_fixedBase64Binary?: Element,
		fixedInstant?: instant,
		_fixedInstant?: Element,
		fixedString?: string,
		_fixedString?: Element,
		fixedUri?: uri,
		_fixedUri?: Element,
		fixedDate?: date,
		_fixedDate?: Element,
		fixedDateTime?: dateTime,
		_fixedDateTime?: Element,
		fixedTime?: time,
		_fixedTime?: Element,
		fixedCode?: code,
		_fixedCode?: Element,
		fixedOid?: oid,
		_fixedOid?: Element,
		fixedId?: id,
		_fixedId?: Element,
		fixedUnsignedInt?: unsignedInt,
		_fixedUnsignedInt?: Element,
		fixedPositiveInt?: positiveInt,
		_fixedPositiveInt?: Element,
		fixedMarkdown?: markdown,
		_fixedMarkdown?: Element,
		fixedAnnotation?: Annotation,
		fixedAttachment?: Attachment,
		fixedIdentifier?: Identifier,
		fixedCodeableConcept?: CodeableConcept,
		fixedCoding?: Coding,
		fixedQuantity?: Quantity,
		fixedRange?: Range,
		fixedPeriod?: Period,
		fixedRatio?: Ratio,
		fixedSampledData?: SampledData,
		fixedSignature?: Signature,
		fixedHumanName?: HumanName,
		fixedAddress?: Address,
		fixedContactPoint?: ContactPoint,
		fixedTiming?: Timing,
		fixedReference?: Reference,
		fixedMeta?: Meta,
		patternBoolean?: boolean,
		_patternBoolean?: Element,
		patternInteger?: integer,
		_patternInteger?: Element,
		patternDecimal?: decimal,
		_patternDecimal?: Element,
		patternBase64Binary?: base64Binary,
		_patternBase64Binary?: Element,
		patternInstant?: instant,
		_patternInstant?: Element,
		patternString?: string,
		_patternString?: Element,
		patternUri?: uri,
		_patternUri?: Element,
		patternDate?: date,
		_patternDate?: Element,
		patternDateTime?: dateTime,
		_patternDateTime?: Element,
		patternTime?: time,
		_patternTime?: Element,
		patternCode?: code,
		_patternCode?: Element,
		patternOid?: oid,
		_patternOid?: Element,
		patternId?: id,
		_patternId?: Element,
		patternUnsignedInt?: unsignedInt,
		_patternUnsignedInt?: Element,
		patternPositiveInt?: positiveInt,
		_patternPositiveInt?: Element,
		patternMarkdown?: markdown,
		_patternMarkdown?: Element,
		patternAnnotation?: Annotation,
		patternAttachment?: Attachment,
		patternIdentifier?: Identifier,
		patternCodeableConcept?: CodeableConcept,
		patternCoding?: Coding,
		patternQuantity?: Quantity,
		patternRange?: Range,
		patternPeriod?: Period,
		patternRatio?: Ratio,
		patternSampledData?: SampledData,
		patternSignature?: Signature,
		patternHumanName?: HumanName,
		patternAddress?: Address,
		patternContactPoint?: ContactPoint,
		patternTiming?: Timing,
		patternReference?: Reference,
		patternMeta?: Meta,
		exampleBoolean?: boolean,
		_exampleBoolean?: Element,
		exampleInteger?: integer,
		_exampleInteger?: Element,
		exampleDecimal?: decimal,
		_exampleDecimal?: Element,
		exampleBase64Binary?: base64Binary,
		_exampleBase64Binary?: Element,
		exampleInstant?: instant,
		_exampleInstant?: Element,
		exampleString?: string,
		_exampleString?: Element,
		exampleUri?: uri,
		_exampleUri?: Element,
		exampleDate?: date,
		_exampleDate?: Element,
		exampleDateTime?: dateTime,
		_exampleDateTime?: Element,
		exampleTime?: time,
		_exampleTime?: Element,
		exampleCode?: code,
		_exampleCode?: Element,
		exampleOid?: oid,
		_exampleOid?: Element,
		exampleId?: id,
		_exampleId?: Element,
		exampleUnsignedInt?: unsignedInt,
		_exampleUnsignedInt?: Element,
		examplePositiveInt?: positiveInt,
		_examplePositiveInt?: Element,
		exampleMarkdown?: markdown,
		_exampleMarkdown?: Element,
		exampleAnnotation?: Annotation,
		exampleAttachment?: Attachment,
		exampleIdentifier?: Identifier,
		exampleCodeableConcept?: CodeableConcept,
		exampleCoding?: Coding,
		exampleQuantity?: Quantity,
		exampleRange?: Range,
		examplePeriod?: Period,
		exampleRatio?: Ratio,
		exampleSampledData?: SampledData,
		exampleSignature?: Signature,
		exampleHumanName?: HumanName,
		exampleAddress?: Address,
		exampleContactPoint?: ContactPoint,
		exampleTiming?: Timing,
		exampleReference?: Reference,
		exampleMeta?: Meta,
		minValueBoolean?: boolean,
		_minValueBoolean?: Element,
		minValueInteger?: integer,
		_minValueInteger?: Element,
		minValueDecimal?: decimal,
		_minValueDecimal?: Element,
		minValueBase64Binary?: base64Binary,
		_minValueBase64Binary?: Element,
		minValueInstant?: instant,
		_minValueInstant?: Element,
		minValueString?: string,
		_minValueString?: Element,
		minValueUri?: uri,
		_minValueUri?: Element,
		minValueDate?: date,
		_minValueDate?: Element,
		minValueDateTime?: dateTime,
		_minValueDateTime?: Element,
		minValueTime?: time,
		_minValueTime?: Element,
		minValueCode?: code,
		_minValueCode?: Element,
		minValueOid?: oid,
		_minValueOid?: Element,
		minValueId?: id,
		_minValueId?: Element,
		minValueUnsignedInt?: unsignedInt,
		_minValueUnsignedInt?: Element,
		minValuePositiveInt?: positiveInt,
		_minValuePositiveInt?: Element,
		minValueMarkdown?: markdown,
		_minValueMarkdown?: Element,
		minValueAnnotation?: Annotation,
		minValueAttachment?: Attachment,
		minValueIdentifier?: Identifier,
		minValueCodeableConcept?: CodeableConcept,
		minValueCoding?: Coding,
		minValueQuantity?: Quantity,
		minValueRange?: Range,
		minValuePeriod?: Period,
		minValueRatio?: Ratio,
		minValueSampledData?: SampledData,
		minValueSignature?: Signature,
		minValueHumanName?: HumanName,
		minValueAddress?: Address,
		minValueContactPoint?: ContactPoint,
		minValueTiming?: Timing,
		minValueReference?: Reference,
		minValueMeta?: Meta,
		maxValueBoolean?: boolean,
		_maxValueBoolean?: Element,
		maxValueInteger?: integer,
		_maxValueInteger?: Element,
		maxValueDecimal?: decimal,
		_maxValueDecimal?: Element,
		maxValueBase64Binary?: base64Binary,
		_maxValueBase64Binary?: Element,
		maxValueInstant?: instant,
		_maxValueInstant?: Element,
		maxValueString?: string,
		_maxValueString?: Element,
		maxValueUri?: uri,
		_maxValueUri?: Element,
		maxValueDate?: date,
		_maxValueDate?: Element,
		maxValueDateTime?: dateTime,
		_maxValueDateTime?: Element,
		maxValueTime?: time,
		_maxValueTime?: Element,
		maxValueCode?: code,
		_maxValueCode?: Element,
		maxValueOid?: oid,
		_maxValueOid?: Element,
		maxValueId?: id,
		_maxValueId?: Element,
		maxValueUnsignedInt?: unsignedInt,
		_maxValueUnsignedInt?: Element,
		maxValuePositiveInt?: positiveInt,
		_maxValuePositiveInt?: Element,
		maxValueMarkdown?: markdown,
		_maxValueMarkdown?: Element,
		maxValueAnnotation?: Annotation,
		maxValueAttachment?: Attachment,
		maxValueIdentifier?: Identifier,
		maxValueCodeableConcept?: CodeableConcept,
		maxValueCoding?: Coding,
		maxValueQuantity?: Quantity,
		maxValueRange?: Range,
		maxValuePeriod?: Period,
		maxValueRatio?: Ratio,
		maxValueSampledData?: SampledData,
		maxValueSignature?: Signature,
		maxValueHumanName?: HumanName,
		maxValueAddress?: Address,
		maxValueContactPoint?: ContactPoint,
		maxValueTiming?: Timing,
		maxValueReference?: Reference,
		maxValueMeta?: Meta,
		maxLength?: integer,
		_maxLength?: Element,
		condition?: id[],
		_condition?: Element[],
		constraint?: ElementDefinitionConstraint[],
		mustSupport?: boolean,
		_mustSupport?: Element,
		isModifier?: boolean,
		_isModifier?: Element,
		isSummary?: boolean,
		_isSummary?: Element,
		binding?: ElementDefinitionBinding,
		mapping?: ElementDefinitionMapping[]
	}

	declare interface StructureDefinitionDifferential {
		element: ElementDefinition[]
	}

	declare interface StructureDefinition {
		url: uri,
		_url?: Element,
		identifier?: Identifier[],
		version?: string,
		_version?: Element,
		name: string,
		_name?: Element,
		display?: string,
		_display?: Element,
		status: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: StructureDefinitionContact[],
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		requirements?: string,
		_requirements?: Element,
		copyright?: string,
		_copyright?: Element,
		code?: Coding[],
		fhirVersion?: id,
		_fhirVersion?: Element,
		mapping?: StructureDefinitionMapping[],
		kind: code,
		_kind?: Element,
		constrainedType?: code,
		_constrainedType?: Element,
		abstract: boolean,
		_abstract?: Element,
		contextType?: code,
		_contextType?: Element,
		context?: string[],
		_context?: Element[],
		base?: uri,
		_base?: Element,
		snapshot?: StructureDefinitionSnapshot,
		differential?: StructureDefinitionDifferential
	}

	declare interface ConceptMapElement {
		codeSystem?: uri,
		_codeSystem?: Element,
		code?: code,
		_code?: Element,
		target?: ConceptMapElementTarget[]
	}

	declare interface ConceptMapElementTarget {
		codeSystem?: uri,
		_codeSystem?: Element,
		code?: code,
		_code?: Element,
		equivalence: code,
		_equivalence?: Element,
		comments?: string,
		_comments?: Element,
		dependsOn?: ConceptMapElementTargetDependsOn[],
		product?: ConceptMapElementTargetDependsOn[]
	}

	declare interface ConceptMapElementTargetDependsOn {
		element: uri,
		_element?: Element,
		codeSystem: uri,
		_codeSystem?: Element,
		code: string,
		_code?: Element
	}

	declare interface ConceptMap {
		url?: uri,
		_url?: Element,
		identifier?: Identifier,
		version?: string,
		_version?: Element,
		name?: string,
		_name?: Element,
		status: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: ConceptMapContact[],
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		requirements?: string,
		_requirements?: Element,
		copyright?: string,
		_copyright?: Element,
		sourceUri?: uri,
		_sourceUri?: Element,
		sourceReference?: Reference,
		targetUri?: uri,
		_targetUri?: Element,
		targetReference?: Reference,
		element?: ConceptMapElement[]
	}

	declare interface ConformanceContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface ConformanceSoftware {
		name: string,
		_name?: Element,
		version?: string,
		_version?: Element,
		releaseDate?: dateTime,
		_releaseDate?: Element
	}

	declare interface ConformanceImplementation {
		description: string,
		_description?: Element,
		url?: uri,
		_url?: Element
	}

	declare interface ConformanceRest {
		mode: code,
		_mode?: Element,
		documentation?: string,
		_documentation?: Element,
		security?: ConformanceRestSecurity,
		resource: ConformanceRestResource[],
		interaction?: ConformanceRestInteraction[],
		transactionMode?: code,
		_transactionMode?: Element,
		searchParam?: ConformanceRestResourceSearchParam[],
		operation?: ConformanceRestOperation[],
		compartment?: uri[],
		_compartment?: Element[]
	}

	declare interface ConformanceRestSecurity {
		cors?: boolean,
		_cors?: Element,
		service?: CodeableConcept[],
		description?: string,
		_description?: Element,
		certificate?: ConformanceRestSecurityCertificate[]
	}

	declare interface ConformanceRestSecurityCertificate {
		type?: code,
		_type?: Element,
		blob?: base64Binary,
		_blob?: Element
	}

	declare interface ConformanceRestResource {
		type: code,
		_type?: Element,
		profile?: Reference,
		interaction: ConformanceRestResourceInteraction[],
		versioning?: code,
		_versioning?: Element,
		readHistory?: boolean,
		_readHistory?: Element,
		updateCreate?: boolean,
		_updateCreate?: Element,
		conditionalCreate?: boolean,
		_conditionalCreate?: Element,
		conditionalUpdate?: boolean,
		_conditionalUpdate?: Element,
		conditionalDelete?: code,
		_conditionalDelete?: Element,
		searchInclude?: string[],
		_searchInclude?: Element[],
		searchRevInclude?: string[],
		_searchRevInclude?: Element[],
		searchParam?: ConformanceRestResourceSearchParam[]
	}

	declare interface ConformanceRestResourceInteraction {
		code: code,
		_code?: Element,
		documentation?: string,
		_documentation?: Element
	}

	declare interface ConformanceRestResourceSearchParam {
		name: string,
		_name?: Element,
		definition?: uri,
		_definition?: Element,
		type: code,
		_type?: Element,
		documentation?: string,
		_documentation?: Element,
		target?: code[],
		_target?: Element[],
		modifier?: code[],
		_modifier?: Element[],
		chain?: string[],
		_chain?: Element[]
	}

	declare interface ConformanceRestInteraction {
		code: code,
		_code?: Element,
		documentation?: string,
		_documentation?: Element
	}

	declare interface ConformanceRestOperation {
		name: string,
		_name?: Element,
		definition: Reference
	}

	declare interface OperationDefinitionContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface OperationDefinitionParameter {
		name: code,
		_name?: Element,
		use: code,
		_use?: Element,
		min: integer,
		_min?: Element,
		max: string,
		_max?: Element,
		documentation?: string,
		_documentation?: Element,
		type?: code,
		_type?: Element,
		profile?: Reference,
		binding?: OperationDefinitionParameterBinding,
		part?: OperationDefinitionParameter[]
	}

	declare interface OperationDefinitionParameterBinding {
		strength: code,
		_strength?: Element,
		valueSetUri?: uri,
		_valueSetUri?: Element,
		valueSetReference?: Reference
	}

	declare interface OperationDefinition {
		url?: uri,
		_url?: Element,
		version?: string,
		_version?: Element,
		name: string,
		_name?: Element,
		status: code,
		_status?: Element,
		kind: code,
		_kind?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: OperationDefinitionContact[],
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		requirements?: string,
		_requirements?: Element,
		idempotent?: boolean,
		_idempotent?: Element,
		code: code,
		_code?: Element,
		notes?: string,
		_notes?: Element,
		base?: Reference,
		system: boolean,
		_system?: Element,
		type?: code[],
		_type?: Element[],
		instance: boolean,
		_instance?: Element,
		parameter?: OperationDefinitionParameter[]
	}

	declare interface ConformanceMessaging {
		endpoint?: ConformanceMessagingEndpoint[],
		reliableCache?: unsignedInt,
		_reliableCache?: Element,
		documentation?: string,
		_documentation?: Element,
		event: ConformanceMessagingEvent[]
	}

	declare interface ConformanceMessagingEndpoint {
		protocol: Coding,
		address: uri,
		_address?: Element
	}

	declare interface ConformanceMessagingEvent {
		code: Coding,
		category?: code,
		_category?: Element,
		mode: code,
		_mode?: Element,
		focus: code,
		_focus?: Element,
		request: Reference,
		response: Reference,
		documentation?: string,
		_documentation?: Element
	}

	declare interface ConformanceDocument {
		mode: code,
		_mode?: Element,
		documentation?: string,
		_documentation?: Element,
		profile: Reference
	}

	declare interface Conformance {
		url?: uri,
		_url?: Element,
		version?: string,
		_version?: Element,
		name?: string,
		_name?: Element,
		status?: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: ConformanceContact[],
		date: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		requirements?: string,
		_requirements?: Element,
		copyright?: string,
		_copyright?: Element,
		kind: code,
		_kind?: Element,
		software?: ConformanceSoftware,
		implementation?: ConformanceImplementation,
		fhirVersion: id,
		_fhirVersion?: Element,
		acceptUnknown: code,
		_acceptUnknown?: Element,
		format: code[],
		_format?: Element[],
		profile?: Reference[],
		rest?: ConformanceRest[],
		messaging?: ConformanceMessaging[],
		document?: ConformanceDocument[]
	}

	declare interface DataElementContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface DataElementMapping {
		identity: id,
		_identity?: Element,
		uri?: uri,
		_uri?: Element,
		name?: string,
		_name?: Element,
		comments?: string,
		_comments?: Element
	}

	declare interface DataElement {
		url?: uri,
		_url?: Element,
		identifier?: Identifier[],
		version?: string,
		_version?: Element,
		name?: string,
		_name?: Element,
		status: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: DataElementContact[],
		date?: dateTime,
		_date?: Element,
		useContext?: CodeableConcept[],
		copyright?: string,
		_copyright?: Element,
		stringency?: code,
		_stringency?: Element,
		mapping?: DataElementMapping[],
		element: ElementDefinition[]
	}

	declare interface DetectedIssueMitigation {
		action: CodeableConcept,
		date?: dateTime,
		_date?: Element,
		author?: Reference
	}

	declare interface DetectedIssue {
		patient?: Reference,
		category?: CodeableConcept,
		severity?: code,
		_severity?: Element,
		implicated?: Reference[],
		detail?: string,
		_detail?: Element,
		date?: dateTime,
		_date?: Element,
		author?: Reference,
		identifier?: Identifier,
		reference?: uri,
		_reference?: Element,
		mitigation?: DetectedIssueMitigation[]
	}

	declare interface DeviceUseStatement {
		bodySiteCodeableConcept?: CodeableConcept,
		bodySiteReference?: Reference,
		whenUsed?: Period,
		device: Reference,
		identifier?: Identifier[],
		indication?: CodeableConcept[],
		notes?: string[],
		_notes?: Element[],
		recordedOn?: dateTime,
		_recordedOn?: Element,
		subject: Reference,
		timingTiming?: Timing,
		timingPeriod?: Period,
		timingDateTime?: dateTime,
		_timingDateTime?: Element
	}

	declare interface DocumentManifestContent {
		pAttachment?: Attachment,
		pReference?: Reference
	}

	declare interface DocumentManifestRelated {
		identifier?: Identifier,
		ref?: Reference
	}

	declare interface DocumentManifest {
		masterIdentifier?: Identifier,
		identifier?: Identifier[],
		subject?: Reference,
		recipient?: Reference[],
		type?: CodeableConcept,
		author?: Reference[],
		created?: dateTime,
		_created?: Element,
		source?: uri,
		_source?: Element,
		status: code,
		_status?: Element,
		description?: string,
		_description?: Element,
		content: DocumentManifestContent[],
		related?: DocumentManifestRelated[]
	}

	declare interface EligibilityRequest {
		identifier?: Identifier[],
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		target?: Reference,
		provider?: Reference,
		organization?: Reference
	}

	declare interface EligibilityResponse {
		identifier?: Identifier[],
		request?: Reference,
		outcome?: code,
		_outcome?: Element,
		disposition?: string,
		_disposition?: Element,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference
	}

	declare interface EnrollmentRequest {
		identifier?: Identifier[],
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		target?: Reference,
		provider?: Reference,
		organization?: Reference,
		subject: Reference,
		coverage: Reference,
		relationship: Coding
	}

	declare interface EnrollmentResponse {
		identifier?: Identifier[],
		request?: Reference,
		outcome?: code,
		_outcome?: Element,
		disposition?: string,
		_disposition?: Element,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference
	}

	declare interface ExplanationOfBenefit {
		identifier?: Identifier[],
		request?: Reference,
		outcome?: code,
		_outcome?: Element,
		disposition?: string,
		_disposition?: Element,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference
	}

	declare interface Flag {
		identifier?: Identifier[],
		category?: CodeableConcept,
		status: code,
		_status?: Element,
		period?: Period,
		subject: Reference,
		encounter?: Reference,
		author?: Reference,
		code: CodeableConcept
	}

	declare interface ImmunizationExplanation {
		reason?: CodeableConcept[],
		reasonNotGiven?: CodeableConcept[]
	}

	declare interface ImmunizationReaction {
		date?: dateTime,
		_date?: Element,
		detail?: Reference,
		reported?: boolean,
		_reported?: Element
	}

	declare interface ImmunizationVaccinationProtocol {
		doseSequence: positiveInt,
		_doseSequence?: Element,
		description?: string,
		_description?: Element,
		authority?: Reference,
		series?: string,
		_series?: Element,
		seriesDoses?: positiveInt,
		_seriesDoses?: Element,
		targetDisease: CodeableConcept[],
		doseStatus: CodeableConcept,
		doseStatusReason?: CodeableConcept
	}

	declare interface Immunization {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		date?: dateTime,
		_date?: Element,
		vaccineCode: CodeableConcept,
		patient: Reference,
		wasNotGiven: boolean,
		_wasNotGiven?: Element,
		reported: boolean,
		_reported?: Element,
		performer?: Reference,
		requester?: Reference,
		encounter?: Reference,
		manufacturer?: Reference,
		location?: Reference,
		lotNumber?: string,
		_lotNumber?: Element,
		expirationDate?: date,
		_expirationDate?: Element,
		site?: CodeableConcept,
		route?: CodeableConcept,
		doseQuantity?: Quantity,
		note?: Annotation[],
		explanation?: ImmunizationExplanation,
		reaction?: ImmunizationReaction[],
		vaccinationProtocol?: ImmunizationVaccinationProtocol[]
	}

	declare interface ImmunizationRecommendationRecommendation {
		date: dateTime,
		_date?: Element,
		vaccineCode: CodeableConcept,
		doseNumber?: positiveInt,
		_doseNumber?: Element,
		forecastStatus: CodeableConcept,
		dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[],
		protocol?: ImmunizationRecommendationRecommendationProtocol,
		supportingImmunization?: Reference[],
		supportingPatientInformation?: Reference[]
	}

	declare interface ImmunizationRecommendationRecommendationDateCriterion {
		code: CodeableConcept,
		value: dateTime,
		_value?: Element
	}

	declare interface ImmunizationRecommendationRecommendationProtocol {
		doseSequence?: integer,
		_doseSequence?: Element,
		description?: string,
		_description?: Element,
		authority?: Reference,
		series?: string,
		_series?: Element
	}

	declare interface ImmunizationRecommendation {
		identifier?: Identifier[],
		patient: Reference,
		recommendation: ImmunizationRecommendationRecommendation[]
	}

	declare interface ImplementationGuideContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface ImplementationGuideDependency {
		type: code,
		_type?: Element,
		uri: uri,
		_uri?: Element
	}

	declare interface ImplementationGuidePackage {
		name: string,
		_name?: Element,
		description?: string,
		_description?: Element,
		resource: ImplementationGuidePackageResource[]
	}

	declare interface ImplementationGuidePackageResource {
		purpose: code,
		_purpose?: Element,
		name?: string,
		_name?: Element,
		description?: string,
		_description?: Element,
		acronym?: string,
		_acronym?: Element,
		sourceUri?: uri,
		_sourceUri?: Element,
		sourceReference?: Reference,
		exampleFor?: Reference
	}

	declare interface ImplementationGuideGlobal {
		type: code,
		_type?: Element,
		profile: Reference
	}

	declare interface ImplementationGuidePage {
		source: uri,
		_source?: Element,
		name: string,
		_name?: Element,
		kind: code,
		_kind?: Element,
		type?: code[],
		_type?: Element[],
		package?: string[],
		_package?: Element[],
		format?: code,
		_format?: Element,
		page?: ImplementationGuidePage[]
	}

	declare interface ImplementationGuide {
		url: uri,
		_url?: Element,
		version?: string,
		_version?: Element,
		name: string,
		_name?: Element,
		status: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: ImplementationGuideContact[],
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		copyright?: string,
		_copyright?: Element,
		fhirVersion?: id,
		_fhirVersion?: Element,
		dependency?: ImplementationGuideDependency[],
		package: ImplementationGuidePackage[],
		global?: ImplementationGuideGlobal[],
		binary?: uri[],
		_binary?: Element[],
		page: ImplementationGuidePage
	}

	declare interface ListEntry {
		flag?: CodeableConcept,
		deleted?: boolean,
		_deleted?: Element,
		date?: dateTime,
		_date?: Element,
		item: Reference
	}

	declare interface List {
		identifier?: Identifier[],
		title?: string,
		_title?: Element,
		code?: CodeableConcept,
		subject?: Reference,
		source?: Reference,
		encounter?: Reference,
		status: code,
		_status?: Element,
		date?: dateTime,
		_date?: Element,
		orderedBy?: CodeableConcept,
		mode: code,
		_mode?: Element,
		note?: string,
		_note?: Element,
		entry?: ListEntry[],
		emptyReason?: CodeableConcept
	}

	declare interface MedicationAdministrationDosage {
		text?: string,
		_text?: Element,
		siteCodeableConcept?: CodeableConcept,
		siteReference?: Reference,
		route?: CodeableConcept,
		method?: CodeableConcept,
		quantity?: Quantity,
		rateRatio?: Ratio,
		rateRange?: Range
	}

	declare interface MedicationAdministration {
		identifier?: Identifier[],
		status: code,
		_status?: Element,
		patient: Reference,
		practitioner?: Reference,
		encounter?: Reference,
		prescription?: Reference,
		wasNotGiven?: boolean,
		_wasNotGiven?: Element,
		reasonNotGiven?: CodeableConcept[],
		reasonGiven?: CodeableConcept[],
		effectiveTimeDateTime?: dateTime,
		_effectiveTimeDateTime?: Element,
		effectiveTimePeriod?: Period,
		medicationCodeableConcept?: CodeableConcept,
		medicationReference?: Reference,
		device?: Reference[],
		note?: string,
		_note?: Element,
		dosage?: MedicationAdministrationDosage
	}

	declare interface MedicationDispenseDosageInstruction {
		text?: string,
		_text?: Element,
		additionalInstructions?: CodeableConcept,
		timing?: Timing,
		asNeededBoolean?: boolean,
		_asNeededBoolean?: Element,
		asNeededCodeableConcept?: CodeableConcept,
		siteCodeableConcept?: CodeableConcept,
		siteReference?: Reference,
		route?: CodeableConcept,
		method?: CodeableConcept,
		doseRange?: Range,
		doseQuantity?: Quantity,
		rateRatio?: Ratio,
		rateRange?: Range,
		maxDosePerPeriod?: Ratio
	}

	declare interface MedicationDispenseSubstitution {
		type: CodeableConcept,
		reason?: CodeableConcept[],
		responsibleParty?: Reference[]
	}

	declare interface MedicationDispense {
		identifier?: Identifier,
		status?: code,
		_status?: Element,
		patient?: Reference,
		dispenser?: Reference,
		authorizingPrescription?: Reference[],
		type?: CodeableConcept,
		quantity?: Quantity,
		daysSupply?: Quantity,
		medicationCodeableConcept?: CodeableConcept,
		medicationReference?: Reference,
		whenPrepared?: dateTime,
		_whenPrepared?: Element,
		whenHandedOver?: dateTime,
		_whenHandedOver?: Element,
		destination?: Reference,
		receiver?: Reference[],
		note?: string,
		_note?: Element,
		dosageInstruction?: MedicationDispenseDosageInstruction[],
		substitution?: MedicationDispenseSubstitution
	}

	declare interface MessageHeaderResponse {
		identifier: id,
		_identifier?: Element,
		code: code,
		_code?: Element,
		details?: Reference
	}

	declare interface OperationOutcomeIssue {
		severity: code,
		_severity?: Element,
		code: code,
		_code?: Element,
		details?: CodeableConcept,
		diagnostics?: string,
		_diagnostics?: Element,
		location?: string[],
		_location?: Element[]
	}

	declare interface OperationOutcome {
		issue: OperationOutcomeIssue[]
	}

	declare interface MessageHeaderSource {
		name?: string,
		_name?: Element,
		software?: string,
		_software?: Element,
		version?: string,
		_version?: Element,
		contact?: ContactPoint,
		endpoint: uri,
		_endpoint?: Element
	}

	declare interface MessageHeaderDestination {
		name?: string,
		_name?: Element,
		target?: Reference,
		endpoint: uri,
		_endpoint?: Element
	}

	declare interface MessageHeader {
		timestamp: instant,
		_timestamp?: Element,
		event: Coding,
		response?: MessageHeaderResponse,
		source: MessageHeaderSource,
		destination?: MessageHeaderDestination[],
		enterer?: Reference,
		author?: Reference,
		receiver?: Reference,
		responsible?: Reference,
		reason?: CodeableConcept,
		data?: Reference[]
	}

	declare interface NamingSystemContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface NamingSystemUniqueId {
		type: code,
		_type?: Element,
		value: string,
		_value?: Element,
		preferred?: boolean,
		_preferred?: Element,
		period?: Period
	}

	declare interface NamingSystem {
		name: string,
		_name?: Element,
		status: code,
		_status?: Element,
		kind: code,
		_kind?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: NamingSystemContact[],
		responsible?: string,
		_responsible?: Element,
		date: dateTime,
		_date?: Element,
		type?: CodeableConcept,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		usage?: string,
		_usage?: Element,
		uniqueId: NamingSystemUniqueId[],
		replacedBy?: Reference
	}

	declare interface OrderResponse {
		identifier?: Identifier[],
		request: Reference,
		date?: dateTime,
		_date?: Element,
		who?: Reference,
		orderStatus: code,
		_orderStatus?: Element,
		description?: string,
		_description?: Element,
		fulfillment?: Reference[]
	}

	declare interface ParametersParameter {
		name: string,
		_name?: Element,
		valueBoolean?: boolean,
		_valueBoolean?: Element,
		valueInteger?: integer,
		_valueInteger?: Element,
		valueDecimal?: decimal,
		_valueDecimal?: Element,
		valueBase64Binary?: base64Binary,
		_valueBase64Binary?: Element,
		valueInstant?: instant,
		_valueInstant?: Element,
		valueString?: string,
		_valueString?: Element,
		valueUri?: uri,
		_valueUri?: Element,
		valueDate?: date,
		_valueDate?: Element,
		valueDateTime?: dateTime,
		_valueDateTime?: Element,
		valueTime?: time,
		_valueTime?: Element,
		valueCode?: code,
		_valueCode?: Element,
		valueOid?: oid,
		_valueOid?: Element,
		valueId?: id,
		_valueId?: Element,
		valueUnsignedInt?: unsignedInt,
		_valueUnsignedInt?: Element,
		valuePositiveInt?: positiveInt,
		_valuePositiveInt?: Element,
		valueMarkdown?: markdown,
		_valueMarkdown?: Element,
		valueAnnotation?: Annotation,
		valueAttachment?: Attachment,
		valueIdentifier?: Identifier,
		valueCodeableConcept?: CodeableConcept,
		valueCoding?: Coding,
		valueQuantity?: Quantity,
		valueRange?: Range,
		valuePeriod?: Period,
		valueRatio?: Ratio,
		valueSampledData?: SampledData,
		valueSignature?: Signature,
		valueHumanName?: HumanName,
		valueAddress?: Address,
		valueContactPoint?: ContactPoint,
		valueTiming?: Timing,
		valueReference?: Reference,
		valueMeta?: Meta,
		resource?: Resource,
		part?: ParametersParameter[]
	}

	declare interface Parameters {
		parameter?: ParametersParameter[]
	}

	declare interface PaymentNotice {
		identifier?: Identifier[],
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		target?: Reference,
		provider?: Reference,
		organization?: Reference,
		request?: Reference,
		response?: Reference,
		paymentStatus: Coding
	}

	declare interface PaymentReconciliationDetail {
		type: Coding,
		request?: Reference,
		responce?: Reference,
		submitter?: Reference,
		payee?: Reference,
		date?: date,
		_date?: Element,
		amount?: Quantity
	}

	declare interface PaymentReconciliationNote {
		type?: Coding,
		text?: string,
		_text?: Element
	}

	declare interface PaymentReconciliation {
		identifier?: Identifier[],
		request?: Reference,
		outcome?: code,
		_outcome?: Element,
		disposition?: string,
		_disposition?: Element,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		period?: Period,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference,
		detail?: PaymentReconciliationDetail[],
		form?: Coding,
		total: Quantity,
		note?: PaymentReconciliationNote[]
	}

	declare interface PersonLink {
		target: Reference,
		assurance?: code,
		_assurance?: Element
	}

	declare interface Person {
		identifier?: Identifier[],
		name?: HumanName[],
		telecom?: ContactPoint[],
		gender?: code,
		_gender?: Element,
		birthDate?: date,
		_birthDate?: Element,
		address?: Address[],
		photo?: Attachment,
		managingOrganization?: Reference,
		active?: boolean,
		_active?: Element,
		link?: PersonLink[]
	}

	declare interface ProcessResponseNotes {
		type?: Coding,
		text?: string,
		_text?: Element
	}

	declare interface ProcessResponse {
		identifier?: Identifier[],
		request?: Reference,
		outcome?: Coding,
		disposition?: string,
		_disposition?: Element,
		ruleset?: Coding,
		originalRuleset?: Coding,
		created?: dateTime,
		_created?: Element,
		organization?: Reference,
		requestProvider?: Reference,
		requestOrganization?: Reference,
		form?: Coding,
		notes?: ProcessResponseNotes[],
		error?: Coding[]
	}

	declare interface ProvenanceAgent {
		role: Coding,
		actor?: Reference,
		userId?: Identifier,
		relatedAgent?: ProvenanceAgentRelatedAgent[]
	}

	declare interface ProvenanceAgentRelatedAgent {
		type: CodeableConcept,
		target: uri,
		_target?: Element
	}

	declare interface ProvenanceEntity {
		role: code,
		_role?: Element,
		type: Coding,
		reference: uri,
		_reference?: Element,
		display?: string,
		_display?: Element,
		agent?: ProvenanceAgent
	}

	declare interface Provenance {
		target: Reference[],
		period?: Period,
		recorded: instant,
		_recorded?: Element,
		reason?: CodeableConcept[],
		activity?: CodeableConcept,
		location?: Reference,
		policy?: uri[],
		_policy?: Element[],
		agent?: ProvenanceAgent[],
		entity?: ProvenanceEntity[],
		signature?: Signature[]
	}

	declare interface SearchParameterContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface SearchParameter {
		url: uri,
		_url?: Element,
		name: string,
		_name?: Element,
		status?: code,
		_status?: Element,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: SearchParameterContact[],
		date?: dateTime,
		_date?: Element,
		requirements?: string,
		_requirements?: Element,
		code: code,
		_code?: Element,
		base: code,
		_base?: Element,
		type: code,
		_type?: Element,
		description: string,
		_description?: Element,
		xpath?: string,
		_xpath?: Element,
		xpathUsage?: code,
		_xpathUsage?: Element,
		target?: code[],
		_target?: Element[]
	}

	declare interface SubscriptionChannel {
		type: code,
		_type?: Element,
		endpoint?: uri,
		_endpoint?: Element,
		payload: string,
		_payload?: Element,
		header?: string,
		_header?: Element
	}

	declare interface Subscription {
		criteria: string,
		_criteria?: Element,
		contact?: ContactPoint[],
		reason: string,
		_reason?: Element,
		status: code,
		_status?: Element,
		error?: string,
		_error?: Element,
		channel: SubscriptionChannel,
		end?: instant,
		_end?: Element,
		tag?: Coding[]
	}

	declare interface SupplyDelivery {
		identifier?: Identifier,
		status?: code,
		_status?: Element,
		patient?: Reference,
		type?: CodeableConcept,
		quantity?: Quantity,
		suppliedItem?: Reference,
		supplier?: Reference,
		whenPrepared?: Period,
		time?: dateTime,
		_time?: Element,
		destination?: Reference,
		receiver?: Reference[]
	}

	declare interface TestScriptContact {
		name?: string,
		_name?: Element,
		telecom?: ContactPoint[]
	}

	declare interface TestScriptMetadata {
		link?: TestScriptMetadataLink[],
		capability: TestScriptMetadataCapability[]
	}

	declare interface TestScriptMetadataLink {
		url: uri,
		_url?: Element,
		description?: string,
		_description?: Element
	}

	declare interface TestScriptMetadataCapability {
		required?: boolean,
		_required?: Element,
		validated?: boolean,
		_validated?: Element,
		description?: string,
		_description?: Element,
		destination?: integer,
		_destination?: Element,
		link?: uri[],
		_link?: Element[],
		conformance: Reference
	}

	declare interface TestScriptFixture {
		autocreate?: boolean,
		_autocreate?: Element,
		autodelete?: boolean,
		_autodelete?: Element,
		resource?: Reference
	}

	declare interface TestScriptVariable {
		name: string,
		_name?: Element,
		headerField?: string,
		_headerField?: Element,
		path?: string,
		_path?: Element,
		sourceId?: id,
		_sourceId?: Element
	}

	declare interface TestScriptSetup {
		metadata?: TestScriptMetadata,
		action: TestScriptSetupAction[]
	}

	declare interface TestScriptSetupAction {
		operation?: TestScriptSetupActionOperation,
		assert?: TestScriptSetupActionAssert
	}

	declare interface TestScriptSetupActionOperation {
		type?: Coding,
		resource?: code,
		_resource?: Element,
		label?: string,
		_label?: Element,
		description?: string,
		_description?: Element,
		accept?: code,
		_accept?: Element,
		contentType?: code,
		_contentType?: Element,
		destination?: integer,
		_destination?: Element,
		encodeRequestUrl?: boolean,
		_encodeRequestUrl?: Element,
		params?: string,
		_params?: Element,
		requestHeader?: TestScriptSetupActionOperationRequestHeader[],
		responseId?: id,
		_responseId?: Element,
		sourceId?: id,
		_sourceId?: Element,
		targetId?: id,
		_targetId?: Element,
		url?: string,
		_url?: Element
	}

	declare interface TestScriptSetupActionOperationRequestHeader {
		field: string,
		_field?: Element,
		value: string,
		_value?: Element
	}

	declare interface TestScriptSetupActionAssert {
		label?: string,
		_label?: Element,
		description?: string,
		_description?: Element,
		direction?: code,
		_direction?: Element,
		compareToSourceId?: string,
		_compareToSourceId?: Element,
		compareToSourcePath?: string,
		_compareToSourcePath?: Element,
		contentType?: code,
		_contentType?: Element,
		headerField?: string,
		_headerField?: Element,
		minimumId?: string,
		_minimumId?: Element,
		navigationLinks?: boolean,
		_navigationLinks?: Element,
		operator?: code,
		_operator?: Element,
		path?: string,
		_path?: Element,
		resource?: code,
		_resource?: Element,
		response?: code,
		_response?: Element,
		responseCode?: string,
		_responseCode?: Element,
		sourceId?: id,
		_sourceId?: Element,
		validateProfileId?: id,
		_validateProfileId?: Element,
		value?: string,
		_value?: Element,
		warningOnly?: boolean,
		_warningOnly?: Element
	}

	declare interface TestScriptTest {
		name?: string,
		_name?: Element,
		description?: string,
		_description?: Element,
		metadata?: TestScriptMetadata,
		action: TestScriptTestAction[]
	}

	declare interface TestScriptTestAction {
		operation?: TestScriptSetupActionOperation,
		assert?: TestScriptSetupActionAssert
	}

	declare interface TestScriptTeardown {
		action: TestScriptTeardownAction[]
	}

	declare interface TestScriptTeardownAction {
		operation?: TestScriptSetupActionOperation
	}

	declare interface TestScript {
		url: uri,
		_url?: Element,
		version?: string,
		_version?: Element,
		name: string,
		_name?: Element,
		status: code,
		_status?: Element,
		identifier?: Identifier,
		experimental?: boolean,
		_experimental?: Element,
		publisher?: string,
		_publisher?: Element,
		contact?: TestScriptContact[],
		date?: dateTime,
		_date?: Element,
		description?: string,
		_description?: Element,
		useContext?: CodeableConcept[],
		requirements?: string,
		_requirements?: Element,
		copyright?: string,
		_copyright?: Element,
		metadata?: TestScriptMetadata,
		multiserver?: boolean,
		_multiserver?: Element,
		fixture?: TestScriptFixture[],
		profile?: Reference[],
		variable?: TestScriptVariable[],
		setup?: TestScriptSetup,
		test?: TestScriptTest[],
		teardown?: TestScriptTeardown
	}

			
}