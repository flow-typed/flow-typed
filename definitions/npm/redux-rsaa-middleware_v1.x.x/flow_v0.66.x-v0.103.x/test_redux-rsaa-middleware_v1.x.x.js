// @flow

import type { RSAAAction } from 'redux-rsaa-middleware';

const newActionValid : RSAAAction = {
  type: 'RSAA',
  payload: {
    method: 'GET',
    path: 'https://myPath.com/resource',
    startedSendingAction: {
      type: 'STARTED_FETCHING_RESOURCE',
      payload: {},
    },
    finishedSendingAction: {
      type: 'FINISHED_FETCHING_RESOURCE',
      payload: {},
    },
    successAction: {
      type: 'UPDATE_USERS_WITH_RESOURCE',
      payload: {},
    },
  },
};

const newActionInvalid : RSAAAction = {
  // $FlowExpectedError - incompatible property type
  type: null,
  payload: {
    // $FlowExpectedError - incompatible property type
    method: null,
    // $FlowExpectedError - incompatible property type
    path: null,
    // $FlowExpectedError - incompatible property type
    query: null,
    startedSendingAction: {
      type: 'STARTED_FETCHING_RESOURCE',
      // $FlowExpectedError - incompatible property type
      payload: null,
    },
    finishedSendingAction: {
      type: 'FINISHED_FETCHING_RESOURCE',
      payload: {},
    },
    successAction: {
      type: 'UPDATE_USERS_WITH_RESOURCE',
      payload: {},
    },
    // $FlowExpectedError - incompatible property type
    failureAction: null,
  },
};