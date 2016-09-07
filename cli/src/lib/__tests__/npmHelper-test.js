// @flow
// to mock fs calls
jest.mock('../node.js');
import {fs} from '../node.js';

jest.unmock('../npmHelper.js');
import {getInstalledPackageDependencies} from "../npmHelper.js";

describe('npmHelper', ()=> {
  const MOCK_FILE_INFO = {
    '/home/root/package.json': 
    `{
      "dependencies": 
      {
        "existing-dependency": "^0.0.1",
        "missing-dependency": "^0.0.2"
      }
    }`,
    '/home/root/node_modules/existing-dependency/package.json': 
    `{
      "version": "1.0.1"
    }`,
    '/home/root/src/test.js' : 
    `
    //@flow
    export function foo() { 
      return 'bar'; 
    }
    `                                
  };

  describe('getInstalledPackageDependencies', async ()=>{
    beforeEach(() => {
      // Set up some mocked out file info before each test
      (fs:any).__setMockFiles(MOCK_FILE_INFO);
    });

    it('throws an error message if package.json is not found', async ()=> {
      try {
        await getInstalledPackageDependencies('/home');
      } catch(e) {
        expect(e.message).toBeDefined();
      }
    });
    it('return a map of found dependencies: version', async ()=> {
        let deps = await getInstalledPackageDependencies('/home/root');
        expect(deps['existing-dependency']).toBeDefined();
        expect(deps['existing-dependency']).toEqual('1.0.1');
        expect(deps['missing-dependency']).toBeUndefined();
    });
  });
});
