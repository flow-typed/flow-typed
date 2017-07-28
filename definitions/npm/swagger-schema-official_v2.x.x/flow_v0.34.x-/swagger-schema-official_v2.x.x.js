/**
 * Flowtype definitions for the Swagger 2.0 json schemas specification.
 * NPM package: https://www.npmjs.com/package/swagger-schema-official
 * It's a porting of https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/swagger-schema-official
 */

declare module 'swagger-schema-official' {
  // --- Base
  declare export type Contact = {
    name?: string,
    email?: string,
    url?: string
  }

  declare export type License = {
    name: string,
    url?: string
  }

  declare export type Info = {
    title: string,
    version: string,
    description?: string,
    termsOfService?: string,
    contact?: Contact,
    license?: License
  }

  declare export type ExternalDocs = {
    url: string,
    description?: string
  }

  declare export type Tag = {
    name: string,
    description?: string,
    externalDocs?: ExternalDocs
  }
  // --- /Base

  // --- Schema
  declare export type BaseSchema = {
    format?: string,
    title?: string,
    description?: string,
    default?: string | boolean | number | {},
    multipleOf?: number,
    maximum?: number,
    exclusiveMaximum?: number,
    minimum?: number,
    exclusiveMinimum?: number,
    maxLength?: number,
    minLength?: number,
    pattern?: string,
    maxItems?: number,
    minItems?: number,
    uniqueItems?: boolean,
    maxProperties?: number,
    minProperties?: number,
    enum?: Array<string | boolean | number | {}>,
    type?: string,
    items?: Schema | Schema[]
  }

  declare export type XML = {
    type?: string,
    namespace?: string,
    prefix?: string,
    attribute?: string,
    wrapped?: boolean
  }

  declare export type Schema = {
    $ref?: string,
    allOf?: Schema[],
    additionalProperties?: Schema,
    properties?: {
      [string]: Schema
    },
    discriminator?: string,
    readOnly?: boolean,
    xml?: XML,
    externalDocs?: ExternalDocs,
    example?: {
      [string]: {}
    },
    required?: string[]
  } & BaseSchema
  // --- /Schema

  // --- Parameters
  declare export type BaseParameter = {
    name: string,
    in: string,
    required?: boolean,
    description?: string
  }

  declare export type BodyParameter = {
    schema?: Schema
  } & BaseParameter

  declare export type FormDataParameter = {
    type: string,
    collectionFormat?: string
  } & BaseParameter & BaseSchema

  declare export type QueryParameter = {
    type: string,
    allowEmptyValue?: boolean
  } & BaseParameter & BaseSchema

  declare export type PathParameter = {
    type: string,
    required: boolean
  } & BaseParameter

  declare export type HeaderParameter = {
    type: string
  } & BaseParameter

  declare export type Parameter = BodyParameter |
    FormDataParameter |
    QueryParameter |
    PathParameter |
    HeaderParameter;
  // --- /Parameters

  // --- Responses
  declare export type Header = {
    type: string
  } & BaseSchema

  declare export type Response = {
    description: string,
    schema?: Schema,
    headers?: {
      [string]: Header
    },
    examples?: {
      [string]: {}
    }
  }
  // --- /Responses

  // --- Paths
  declare export type Operation = {
    responses: {
      [responseName: string]: Response
    },
    summary?: string,
    description?: string,
    externalDocs?: ExternalDocs,
    operationId?: string,
    produces?: string[],
    consumes?: string[],
    parameters?: Parameter[],
    schemes?: string[],
    deprecated?: boolean,
    security?: Security[],
    tags?: string[]
  }

  declare export type Path = {
    $ref?: string,
    get?: Operation,
    put?: Operation,
    post?: Operation,
    delete?: Operation,
    options?: Operation,
    head?: Operation,
    patch?: Operation,
    parameters?: [Parameter]
  }
  // --- Paths

  // --- Security
  declare export type BaseSecurity = {
    type: string,
    description?: string
  }

  declare export type BasicAuthenticationSecurity = {} & BaseSecurity

  declare export type BaseOAuthSecurity = {
    flow: string
  } & BaseSecurity

  declare export type OAuthScope = {
    [string]: string
  }

  declare export type OAuth2AccessCodeSecurity = {
    tokenUrl: string,
    authorizationUrl: string,
    scopes?: OAuthScope[]
  } & BaseOAuthSecurity

  declare export type OAuth2ApplicationSecurity = {
    tokenUrl: string,
    scopes?: OAuthScope[]
  } & BaseOAuthSecurity

  declare export type OAuth2ImplicitSecurity = {
    authorizationUrl: string
  } & BaseOAuthSecurity

  declare export type OAuth2PasswordSecurity = {
    tokenUrl: string,
    scopes?: OAuthScope[]
  } & BaseOAuthSecurity

  declare export type ApiKeySecurity = {
    name: string,
    in: string
  } & BaseSecurity

  declare export type Security = BasicAuthenticationSecurity |
    OAuth2AccessCodeSecurity |
    OAuth2ApplicationSecurity |
    OAuth2ImplicitSecurity |
    OAuth2PasswordSecurity |
    ApiKeySecurity;
  // --- /Security

  declare export type Spec = {
    swagger: string,
    info: Info,
    externalDocs?: ExternalDocs,
    host?: string,
    basePath?: string,
    schemes?: string[],
    consumes?: string[],
    produces?: string[],
    paths: {
      [string]: Path
    },
    definitions?: {
      [string]: Schema
    },
    parameters?: {
      [string]: BodyParameter | QueryParameter
    },
    responses?: {
      [string]: Response
    },
    security?: Array<{
      [string]: string[]
    }>,
    securityDefinitions?: {
      [string]: Security
    },
    tags?: Tag[]
  }
}
