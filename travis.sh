#!/bin/bash
set -o errexit
set -v

# We manage the git clone manually so that we have "origin/master" available to 
# us for diffing
if [ ! -z $TRAVIS ]; then
  git fetch origin master
  echo "TRAVIS_REPO_SLUG: $TRAVIS_REPO_SLUG"
  git clone https://github.com/$TRAVIS_REPO_SLUG.git $TRAVIS_REPO_SLUG
  cd $TRAVIS_REPO_SLUG
  git fetch origin
  echo "$TRAVIS_COMMIT_RANGE"
  PR_COMMIT=`echo "$TRAVIS_COMMIT_RANGE"|cut -d. -f4`
  echo "Checking out $PR_COMMIT..."
  git checkout $PR_COMMIT
  echo "PR_COMMIT checked out."
  echo "git branches:"
  git branch
fi

cd definitions
npm install
npm test
cd ../cli
npm install
./node_modules/.bin/flow
node dist/cli.js run-ci-tests ..
