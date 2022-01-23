// @flow
import { describe, it } from 'flow-typed-test';
import { Octokit } from '@octokit/rest';

describe('@octokit/rest', () => {
  const octokit = new Octokit();

  describe('repos', () => {
    const { repos } = octokit;

    it('getContent', () => {
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
  });
});
