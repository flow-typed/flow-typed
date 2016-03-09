#!/bin/bash
set -o errexit

for config in $(find . -name '.flowconfig'); do
  echo $config
  dir=$(dirname $config)
  echo "Checking $dir..."
  flow check $dir
done

echo "All tests passed"
