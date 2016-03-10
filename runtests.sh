#!/bin/bash
set -o errexit

for config in $(find . -name '.flowconfig'); do
  dir=$(dirname $config)
  if [ "$dir" != "./npm" ]; then
    echo $config
    echo "Checking $dir..."
    flow check $dir
  fi
done

echo "All tests passed"
