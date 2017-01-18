/**
 * Flowtype definitions for azure-sb
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'ServiceBus' {
    declare interface Callback {
        (error: any, response: any): void
    }
    declare interface NotificationHubRegistration {
        RegistrationId: string,
            ChannelUri?: string,
            DeviceToken?: string,
            gcmRegistrationId?: string,
            Tags?: string,
            BodyTemplate?: any,
            WnsHeaders?: any,
            MpnsHeaders?: any,
            Expiry?: Date
    }
    declare export class NotificationHubService {
        new(
            hubName: string,
            endpointOrConnectionString: string,
            sharedAccessKeyName?: string,
            sharedAccessKeyValue?: string): NotificationHubService;
        hubName: string;
        wns: Wns.Service;
        apns: Apns.Service;
        gcm: Gcm.Service;
        mpns: Mpns.Service;
        send(
            tags: string,
            payload: Object | string,
            optionsOrCallback?: {
                headers: Object
            } | Callback,
            callback?: Callback): void;
        createOrUpdateInstallation(installation: string, options: any, callback?: Callback): void;
        patchInstallation(
            installationId: string,
            partialUpdateOperations: any[],
            options: any,
            callback?: Callback): void;
        deleteInstallation(installationId: string, options: any, callback?: Callback): void;
        getInstallation(installationId: string, options: any, callback?: Callback): void
    }
    declare module 'Apns' {
        declare interface Payload {
            expiry?: Date,
                aps?: Object,
                badge?: number,
                alert?: string,
                sound?: string,
                payload: Object
        }
        declare interface Service {
            new(service: NotificationHubService): Service,
            send(tags: string | string[], payload: Apns.Payload, callback?: Callback): void,
                createNativeRegistration(
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateNativeRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createTemplateRegistration(
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                updateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                listRegistrationsByToken(
                    token: string,
                    optionsOrCallback?: {
                        top: number,
                        skip: number
                    } | Callback,
                    callback?: Callback): void
        }
    }

    declare module 'Gcm' {
        declare interface Service {
            new(service: NotificationHubService): Service,
            send(tags: string | string[], payload: Apns.Payload, callback?: Callback): void,
                createNativeRegistration(
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateNativeRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createTemplateRegistration(
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                updateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                listRegistrationsByToken(
                    token: string,
                    optionsOrCallback?: {
                        top: number,
                        skip: number
                    } | Callback,
                    callback?: Callback): void
        }
    }

    declare module 'Mpns' {
        declare interface Service {
            new(service: NotificationHubService): Service,
            send(tags: string | string[], payload: Apns.Payload, callback?: Callback): void,
                createNativeRegistration(
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateNativeRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createTemplateRegistration(
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                updateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                listRegistrationsByToken(
                    token: string,
                    optionsOrCallback?: {
                        top: number,
                        skip: number
                    } | Callback,
                    callback?: Callback): void
        }
    }

    declare module 'Wns' {
        declare interface Payload {
            expiry?: Date,
                aps?: Object,
                badge?: number,
                alert?: string,
                sound?: string,
                payload: Object
        }
        declare interface Options {
            headers: Object
        }
        declare interface Service {
            new(service: NotificationHubService): Service,
            send(tags: string | string[], payload: Apns.Payload, callback?: Callback): void,
                createNativeRegistration(
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateNativeRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createTemplateRegistration(
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                createOrUpdateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                updateTemplateRegistration(
                    registrationId: string,
                    token: string,
                    tags: string | string[],
                    template: Apns.Payload,
                    optionsOrCallback?: Object | Callback,
                    callback?: Callback): void,
                listRegistrationsByToken(
                    token: string,
                    optionsOrCallback?: {
                        top: number,
                        skip: number
                    } | Callback,
                    callback?: Callback): void
        }
    }

}