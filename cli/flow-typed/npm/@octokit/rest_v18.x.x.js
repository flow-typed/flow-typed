// flow-typed signature: a09a5a92a3c1ded961684da6ff393a70
// flow-typed version: 15ea1b476e/@octokit/rest_v18.x.x/flow_>=v0.83.x

declare module '@octokit/rest' {
  declare class Octokit {
    constructor(options?: {|
      auth?: string,
    |}): this;

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
      /**
       * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the Repository Tags API.
       *
       * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
       */
      listReleases: ({|
        /**
         * The account owner of the repository. The name is not case sensitive.
         */
        owner: string,
        /**
         * The name of the repository. The name is not case sensitive.
         */
        repo: string,
        /**
         * The number of results per page (max 100).
         */
        page?: number,
        /**
         * Page number of the results to fetch.
         */
        per_page?: number,
      |}) => Promise<{|
        data: Array<{|
          url: string,
          assets_url: string,
          upload_url: string,
          html_url: string,
          id: number,
          author: {
            login: string,
            id: number,
            node_id: string,
            avatar_url: string,
            gravatar_id: string,
            url: string,
            html_url: string,
            followers_url: string,
            following_url: string,
            gists_url: string,
            starred_url: string,
            subscriptions_url: string,
            organizations_url: string,
            repos_url: string,
            events_url: string,
            received_events_url: string,
            type: string,
            site_admin: boolean,
          },
          node_id: string,
          tag_name: string,
          target_commitish: string,
          name: any,
          draft: boolean,
          prerelease: boolean,
          created_at: string,
          published_at: string,
          assets: Array<any>,
          tarball_url: string,
          zipball_url: string,
          body: string,
        |}>,
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
