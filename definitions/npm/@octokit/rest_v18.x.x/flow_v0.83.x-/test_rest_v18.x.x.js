// @flow
import { describe, test } from 'flow-typed-test';
import { Octokit } from '@octokit/rest';

describe('@octokit/rest', () => {
  const octokit = new Octokit();

  test('constructor', () => {
    new Octokit();
    new Octokit({ auth: '123' });

    // $FlowExpectedError[incompatible-call]
    new Octokit(123);
    // $FlowExpectedError[incompatible-call]
    new Octokit({ auth: 1 });
  });

  describe('repos', () => {
    const { repos } = octokit;

    test('getContent', () => {
      repos.getContent({
        owner: 'flow-typed',
        repo: 'eslint-plugin-ft-flow',
      }).then((res) => {
        res.data.forEach((file) => {
          file.download_url.toLowerCase();
          file.git_url.toLowerCase();
          file.html_url.toLowerCase();
          file.name.toLowerCase();
          file.path.toLowerCase();
          file.sha.toLowerCase();
          file.size.toFixed(2);
          file.type.toLowerCase();
          file.url.toLowerCase();
          file._links.git.toLowerCase();
          file._links.html.toLowerCase();
          file._links.self.toLowerCase();

          // $FlowExpectedError[prop-missing]
          file.foo();
          // $FlowExpectedError[prop-missing]
          file._links.foo();
        });
        res.headers.foo();
        res.status.toFixed(2);
        res.url.toLowerCase();
      });
      repos.getContent({
        owner: 'flow-typed',
        repo: 'eslint-plugin-ft-flow',
        path: 'src/rules',
      });
      repos.getContent({
        owner: 'flow-typed',
        repo: 'eslint-plugin-ft-flow',
        path: 'src/rules',
        ref: 'master',
      });

      // $FlowExpectedError[incompatible-call]
      repos.getContent();
      // $FlowExpectedError[prop-missing]
      repos.getContent({});
      // $FlowExpectedError[prop-missing]
      repos.getContent({
        owner: 'flow-typed',
      });
      // $FlowExpectedError[prop-missing]
      repos.getContent({
        repo: 'flow-typed',
      });
    });

    test('listReleases', () => {
      repos.listReleases({
        owner: 'flow-typed',
        repo: 'eslint-plugin-ft-flow',
      }).then((res) => {
        res.data.forEach((file) => {
          file.url.toLowerCase();
          file.assets_url.toLowerCase();
          file.upload_url.toLowerCase();
          file.html_url.toLowerCase();
          file.id.toFixed(2);
          file.author.login.toLowerCase();
          file.author.id.toFixed(2);
          file.author.node_id.toLowerCase();
          file.author.avatar_url.toLowerCase();
          file.author.gravatar_id.toLowerCase();
          file.author.url.toLowerCase();
          file.author.html_url.toLowerCase();
          file.author.followers_url.toLowerCase();
          file.author.following_url.toLowerCase();
          file.author.gists_url.toLowerCase();
          file.author.starred_url.toLowerCase();
          file.author.subscriptions_url.toLowerCase();
          file.author.organizations_url.toLowerCase();
          file.author.repos_url.toLowerCase();
          file.author.events_url.toLowerCase();
          file.author.received_events_url.toLowerCase();
          file.author.type.toLowerCase();
          file.author.site_admin.valueOf();
          file.node_id.toLowerCase();
          file.tag_name.toLowerCase();
          file.target_commitish.toLowerCase();
          file.name.toLowerCase();
          file.draft.valueOf();
          file.prerelease.valueOf();
          file.created_at.toLowerCase();
          file.published_at.toLowerCase();
          file.assets[1]
          file.tarball_url.toLowerCase();
          file.zipball_url.toLowerCase();
          file.body.toLowerCase();

          // $FlowExpectedError[prop-missing]
          file.foo();
          // $FlowExpectedError[prop-missing]
          file.author.foo();
        });
        res.headers.foo();
        res.status.toFixed(2);
        res.url.toLowerCase();
      });
      repos.listReleases({
        owner: 'flow-typed',
        repo: 'eslint-plugin-ft-flow',
        page: 2,
      });

      // $FlowExpectedError[incompatible-call]
      repos.listReleases();
      // $FlowExpectedError[prop-missing]
      repos.listReleases({});
      // $FlowExpectedError[prop-missing]
      repos.listReleases({
        owner: 'flow-typed',
      });
      // $FlowExpectedError[prop-missing]
      repos.listReleases({
        repo: 'flow-typed',
      });
    });
  });
});
