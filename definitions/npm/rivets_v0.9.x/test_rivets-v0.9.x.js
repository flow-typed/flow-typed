// @flow

import rivets from 'rivets'

/**
 * rivets.bind
 * bind(element: HTMLElement, model: Object): View;
 */
const el = document.createElement('div')

const view = rivets.bind(el, {test: 'abc'})
'function' === typeof view.unbind

// $FlowExpectedError
rivets.bind({}, {test: 'abc'})

// $FlowExpectedError
rivets.bind(el, ['abc'])

/**
 * rivets.configure
 * configure(options: ConfigurationOptions): void;
 */
rivets.configure({prefix: 'rv'})

// $FlowExpectedError
rivets.configure({suffix: 'rv'})

// $FlowExpectedError
rivets.configure({preloadData: 7})

// $FlowExpectedError
rivets.configure([7])

/**
 * rivets.init
 * init(componentName: string, element: HTMLElement, data: Object): View;
 */
const componentView = rivets.init('test', el, {test: {prop: 7}})

'function' === typeof componentView.unbind

// $FlowExpectedError
rivets.init('abc', {}, {})

// $FlowExpectedError
rivets.init('abc', el, [])

// $FlowExpectedError
rivets.init(5, el, {})

// $FlowExpectedError
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

// $FlowExpectedError
rivets.binders.testBinder = []

// $FlowExpectedError
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

// $FlowExpectedError
rivets.formatters.formatterAssignedElsewhere()

if ('function' === typeof rivets.formatters.otherFormatterAssignedElsewhere) {
  rivets.formatters.otherFormatterAssignedElsewhere()
}

// $FlowExpectedError
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

// $FlowExpectedError
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

// $FlowExpectedError
rivets.adapters['§'] = {}
