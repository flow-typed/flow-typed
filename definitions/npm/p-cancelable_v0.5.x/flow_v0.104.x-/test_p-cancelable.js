// @flow

import { it } from 'flow-typed-test'
import PCancelable from 'p-cancelable'

let cancelablePromise: PCancelable<string>

it('constructor', () => {
  cancelablePromise = new PCancelable<string>((resolve, reject, onCancel) => {
    resolve('some value')
    reject('error mssage')
    reject(new Error('error message'))
    onCancel(() => {})

    // $FlowExpectedError
    resolve()
    // $FlowExpectedError
    resolve(1)
    // $FlowExpectedError
    resolve(true)
    // $FlowExpectedError
    onCancel()
    // $FlowExpectedError
    onCancel(1)
  })
})

it('behaves like a promise', async () => {
  await cancelablePromise

  cancelablePromise.then((value: string) => {})
  // $FlowExpectedError Promise's value should be of type `string` only
  cancelablePromise.then((value: number) => {})

  cancelablePromise.catch(error => {})

  cancelablePromise.cancel('Unicorn has changed its color')
})

it('.isCancelable property', () => {
  ;(cancelablePromise.isCanceled: boolean)
  // $FlowExpectedError
  ;(cancelablePromise.isCanceled: number)
  // $FlowExpectedError
  ;(cancelablePromise.isCanceled: string)
  // $FlowExpectedError Is a getter only
  cancelablePromise.isCanceled = true
  // $FlowExpectedError Is a getter only
  cancelablePromise.isCanceled = false
})

it('PCancelable.CancelError', () => {
  const err: PCancelable.CancelError = new PCancelable.CancelError()
  ;(err.isCanceled: boolean)
  // $FlowExpectedError `isCanceled` is always true in a `CancelError`
  ;(err.isCanceled: false)
  // $FlowExpectedError
  ;(err.isCanceled: number)
  // $FlowExpectedError
  ;(err.isCanceled: string)
  // $FlowExpectedError Is a getter only
  err.isCanceled = true
  // $FlowExpectedError Is a getter only
  err.isCanceled = false
})

it('PCancelable.fn', () => {
  type OnCancel = (handler: () => void) => void

  const fn = PCancelable.fn(
    (input: string, onCancel: OnCancel): Promise<number> => {
      onCancel(() => {})
      // $FlowExpectedError
      onCancel()
      // $FlowExpectedError
      onCancel(1)

      return Promise.resolve<number>(1)
    }
  )
  ;(fn('input'): PCancelable<number>)
  // $FlowExpectedError The promise resolves to a number
  ;(fn('input'): PCancelable<string>)
  // $FlowExpectedError The input should be of type string
  ;(fn(1): PCancelable<number>)

  fn('input').cancel()
  // $FlowExpectedError
  fn('input').unknownFunction()
})

it('PCancelable.fn multiple inputs', () => {
  type OnCancel = (handler: () => void) => void

  PCancelable.fn<any, 1>((input1, onCancel: OnCancel) => Promise.resolve(1))
  PCancelable.fn<any, any, 2>((input1, input2, onCancel: OnCancel) =>
    Promise.resolve(2)
  )
  PCancelable.fn<any, any, any, 3>(
    (input1, input2, input3, onCancel: OnCancel) => Promise.resolve(3)
  )
})
