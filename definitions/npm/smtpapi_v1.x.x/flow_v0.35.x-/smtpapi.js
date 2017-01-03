/**
 * Flowtype definitions for smtpapi
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SmtpApi$Header {
    to: string[],
        sub: Object,
        unique_args: Object,
        category: string[],
        section: Object,
        filters: Object,
        send_at: "" | number,
        send_each_at: number[],
        asm_group_id: number,
        ip_pool: string
}

declare interface SmtpApi$Constructor {
    new(): SmtpApi$Instance,
    new(header: SmtpApi$Header): SmtpApi$Instance
}

declare interface SmtpApi$Instance {
    header: SmtpApi$Header,
        version: string,
        jsonObject(): SmtpApi$Header,
        jsonString(): string,
        addTo(to: string): void,
        addTo(tos: string[]): void,
        addSubstitution(key: string, val: string): void,
        addSubstitution(key: string, val: string[]): void,
        addUniqueArg(key: string, val: string): void,
        addCategory(cat: string): void,
        addCategory(cat: string[]): void,
        addSection(sec: string, val: string): void,
        addFilter(filter: string, setting: string, val: number): void,
        addFilter(filter: string, setting: string, val: string): void,
        addSendEachAt(send_each_at: number): void,
        addSendEachAt(send_each_at: number[]): void,
        setTos(email: string): void,
        setTos(emails: string[]): void,
        setSubstitutions(subs: Object): void,
        setUniqueArgs(val: Object): void,
        setCategories(cats: string): void,
        setCategories(cats: string[]): void,
        setSections(sec: Object): void,
        setFilters(filters: Object): void,
        setSendAt(send_at: number): void,
        setSendEachAt(send_each_at: number[]): void,
        setASMGroupID(asm_group_id: number): void,
        setIpPool(ip_pool: string): void
}
declare module 'smtpapi' {
    declare var smtp: SmtpApi$Constructor;
    declare module.exports: typeof smtp
}