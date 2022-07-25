// flow-typed signature: a09a5a92a3c1ded961684da6ff393a70
// flow-typed version: 15ea1b476e/@octokit/rest_v18.x.x/flow_>=v0.83.x

declare module '@octokit/rest' {
  declare class Octokit {
    (options?: {| [key: string]: any |}): this;

    actions: {| [key: string]: any |},
    activity: {| [key: string]: any |},
    apps: {| [key: string]: any |},
    auth: (...args: Array<any>) => Promise<{| [key: string]: any |}>,
    billing: {| [key: string]: any |},
    checks: {| [key: string]: any |},
    codeScanning: {| [key: string]: any |},
    codesOfConduct: {| [key: string]: any |},
    emojis: {| [key: string]: any |},
    enterpriseAdmin: {| [key: string]: any |},
    gists: {| [key: string]: any |},
    git: {| [key: string]: any |},
    gitignore: {| [key: string]: any |},
    graphql: (...args: Array<any>) => any,
    hook: (...args: Array<any>) => any,
    interactions: {| [key: string]: any |},
    issues: {| [key: string]: any |},
    licenses: {| [key: string]: any |},
    log:{| [key: string]: any |},
    markdown: {| [key: string]: any |},
    meta: {| [key: string]: any |},
    migrations: {| [key: string]: any |},
    orgs: {| [key: string]: any |},
    packages: {| [key: string]: any |},
    paginate: (...args: Array<any>) => any,
    projects: {| [key: string]: any |},
    pulls: {| [key: string]: any |},
    rateLimit: {| [key: string]: any |},
    reactions: {| [key: string]: any |},
    repos: {
      getContent: ({|
        owner: string,
        repo: string,
        path?: string,
        ref?: string,
      |}) => Promise<{|
        data: Array<{|
          download_url: any,
          git_url: string,
          html_url: string,
          name: string,
          path: string,
          sha: string,
          size: number,
          type: string,
          url: string,
          _links: {|
            git: string,
            html: string,
            self: string,
          |}
        |}>,
        headers: {| [key: string]: any |},
        status: number,
        url: string,
      |}>,
      [key: string]: any,
    },
    request: (...args: Array<any>) => any,
    rest: {| [key: string]: any |},
    search: {| [key: string]: any |},
    secretScanning: {| [key: string]: any |},
    teams: {| [key: string]: any |},
    users: {| [key: string]: any |},
  }

  declare module.exports: {|
    Octokit: typeof Octokit,
  |};
}
