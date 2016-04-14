// @flow
jest.mock('../github.js', () => {
  const fixtures = require('./libDef-test__fixtures.js')
  return {
    gitHubClient: () => ({
      repos: {
        getContent: function(args, cb) {
          if (args.path == '/definitions') {
            cb(null, fixtures.definitionsFixture)
          } else {
            let name = args.path.match(/\/definitions\/(.*)/)[1]
            cb(null, fixtures.flowVersionsFixture[name])
          }
        }
      }
    })
  }
})

import {getGHLibsAndFlowVersions} from '../libDef.js';

describe('libDef helpers', () => {
  describe('getGHLibsAndFlowVersions', () => {
    pit('fetches a flat list of all libdefs for every flow version',
    async () => {
      let versions = await getGHLibsAndFlowVersions()
      expect(versions).toEqual([
        { pkgName: 'kefir',
          pkgVersion: { major: 3, minor: 'x', patch: 'x' },
          pkgVersionStr: 'v3.x.x',
          pkgNameVersionStr: 'kefir-v3.x.x',
          flowVersionStr: '>=v0.20.x',
          flowVersion: { range: '>=', major: 0, minor: 20, patch: 'x' }
        },
        { pkgName: 'mori',
          pkgVersion: { major: 0, minor: 3, patch: 'x' },
          pkgVersionStr: 'v0.3.x',
          pkgNameVersionStr: 'mori-v0.3.x',
          flowVersionStr: '>=v0.22.x',
          flowVersion: { range: '>=', major: 0, minor: 22, patch: 'x' }
        },
        { pkgName: 'mori',
          pkgVersion: { major: 0, minor: 3, patch: 'x' },
          pkgVersionStr: 'v0.3.x',
          pkgNameVersionStr: 'mori-v0.3.x',
          flowVersionStr: '>=v0.18.x',
          flowVersion: { range: '>=', major: 0, minor: 18, patch: 'x' }
        }
      ])
    })
  })
})
