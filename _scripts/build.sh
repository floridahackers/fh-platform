#!/bin/bash

echo "Initializing git"
git init
git remote add deploy "deploy@floridahackers.com:$fh_site_path"
git config user.name "Travis CI"
git config user.email "fh+travisCI@gmail.com"

echo "Fetching from remote"
git fetch deploy

echo "Building..."
npm run build