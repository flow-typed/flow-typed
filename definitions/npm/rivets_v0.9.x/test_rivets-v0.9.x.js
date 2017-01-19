// @flow

import rivets from 'rivets'

/**
 * rivets.bind
 * bind(element: HTMLElement, model: Object): View;
 */
const el = document.createElement('div')

const view = rivets.bind(el, {test: 'abc'})
'function' === typeof view.unbind

// $ExpectError
rivets.bind({}, {test: 'abc'})

// $ExpectError
rivets.bind(el, ['abc'])

/**
 * rivets.configure
 * configure(options: ConfigurationOptions): void;
 */
rivets.configure({prefix: 'rv'})

// $ExpectError
rivets.configure({suffix: 'rv'})

// $ExpectError
rivets.configure({preloadData: 7})

// $ExpectError
rivets.configure([7])

/**
 * rivets.init
 * init(componentName: string, element: HTMLElement, data: Object): View;
 */
const componentView = rivets.init('test', el, {test: {prop: 7}})

'function' === typeof componentView.unbind

// $ExpectError
rivets.init('abc', {}, {})

// $ExpectError
rivets.init('abc', el, [])

// $ExpectError
rivets.init(5, el, {})

// $ExpectError
rivets.init(5, el)

/**
 * rivets.binders
 * {[key: string]: TwoWayBinder | (el: HTMLElement, value: any) => void}
 */
rivets.binders.testBinder = (el, v) => {}

rivets.binders.testBinder = {
  bind: () => {},
  unbind: () => {},
  routine: () => {}
}

// $ExpectError
rivets.binders.testBinder = []

// $ExpectError
rivets.binders.testBinder = {
  binds: () => {},
  unbind: () => {},
  routine: () => {}
}

/**
 * rivets.formatters
 * {[key: string]: TwoWayFormatter | (...value: any) => any}
 */
rivets.formatters.testFormatter = (x) => 'abc'

// $ExpectError
rivets.formatters.formatterAssignedElsewhere()

if ('function' === typeof rivets.formatters.otherFormatterAssignedElsewhere) {
  rivets.formatters.otherFormatterAssignedElsewhere()
}

// $ExpectError
rivets.formatters.twoWay = {
  reads: () => {},
  publish: () => {}
}

/**
 * rivets.components
 * {[key: string]: Component<*>}
 */
class Controller {
  constructor(el, data) {}
}

rivets.components.testComponent = {
  static: ['a', 'b'],
  template() {
    return 'template'
  },
  initialize(el, data) {
    return new Controller(el, data)
  }
}

// $ExpectError
rivets.components.testComponent = { static: 'a',
  template() {
    return 'template'
  },
  initialize(el, data) {
    return new Controller(el, data)
  }
}

/**
 * rivets.adapters
 * {[key: string]: Adapter}
 */
 rivets.adapters['§'] = {
  observe(obj, keypath, callback) {},
  unobserve(obj, keypath, callback) {},
  get(obj, keypath) {return 7},
  set(obj, keypath, value) {},
 }

// $ExpectError
rivets.adapters['§'] = {}
