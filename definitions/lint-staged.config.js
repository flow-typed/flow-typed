module.exports = {
  'package.json': [
    'prettier-package-json --write',
    'prettier --write',
    'git add',
  ],
  '*.js': ['eslint --fix', 'git add'],
};
