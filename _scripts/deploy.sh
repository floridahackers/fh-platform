#!/bin/bash
if [ $TRAVIS_BRANCH == 'master' ] ; then
	echo "Deploying to remote"
	git add .
	git commit -m "Deploy build #$TRAVIS_BUILD_NUMBER"
	git push --force deploy master
else
	echo "Not deploying, since this branch isn't master."
fi