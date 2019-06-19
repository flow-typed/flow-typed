declare module "flux-standard-action" {
  declare type FluxStandardAction<
    ActionType: string | Symbol,
    Payload: any,
    Meta: any
  > = {
    /**
     * The `type` of an action identifies to the consumer the nature of the action that has occurred.
     * Two actions with the same `type` MUST be strictly equivalent (using `===`)
     */
    type: ActionType,
    /**
     * The optional `payload` property MAY be any type of value.
     * It represents the payload of the action.
     * Any information about the action that is not the type or status of the action should be part of the `payload` field.
     * By convention, if `error` is `true`, the `payload` SHOULD be an error object.
     * This is akin to rejecting a promise with an error object.
     */
    payload?: Payload,
    /**
     * The optional `error` property MAY be set to true if the action represents an error.
     * An action whose `error` is true is analogous to a rejected Promise.
     * By convention, the `payload` SHOULD be an error object.
     * If `error` has any other value besides `true`, including `undefined`, the action MUST NOT be interpreted as an error.
     */
    error?: boolean,
    /**
     * The optional `meta` property MAY be any type of value.
     * It is intended for any extra information that is not part of the payload.
     */
    meta?: Meta
  };
  declare function isFSA(action: any): boolean;
  declare function isError(action: any): boolean;
}
