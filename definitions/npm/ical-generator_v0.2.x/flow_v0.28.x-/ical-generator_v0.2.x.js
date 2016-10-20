declare module 'ical-generator' {
  declare type EventMethod = 'publish'|'request'|'apply'|'add'|'cancel'|'refresh'
  declare type EventStatus = 'confirmed'|'tenative'|'cancelled'
  declare type AttendeeRole = 'req-participant'|'non-participant'
  declare type AttendeeStatus = 'accepted'|'tentaive'|'declined'
  declare type AttendeeType = 'individual'|'group'|'resource'|'room'|'unknown'
  declare type AlarmType = 'audio'|'display'
  declare type CalendarOptions = {
    domain?: string,
    prodId?: string|ProdIdOptions,
    name?: string,
    url?: string,
    timezone?: string,
    ttl?: number,
    events?: Event[]|EventOption[],
  }
  declare type RepeatingOption = {
    freq: string,
    count?: number,
    interval?: number,
    until?: Date,
    byDay?: string[],
    byMonth?: number[],
    byMonthDay?: number[],
  }
  declare type EventOption = {
    alarms?: Alarm[]|AlarmOption[],
    allDay?: bool,
    attendees?: Attendee[]|AttendeeOption[],
    description?: string,
    end?: Date,
    floating?: bool,
    id?: string|number,
    location?: string,
    method?: EventMethod,
    organizer?: string|Organizer,
    repeating?: RepeatingOption,
    sequence?: number,
    start?: Date,
    status?: EventStatus,
    summary?: string,
    timestamp?: Date,
    timezone?: string,
    uid?: string|number,
    url?: ?string,
  }
  declare type AttendeeOption = {
    name?: string,
    email?: string,
    role?: AttendeeRole,
    status?: AttendeeStatus,
    type?: AttendeeType,
  }
  declare type AlarmAttachOption = {
    uri: string,
    mime: string,
  }
  declare type AlarmOption = {
    attach?: string|AlarmAttachOption,
    description?: string,
    interval?: number,
    repeat?: number,
    trigger?: number|Date,
    type?: AlarmType,
  }
  declare type ProdIdOptions = {
    company: string,
    product: string,
    language?: string,
  }
  declare type Attendee = {
    delegatesFrom(attendee: AttendeeOption|Attendee): void;
    delegatesTo(attendee: AttendeeOption|Attendee): void;
    email(email: string): void;
    email(): string;
    name(name: string): void;
    name(): string;
    role(role: AttendeeRole): void;
    role(): AttendeeRole;
    status(status: AttendeeStatus): void;
    status(): AttendeeStatus;
    type(type: AttendeeType): void;
    type(): AttendeeType;
  }
  declare type Alarm = {
    attach(o: string|AlarmAttachOption): void;
    attach(): AlarmAttachOption|string;
    description(desc: string): void;
    description(): string;
    interval(num: number): void;
    interval(): number;
    repeat(num: number): void;
    repeat(): number;
    trigger(trigger: number|Date): void;
    triggerAfter(trigger: number|Date): void;
    triggerBefore(trigger: number|Date): void;
    type(type: AlarmType): void;
    type(): AlarmType;
  }
  declare type Organizer = {
    name: string,
    email: string,
  }
  declare type ProdId = {
    company(company: string): void;
    company(): string;
    product(product: string): void;
    product(): string;
    language(lng: string): void;
    language(): string;
  }
  declare type Calendar = {
    clear(): void;
    createEvent(options?: EventOption): Event;
    domain(domain: string): void;
    domain(): string;
    events(events: Event[]|EventOption[]): void;
    events(): Event[];
    length(): number;
    name(name: string): void;
    name(): string;
    prodId(id: string|ProdId): void;
    prodId(): string;
    save(file: string, cb: Function): void;
    saveSync(file: string): void;
    serve(response: /* httpReponse */ any): void;
    timezone(tz: string): void;
    timezone(): string;
    toJSON(): string;
    toString(): string;
    ttl(ttl: number): void;
    ttl(): number;
    url(url: string): void;
    url(): string;
  }
  declare type Event = {
    alarms(alarms: Alarm[]|AlarmOption[]): void;
    alarms(): Alarm[];
    allDay(allDay: bool): void;
    allDay(): bool;
    attendees(attendees: Attendee[]|AttendeeOption[]): void;
    attendees(): Attendee[];
    createAlarm(options: AlarmOption): Alarm;
    createAttendee(options: string|AttendeeOption): Attendee;
    description(desc: string): void;
    description(): string;
    end(end: Date): void;
    end(): Date;
    floating(floating: bool): void;
    floating(): bool;
    generate(calendar: Calendar): string;
    htmlDescription(htmlDesc: string): void;
    htmlDescription(): string;
    id(id: string|number): void;
    id(): string|number;
    location(l: string): void;
    location(): string;
    method(method: EventMethod): void;
    method(): EventMethod;
    organizer(organizer: string|Organizer): void;
    organizer(): Organizer;
    repeating(rp: RepeatingOption): void;
    repeating(): RepeatingOption;
    sequnce(seq?: number): number;
    sequence(): number;
    start(start: Date): void;
    start(): Date;
    status(status: EventStatus): void;
    status(): EventStatus;
    summary(summary: string): void;
    summary(): string;
    timestamp(ts: Date): void;
    timestamp(): Date;
    timezone(tz: string): void;
    timezone(): string;
    uid(uid: string|number): void;
    uid(): string|number;
    url(url: string): void;
    url(): string;
  }
  declare module.exports: {
    (options?: CalendarOptions): Calendar,
    prodId(options?: ProdIdOptions): ProdId;
  }
}
