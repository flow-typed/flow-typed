declare module '@sendgrid/mail' {

  declare class ResponseError extends Error {
    code: number;
    message: string;
    response: {
      headers: { [key: string]: string; };
      body: string;
    };
  }

  declare interface PersonalizationData {
    to: EmailData | EmailData[],
    cc?: EmailData | EmailData[],
    bcc?: EmailData | EmailData[],
    subject?: string;
    headers?: { [key: string]: string };
    substitutions?: { [key: string]: string };
    customArgs?: { [key: string]: string };
    sendAt?: number;
  }

  declare interface AttachmentData {
    content: string;
    filename: string;
    type?: string;
    disposition?: string;
    contentId?: string;
  }

  declare interface ASMOptions {
    groupId: number;
    groupsToDisplay?: number[];
  }

  declare interface MailSettings {
    bcc?: {
      enable?: boolean;
      email?: string;
    };
    bypassListManagement?: {
      enable?: boolean;
    };
    footer?: {
      enable?: boolean;
      text?: string;
      html?: string;
    };
    sandboxMode?: {
      enable?: boolean;
    };
    spamCheck?: {
      enable?: boolean;
      threshold?: number;
      postToUrl?: string;
    };
  }

  declare interface TrackingSettings {
    clickTracking?: {
      enable?: boolean;
      enableText?: boolean;
    };
    openTracking?: {
      enable?: boolean;
      substitutionTag?: string;
    };
    subscriptionTracking?: {
      enable?: boolean;
      text?: string;
      html?: string;
      substitutionTag?: string;
    };
    ganalytics?: {
      enable?: boolean;
      utmSource?: string;
      utmMedium?: string;
      utmTerm?: string;
      utmContent?: string;
      utmCampaign?: string;
    };
  }

  declare type EmailData = string | { name?: string; email: string; };

  declare interface MailContent {
    type: string;
    value: string;
  }

  declare export type MailData = {
    to?: EmailData | EmailData[],
    cc?: EmailData | EmailData[],
    bcc?: EmailData | EmailData[],

    from: EmailData,
    replyTo?: EmailData,

    sendAt?: number,

    subject?: string,
    text?: string,
    html?: string,
    content?: MailContent[],
    templateId?: string,

    personalizations?: PersonalizationData[],
    attachments?: AttachmentData[],

    ipPoolName?: string,
    batchId?: string,

    sections?: { [key: string]: string },
    headers?: { [key: string]: string },

    categories?: string[],
    category?: string,

    customArgs?: { [key: string]: any },
    asm?: ASMOptions,

    mailSettings?: MailSettings,
    trackingSettings?: TrackingSettings,

    substitutions?: { [key: string]: string },
    substitutionWrappers?: string[],

    isMultiple?: boolean,
  }

  declare class MailService {
    setApiKey(apiKey: string): void;
    setSubstitutionWrappers(left: string, right: string): void;
    send(data: MailData | MailData[], isMultiple?: boolean, cb?: (err: Error | ResponseError, result: [http$ServerResponse, {}]) => void): Promise<[http$ServerResponse, {}]>;
  }

  declare export default MailService & { MailService: MailService };
}
