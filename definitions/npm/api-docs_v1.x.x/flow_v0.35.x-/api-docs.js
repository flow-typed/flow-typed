// @flow
/**
 * Flowtype definitions for api-docs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface AtomDocTypes$Metadata {
    classes: {
        [className: string]: AtomDocTypes$ClassInfo
    }
}

declare interface AtomDocTypes$ClassInfo {
    name: string,
        superClass: string,
        visibility: string,
        filename: string,
        srcUrl: string,
        summary: string,
        description: string,
        examples: AtomDocTypes$Example[],
        sections: AtomDocTypes$Section[],
        classMethods: AtomDocTypes$ClassMethod[],
        classProperties: AtomDocTypes$ClassProperty[],
        instanceMethods: AtomDocTypes$InstanceMethod[],
        instanceProperties: AtomDocTypes$InstanceProperty[]
}

declare interface AtomDocTypes$Example {
    description: string,
        lang: string,
        code: string,
        raw: string
}

declare interface AtomDocTypes$Section {
    name: string,
        description: string
}

declare interface AtomDocTypes$ClassMethod {
    name: string,
        sectionName: string,
        srcUrl: string,
        visibility: string,
        summary: string,
        description: string,
        arguments: AtomDocTypes$Argument[],
        returnValues: AtomDocTypes$ReturnValue[]
}

declare interface AtomDocTypes$ClassProperty {}

declare interface AtomDocTypes$InstanceMethod {
    name: string,
        sectionName: string,
        srcUrl: string,
        visibility: string,
        summary: string,
        description: string,
        arguments: AtomDocTypes$Argument[],
        returnValues: AtomDocTypes$ReturnValue[],
        titledArguments: AtomDocTypes$TitledArgument[]
}

declare interface AtomDocTypes$InstanceProperty {
    name: string,
        sectionName: string,
        srcUrl: string,
        visibility: string,
        summary: string,
        description: string
}

declare interface AtomDocTypes$Argument {
    name: string,
        description: string,
        type: string,
        isOptional: boolean,
        children: AtomDocTypes$Argument[]
}

declare interface AtomDocTypes$TitledArgument {
    title: string,
        description: string,
        arguments: AtomDocTypes$Argument[]
}

declare interface AtomDocTypes$ReturnValue {
    type: string,
        description: string
}