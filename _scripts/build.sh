#!/bin/bash

echo "Initializing git"
git init
git remote add deploy "deploy@floridahackers.com:/var/www/floridahackers.com/.git"
git config user.name "Travis CI"
git config user.email "fh+travisCI@gmail.com"

echo "Fetching from remote"
git fetch deploy
git checkout -b build

echo "Building..."
npm run build

echo "Commiting build"
git add .
git commit -q -m "Build #$TRAVIS_BUILD_NUMBER"

git checkout master
git merge -X theirs --commit -m "Merge build #$TRAVIS_BUILD_NUMBER" build