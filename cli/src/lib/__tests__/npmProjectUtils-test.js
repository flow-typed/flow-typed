// @flow
import { getPackageJsonDependencies } from "../npm/npmProjectUtils";

describe("npmProjectUtils", () => {
  describe("getPackageJsonDependencies", () => {
    it("throws when a dep of differing versions is found in multiple dep fields", () => {
      const pkgJson = {
        pathStr: "",
        content: {
          name: "",
          version: "",
          devDependencies: {
            "flow-bin": "^0.38.0"
          },
          dependencies: {
            "flow-bin": "^0.37.4"
          }
        }
      };

      expect(() => {
        getPackageJsonDependencies(pkgJson, []);
      }).toThrow("Found multiple versions of flow-bin listed in package.json!");
    });

    it("does not throw when a dep of the same version is found in multiple dep fields", () => {
      const pkgJson = {
        pathStr: "",
        content: {
          name: "",
          version: "",
          devDependencies: {
            "flow-bin": "^0.37.4"
          },
          dependencies: {
            "flow-bin": "^0.37.4"
          }
        }
      };

      const actual = getPackageJsonDependencies(pkgJson, []);

      expect(actual).toEqual({
        "flow-bin": "^0.37.4"
      });
    });

    it("does not throw when a dep of a different version is found in an ignored field", () => {
      const pkgJson = {
        pathStr: "",
        content: {
          name: "",
          version: "",
          devDependencies: {
            "flow-bin": "^0.38.0"
          },
          dependencies: {
            "flow-bin": "^0.37.4"
          }
        }
      };

      const actual = getPackageJsonDependencies(pkgJson, ["dev"]);

      expect(actual).toEqual({
        "flow-bin": "^0.37.4"
      });
    });

    it("ignores packages outside of normal, dev and optional dependencies", () => {
      const pkgJson = {
        pathStr: "",
        content: {
          name: "",
          version: "",
          devDependencies: {
            "flow-bin": "^0.37.0"
          },
          dependencies: {
            "flow-bin": "^0.37.4"
          },
          optionalDependencies: {
            "flow-bin": "^0.37.4"
          },
          bundleDependencies: {
            "flow-bin": "^0.38.0"
          }
        }
      };

      const actual = getPackageJsonDependencies(pkgJson, []);

      expect(actual).toEqual({
        "flow-bin": "^0.37.4"
      });
    });
  });
});
