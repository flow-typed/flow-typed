/* @flow */

import colors from 'colors/safe';
import got from 'got';
import flowgen from 'flowgen';
import prettier from 'prettier';
import {determineFlowVersion} from './npm/npmProjectUtils';
import {findPackageJsonPath} from './npm/npmProjectUtils';
import {format} from 'util';
import {fs} from './node';
import globAsync from 'glob';
import {getPackageJsonData} from './npm/npmProjectUtils';
import {
  getPackageJsonDependencies,
  type PnpResolver,
} from './npm/npmProjectUtils';
import {mkdirp} from './fileUtils';
import {path} from './node';
import {signCode} from './codeSign';
import {verifySignedCode} from './codeSign';
import {versionToString} from './semver';
import {listItem} from './logger';

export function glob(pattern: string, options: Object): Promise<Array<string>> {
  return new Promise((resolve, reject) =>
    globAsync(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    }),
  );
}

async function resolvePkgDirPath(
  pkgName: string,
  pkgJsonDirPath: string,
  pnpjs: PnpResolver | null,
): Promise<string> {
  if (pnpjs != null) {
    const pnpResolvedDirPath = pnpjs.resolveToUnqualified(
      pkgName,
      pkgJsonDirPath,
    );
    if (pnpResolvedDirPath != null) {
      return pnpResolvedDirPath;
    }
  }

  let prevNodeModulesDirPath;
  let nodeModulesDirPath = path.resolve(pkgJsonDirPath, 'node_modules');
  while (true) {
    const pkgDirPath = path.resolve(nodeModulesDirPath, pkgName);
    if (await fs.exists(pkgDirPath)) {
      return pkgDirPath;
    }

    prevNodeModulesDirPath = nodeModulesDirPath;
    nodeModulesDirPath = path.resolve(
      nodeModulesDirPath,
      '..',
      '..',
      'node_modules',
    );
    if (prevNodeModulesDirPath === nodeModulesDirPath) {
      break;
    }
  }
  throw new Error(
    'Unable to find `' +
      pkgName +
      '/` install directory! ' +
      'Did you forget to run `npm install` before running `flow-typed install`?',
  );
}

const moduleStubTemplate = `
declare module '%s' {
  declare module.exports: any;
}`.trim();
const aliasTemplate = `
declare module '%s%s' {
  declare module.exports: $Exports<'%s'>;
}`.trim();
const guessedModuleStubTemplate = `
declare module '%s' {
  declare module.exports: %s;
}`.trim();

function stubFor(moduleName: string, fileExt?: string): string {
  const moduleStub = format(moduleStubTemplate, moduleName);
  if (fileExt !== undefined) {
    const aliasStub = format(aliasTemplate, moduleName, fileExt, moduleName);
    return `${moduleStub}\n${aliasStub}`;
  }
  return moduleStub;
}

const functionTemplate = '(%s) => any';
const spaceByI = (i: number): string => '  '.repeat(i);
const keyTypeTemplate = `  %s: %s,\n`;

function objectToTypedTemplate(
  obj: {...},
  currentDepth: number,
  maxDepth: number,
  functionHeader?: string,
) {
  const thisDepth = currentDepth + 1;

  let formatedEntries = [];
  if (functionHeader) {
    formatedEntries.push(spaceByI(thisDepth + 1) + functionHeader);
  }

  for (let entrie of Object.entries(obj)) {
    const toTypeResult = objectToType(
      entrie[1],
      maxDepth,
      thisDepth,
      thisDepth <= maxDepth,
    );

    formatedEntries.push(
      format(
        `${spaceByI(thisDepth)}${keyTypeTemplate}`,
        entrie[0],
        toTypeResult,
      ),
    );
  }

  if (formatedEntries.length > 0) {
    return `{\n${formatedEntries.join('')}${spaceByI(thisDepth)}}`;
  } else {
    return '{}';
  }
}

function guessFunctionArguments(fun: Function): string {
  let raw = fun.toString();
  let args = raw.slice(raw.indexOf('(') + 1, raw.indexOf(')'));
  args = args.replace(/ /g, '');

  if (args.length > 0) {
    args = args
      .split(',')
      .map((el: string) => `${el}: any`)
      .join(', ');
  }

  return format(functionTemplate, args);
}

function functionToType(
  fun: Function,
  currentDepth: number,
  maxDepth: number,
): string {
  let output = guessFunctionArguments(fun);

  let functionEntries = Object.entries(fun);
  if (functionEntries.length > 0) {
    return objectToTypedTemplate(
      fun,
      currentDepth,
      maxDepth,
      output.length > 0 ? output + ',\n' : undefined,
    );
  }

  return output;
}

function objectToType(
  obj: mixed,
  maxDepth: number,
  currentDepth: number = 0,
  deep: boolean = true,
): string {
  if (obj === null) return 'null';

  // Every function that depends on objectToTypedTemplate need to check deep first
  if (deep) {
    if (typeof obj === 'object')
      return objectToTypedTemplate(obj, currentDepth, maxDepth);
    if (typeof obj === 'function')
      return functionToType(obj, currentDepth, maxDepth);
  }

  if (typeof obj === 'object') return 'any';
  if (typeof obj === 'function') return guessFunctionArguments(obj);
  return typeof obj;
}

function guessedStubFor(
  moduleName: string,
  packagePath: string,
  maxDepth: number = 1,
): string {
  const module: {...} = (require: any)(packagePath);
  const formattedTemplate: string = format(
    guessedModuleStubTemplate,
    moduleName,
    objectToType(module, maxDepth),
  );
  return formattedTemplate;
}

async function writeStub(
  projectRoot: string,
  packageName: string,
  packageVersion: string,
  packageFolder: string | null,
  overwrite: boolean,
  files: Array<string>,
  libdefDir: string,
  maxDepth?: number,
  typescriptTypingsPath?: string | null,
  typescriptTypingsContent?: string | null,
): Promise<string> {
  let flowgenOutput = null;
  const flowgenTemplate = `
declare module '%s' {
  %s
}
`.trim();
  if (typescriptTypingsPath) {
    const code = flowgen.compiler.compileDefinitionFile(typescriptTypingsPath);
    try {
      flowgenOutput = prettier.format(
        format(flowgenTemplate, packageName, code),
        {parser: 'babel-flow', singleQuote: true, semi: true},
      );
    } catch (e) {
      if (
        e.message.includes(
          '`declare module` cannot be used inside another `declare module`',
        )
      ) {
        flowgenOutput = prettier.format(code, {
          parser: 'babel-flow',
          singleQuote: true,
          semi: true,
        });
      } else {
        flowgenOutput = format(flowgenTemplate, packageName, code);
      }
    }
  } else if (typescriptTypingsContent) {
    const code = flowgen.compiler.compileDefinitionString(
      typescriptTypingsContent,
    );
    try {
      flowgenOutput = prettier.format(
        format(flowgenTemplate, packageName, code),
        {parser: 'babel-flow', singleQuote: true, semi: true},
      );
    } catch (e) {
      if (
        e.message.includes(
          '`declare module` cannot be used inside another `declare module`',
        )
      ) {
        flowgenOutput = prettier.format(code, {
          parser: 'babel-flow',
          singleQuote: true,
          semi: true,
        });
      } else {
        flowgenOutput = format(flowgenTemplate, packageName, code);
      }
    }
  }
  let output = [
    '/**',
    ' * This is an autogenerated libdef stub for:',
    ' *',
    ` *   '${packageName}'`,
    ' *',
    ' * Fill this stub out by replacing all the `any` types.',
    ' *',
    ' * Once filled out, we encourage you to share your work with the',
    ' * community by sending a pull request to:',
    ' * https://github.com/flowtype/flow-typed',
    ' */\n\n',
  ].join('\n');
  if (packageFolder !== null && false) {
    try {
      output += guessedStubFor(packageName, packageFolder, maxDepth);
    } catch (e) {
      output += stubFor(packageName);
    }
  } else if (flowgenOutput) {
    output += flowgenOutput;
  } else {
    output += stubFor(packageName);
  }

  if (files.length > 0) {
    output += `

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
`;

    const [fileDecls, aliases] = files.reduce(
      ([fileDecls, aliases], file) => {
        const ext = path.extname(file);
        const name = file.substr(0, file.length - ext.length);
        const moduleName = `${packageName}/${name}`;
        if (name === 'index') {
          aliases.push(format(aliasTemplate, moduleName, '', packageName));
          aliases.push(format(aliasTemplate, moduleName, ext, packageName));
        } else if (path.basename(name) === 'index') {
          const dirModuleName = packageName + '/' + path.dirname(file);
          fileDecls.push(format(moduleStubTemplate, dirModuleName));
          aliases.push(format(aliasTemplate, moduleName, '', dirModuleName));
          aliases.push(format(aliasTemplate, moduleName, ext, dirModuleName));
        } else {
          fileDecls.push(format(moduleStubTemplate, moduleName));
          aliases.push(format(aliasTemplate, moduleName, ext, moduleName));
        }
        return [fileDecls, aliases];
      },
      [[], []],
    );

    output += fileDecls.join('\n\n');
    output += '\n\n// Filename aliases\n';
    output += aliases.join('\n');
  }
  output += '\n'; // File should end with a newline
  const filename = path.join(
    projectRoot,
    libdefDir,
    'npm',
    format('%s_vx.x.x.js', packageName),
  );
  await mkdirp(path.dirname(filename));

  if (!overwrite) {
    const exists = await fs.exists(filename);
    if (exists) {
      const existingStub = await fs.readFile(filename, 'utf8');
      if (!verifySignedCode(existingStub)) {
        throw new Error(
          'Stub already exists and has been modified. ' +
            'Use --overwrite to overwrite',
        );
      }
    }
  }

  const flowVersionRaw = await determineFlowVersion(projectRoot);
  const flowVersion = flowVersionRaw
    ? `/flow_${versionToString(flowVersionRaw)}`
    : '';
  const stubVersion = `<<STUB>>/${packageName}_v${packageVersion}${flowVersion}`;
  await fs.writeFile(filename, signCode(output, stubVersion));
  return filename;
}

export async function pkgHasFlowFiles(
  projectRoot: string,
  packageName: string,
  pnpjs: PnpResolver | null,
): Promise<{|
  flowTyped: boolean,
  path?: string,
|}> {
  try {
    let pathToPackage = await resolvePkgDirPath(
      packageName,
      projectRoot,
      pnpjs,
    );

    const files = await glob('**/*.flow', {
      cwd: pathToPackage,
      ignore: 'node_modules/**',
    });

    return {
      flowTyped: files.length > 0,
      path: pathToPackage,
    };
  } catch (e) {
    return {
      flowTyped: false,
    };
  }
}

async function getDefinitelyTypedPackage(
  packageName: string,
  explicitVersion: string | null,
) {
  const parts = packageName.split('/');
  const typesPackageName = packageName.startsWith('@')
    ? parts[0].slice(1) + '__' + parts[1]
    : packageName;
  const version = explicitVersion ? `@${explicitVersion}` : '';
  const typing = `https://unpkg.com/@types/${typesPackageName}${version}/index.d.ts`;
  return got(typing, {method: 'GET'});
}

/**
 * createStub("/path/to/root", "foo") will create a file
 * /path/to/root/flow-typed/npm/foo.js that contains a stub for the module foo.
 *
 * If foo is installed, it will read the directory that require("foo") resolves
 * to and include definitions for "foo/FILE", for every FILE in the foo package
 */
export async function createStub(
  projectRoot: string,
  packageName: string,
  explicitVersion: string | null,
  overwrite: boolean,
  pnpjs: PnpResolver | null,
  typescript: boolean,
  libdefDir?: string,
  maxDepth?: number,
): Promise<boolean> {
  let files = [];
  let resolutionError = null;
  let pathToPackage = null;
  let version = explicitVersion || null;
  let typescriptTypingsPath = null;
  let typescriptTypingsContent = null;

  const typedefDir = libdefDir || 'flow-typed';

  try {
    pathToPackage = await resolvePkgDirPath(packageName, projectRoot, pnpjs);

    files = await glob('**/*.{js,jsx}', {
      cwd: pathToPackage,
      ignore: 'node_modules/**',
    });
  } catch (e) {
    resolutionError = e;
  }

  // Try to deduce a version if one isn't provided
  if (version == null) {
    // Look at the package.json for the installed module
    if (pathToPackage != null) {
      try {
        version = (require: any)(path.join(pathToPackage, 'package.json'))
          .version;
      } catch (e) {}
    }
  }

  if (typescript) {
    if (typescriptTypingsPath == null) {
      // Look at the package.json for the installed module
      if (pathToPackage != null) {
        try {
          const pkg = (require: any)(path.join(pathToPackage, 'package.json'));
          const typing = pkg.typings || pkg.types;
          if (typing) typescriptTypingsPath = path.join(pathToPackage, typing);
        } catch (e) {}
      }
    }

    // If that failed, try looking for index.d.ts file
    if (typescriptTypingsPath == null) {
      // Look at the package.json for the installed module
      if (pathToPackage != null) {
        const typing = path.join(pathToPackage, 'index.d.ts');
        if (await fs.exists(typing)) {
          typescriptTypingsPath = typing;
        }
      }
    }

    if (typescriptTypingsPath == null) {
      try {
        const response = await getDefinitelyTypedPackage(
          packageName,
          explicitVersion,
        );
        typescriptTypingsContent = response.body;
      } catch (e) {
        console.log(
          colors.red("❌\t%s%s': %s"),
          packageName,
          version ? '@' + version : '',
          e.message,
        );
        return false;
      }
    }
  }

  // If that failed, try looking for a package.json in the root
  if (version == null) {
    try {
      const pkgJsonPathStr = await findPackageJsonPath(projectRoot);
      const pkgJsonData = await getPackageJsonData(pkgJsonPathStr);
      const rootDependencies = await getPackageJsonDependencies(
        pkgJsonData,
        [],
        [],
      );
      version = rootDependencies[packageName] || null;
    } catch (e) {}
  }

  try {
    if (version === null) {
      throw new Error(
        'Could not deduce version from node_modules or package.json. ' +
          'Please provide an explicit version',
      );
    }
    const filename = await writeStub(
      projectRoot,
      packageName,
      version,
      pathToPackage,
      overwrite,
      files,
      typedefDir,
      maxDepth,
      typescriptTypingsPath,
      typescriptTypingsContent,
    );
    const terseFilename = path.relative(projectRoot, filename);
    listItem(
      `${packageName}@${version}`,
      colors.red(terseFilename),
      resolutionError
        ? colors.yellow(
            `Unable to stub all files in ${packageName}, so only created a stub for the main module (${resolutionError.message})`,
          )
        : undefined,
    );
    return true;
  } catch (e) {
    console.log(
      colors.red("❌\t%s%s': %s"),
      packageName,
      version ? '@' + version : '',
      e.message,
    );
    return false;
  }
}
