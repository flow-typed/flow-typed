#!/bin/bash
set -o errexit

for config in */.flowconfig; do
  dir=$(dirname $config)
  echo "Checking $dir..."
  flow check $dir
done

echo "All tests passed"
