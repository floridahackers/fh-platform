#!/bin/bash

echo "Importing the SSH deployment key"
openssl aes-256-cbc -K $encrypted_9cf28b65941a_key -iv $encrypted_9cf28b65941a_iv -in fh-deploy.enc -out fh-deploy -d
rm fh-deploy.enc
chmod 600 fh-deploy
mv fh-deploy ~/.ssh/id_rsa

echo "Installing npm dependencies"
npm install