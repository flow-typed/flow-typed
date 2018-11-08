// @flow

import { model } from 'zipkin'

const e1: model.Endpoint = new model.Endpoint({ serviceName: 'test1' })
const isEmpty: boolean = e1.isEmpty()